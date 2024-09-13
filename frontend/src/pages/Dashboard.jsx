import AppBar from "../components/AppBar"
import Balance from "../components/Balance";
import Users from "../components/Users";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const Dashboard = ()=>{

    let [amount,setAmount]= useState(0)

    amount = JSON.parse(localStorage.getItem('account_details'))?.balance
    if(!amount){
        const fetchAccountDetails=async()=>{
                let res;
                try{
                 res = await axios.post('http://localhost:3000/api/v1/account/transfer',   
                    {
                            receiverId:JSON.parse(localStorage.getItem('user'))._id,
                            amount:0
                    },
                    {
                    headers: {
                        authorization: 'Bearer '+localStorage.getItem('token')
                    }
                }
            )
            if(res.status==200){
                setTimeout(()=>{
                    setAmount(res?.data?.user_details.balance)
                    localStorage.setItem('account_details',JSON.stringify(res.data.user_details))
                },100)
            }
        }catch(err){
                console.log(err.response.data.message)
        }
    }
    fetchAccountDetails()
    }

    return <div>
        <AppBar></AppBar>
        <div className="m-8">
            <Balance value={amount} ></Balance>
            <Users></Users>
        </div>
    </div>
}

export default Dashboard;
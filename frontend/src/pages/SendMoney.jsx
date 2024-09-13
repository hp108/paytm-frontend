import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from "react";
import axios from 'axios';

const SendMoney = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const user = location.state;
    const [amount,setAmount]= useState(0)



   const onClose=()=>{
    navigate('/dashboard')
   }

  return (<>
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-3 w-96">
        
        <div className="flex justify-between p-0">
            <div className="font-bold text-2xl text-center justify-center w-full p-0">Send Money</div>
            <button onClick={onClose}>&#10005;</button>
        </div>
        <div className="mt-7 flex items-center">
            <div className="bg-green-500 rounded-full flex flex-col h-12 w-12 justify-center ">
                    <div className=" flex flex-col justify-center items-center font-bold text-3xl text-slate-200">
                        U
                    </div>
            </div>
            <div className="ml-3 font-bold text-xl">
                    {user.firstname} {user.lastname}
            </div>
        </div>


        <div className="mt-4">
          <p className='p-0.5' >Amount (in Rs)</p>
        </div>

        <div className="mt-2 flex flex-col items-center">
            <input onChange={(e)=>{
                setAmount(e.target.value)
            }}  className='w-full p-1 border border-slate-500 rounded'  placeholder='Enter Amount'  type="number" />
            <button onClick={async ()=>{
                let res;
                try{
                 res = await axios.post('http://localhost:3000/api/v1/account/transfer',   
                    {
                            receiverId:user._id,
                            amount:+amount
                    },
                    {
                    headers: {
                        authorization: 'Bearer '+localStorage.getItem('token')
                    }
                }
            )
            if(res.status==200){
                setTimeout(()=>{
                    localStorage.setItem('account_details',JSON.stringify(res.data.user_details))
                    navigate('/dashboard')
                },100)
            }
        }catch(err){
                toast.error(err.response.data.message)
        }
            }} className='mt-3 rounded  bg-green-500 text-white p-1 px-2 w-full'>Send Money</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SendMoney;

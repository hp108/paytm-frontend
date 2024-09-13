import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

const Users = ()=>{

    const [users,SetUsers]= useState([])
    const [searchTerm,SetSearchTerm]=useState('')

    useEffect(()=>{
        const sendRequest = async()=>{
            const res =await axios.get('http://localhost:3000/api/v1/user/bulk?filter='+searchTerm,
                {
                    headers:{
                    authorization:'Bearer '+localStorage.getItem('token')
                }
            }
            )
            SetUsers(res.data.users)
        }
        sendRequest();
    },[searchTerm])
    let t=null
    

    return <div>
        <div className="text-xl font-bold mt-6">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e)=>{
                clearTimeout(t)
                t=setTimeout(()=>{
                    SetSearchTerm(e.target.value)
                },1000)
            }} className="w-full border border-slate-300 rounded px-2 p-1" placeholder="Search User" type="text" />
        </div>
        <div>
            {users.length>0 && users.map(user => <User key={user._id} user={user} ></User>)}
        </div>
    </div>

}

export default Users;
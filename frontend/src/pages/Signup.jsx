import React from "react"
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Signup = ()=>{

    const [firstname,SetFirstName]= useState('')
    const [lastname,SetLastName]= useState('')
    const [username,SetUserName]= useState('')
    const [password,SetPassword]= useState('')
    const navigate= useNavigate()



return <div className="bg-slate-500 h-screen flex justify-center">
 <div className="flex flex-col justify-center">
  <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
    <Heading label={"Sign up"} />
    <SubHeading label={"Enter your infromation to create an account"} />
    <InputBox onChange={(e)=>{
        SetFirstName(e.target.value)
    }}  placeholder="John" label={"First Name"} />
    <InputBox onChange={(e)=>{
        SetLastName(e.target.value)
    }} placeholder="Doe" label={"Last Name"} />
    <InputBox onChange={(e)=>{
        SetUserName(e.target.value)
    }} placeholder="***@gmail.com" label={"Email"} />
    <InputBox onChange={(e)=>{
        SetPassword(e.target.value)
    }} placeholder="******" label={"Password"} />
    <div className="pt-4">
      <Button onClick={async()=>{
        try{
            const res =await axios.post('http://localhost:3000/api/v1/user/signup',{
                firstname,
                lastname,
                username,
                password
            })
            if(res.status == 200)
            {
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('user',JSON.stringify(res.data.user))
                navigate('/dashboard')
            }
        }catch(err){
            toast.error(err.response.data.message)
        }
      }} label={"Sign up"} />
    </div>
    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
 </div>
</div>
</div>

}

export default Signup;

import React, { useState } from "react"
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import BottomWarning from "../components/BottomWarning"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Signin = ()=>{

    const [username,SetUserName]= useState('')
    const [password,SetPassword]= useState('')
    const navigate = useNavigate();

return (
<div className="bg-slate-500 h-screen flex justify-center" >
    <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg text-center p-2 px-4 h-max w-80"  >
    <Heading label={'Signin'} ></Heading>
    <SubHeading label={'Enter your infromation to create an account'}></SubHeading>
    <InputBox onChange={(e)=>{
        SetUserName(e.target.value)
    }}  placeholder="***@gmail.com" label={"Email"} />
    <InputBox onChange={(e)=>{
        SetPassword(e.target.value)
    }} placeholder="******" label={"Password"} />
    <div className="pt-4">
      <Button onClick={async (e)=>{
        try{
        const res = await axios.post('http://localhost:3000/api/v1/user/signin',{
            username,
            password
        })
        if(res.status==200){
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('user',JSON.stringify(res.data.user))
        navigate('/dashboard')
        }
    }catch(err){
        toast.error(err.response.data.message)
    }
      }} label={"Sign in"} />
    </div>
    <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}  ></BottomWarning>
    </div>
    </div>
</div>)

}

export default Signin
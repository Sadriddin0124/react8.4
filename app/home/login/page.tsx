"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const Homework2 = () => {
  const router = useRouter()
  const [phone, setPhone] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleRegister =(e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    if (phone === "998886330124" && password === "1234") {
      router.push("/home/carstable")
    } else {
      alert("err")
    }
  }
  return (
    <div className='w-[100%] h-[100vh] bg-gradient-to-tr from-blue-600 to-rose-500 flex items-center justify-center'>
      <div className='w-[400px] p-[50px] rounded-[20px] bg-white flex flex-col items-center gap-[30px]'>
        <h1 className='text-[30px] font-[900]'>Login</h1>
        <form onSubmit={handleRegister} className='w-[100%] flex flex-col'>
          <label className='text-[12px]' htmlFor="number">Phone number</label>
          <input onChange={(e)=>setPhone(e.target.value)} id='number' type="number" placeholder='Type your phone number' className='mb-[30px] rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-[5px] py-[8px] border-b-2 outline-none'/>
          <label className='text-[12px]' htmlFor="password">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} id='password' type="password" placeholder='Type your password' className='mb-[30px] rounded-sm px-[5px] py-[8px] border-b-2 outline-none'/>
          <button className='w-[100%] rounded-full bg-gradient-to-r from-blue-600 to-rose-500 p-[8px] hover:bg-gradient-to-l text-white'>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Homework2

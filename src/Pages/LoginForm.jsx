import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdOutlineKey } from "react-icons/md";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const emailRegex = "/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;"

    const userLogin = async () => {
        if (!username || username.trim() === "") {
            return alert("Invalid username!")
        } else if (!email || email.trim() === "") {
            return alert("Invalid email!")
        } else if (!password || password.trim() === "") {
            return alert("Invalid password!")
        }
        try {
            const response = await axios.post('https://quickserve-t1f6.onrender.com/api/v1/user/register', {
                name:username,
                email,
                password
            })
            console.log("user login ", response)
        } catch (error) {
            console.log("Error login!")
        }
    }
    return (
        <div className='w-screen h-screen bg flex justify-center items-center'>
            <div className='blurr p-8 rounded-2xl flex flex-col items-center shadow-xl shadow-black/40'>
                <div className='text-4xl font-bold text-white mb-8'>Login</div>
                <form className='flex flex-col gap-6' onSubmit={(e) => {
                    e.preventDefault()
                    userLogin()
                }}>
                    <div className='flex items-center border-2 border-white rounded-full  md:w-[400px] w-[300px] px-4 py-2 justify-between'>
                        <input value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }} type="text" placeholder='Username' className='text-white placeholder:text-white text-xl outline-0 ' />
                        <FaUser className='text-white text-xl' />
                    </div>
                    <div className='flex items-center border-2 border-white rounded-full   md:w-[400px] w-[300px]  px-4 py-2 justify-between'>
                        <input value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="text" placeholder='Email' className='text-white placeholder:text-white text-xl outline-0 ' />
                        <IoMail className='text-white text-xl' />
                    </div>
                    <div>
                        <div className='flex items-center border-2 border-white rounded-full   md:w-[400px] w-[300px]  px-4 py-2 justify-between'>
                            <input value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} type="password" placeholder='Password' className='text-white placeholder:text-white text-xl outline-0 ' />
                            <MdOutlineKey className='text-white text-2xl' />
                        </div>
                        <div className='flex justify-between text-white mt-4 p-2'>
                            <button className='underline'>Show Password</button>
                            <button className='underline'>Forget Password</button>
                        </div>
                    </div>
                    <button className='bg-white font-bold p-2 rounded-full text-xl'>Login</button>
                    <div className='flex items-center justify-center text-white gap-1'>
                        <div>Don't have an account?</div>
                        <div className='font-bold'>Register</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
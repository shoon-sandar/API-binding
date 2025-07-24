import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdOutlineKey } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [isRegister, setisRegister] = useState(false)
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    const navigate = useNavigate()

    const userLogin = async () => {
        if (!username || username.trim() === "") {
            return alert("Invalid username!")
        } else if (!emailRegex.test(email)) {
            return alert("Invalid email!")
        } else if (!password || password.trim() === "") {
            return alert("Invalid password!")
        }
        try {
            setLoading(true)
            const response = await axios.post(isRegister ? 'https://quickserve-t1f6.onrender.com/api/v1/user/register' : 'https://quickserve-t1f6.onrender.com/api/v1/user/login', {
                name: username,
                email,
                password
            })
            console.log(response?.data)
            if (response?.data?.success) {
                // alert(response?.data?.message)
                setUsername('')
                setEmail('')
                setPassword('')
                localStorage.setItem("user-data", JSON.stringify(response?.data?.data))
                navigate('/home')


            }

        } catch (error) {
            console.log("Error login!", error?.response?.data?.message)
            alert(error?.response?.data?.message)
        }
        finally { setLoading(false) }
    }
    return (
        <div className='w-screen h-screen bg flex justify-center items-center'>
            <div className='blurr p-8 rounded-2xl flex flex-col items-center shadow-xl shadow-black/40'>
                <div className='text-4xl font-bold text-white mb-8'>{
                    isRegister ? "Register" : "Login"
                }</div>
                <form className={`flex flex-col gap-6 ${loading && 'opacity-50'}`} onSubmit={(e) => {
                    e.preventDefault()
                    userLogin()
                }}>
                    <div className='flex items-center border-2 border-white rounded-full  md:w-[400px] w-[300px] px-4 py-2 justify-between'>
                        <input value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }} type="text" placeholder='Username' className='w-[90%] placeholder:opacity-30 text-white placeholder:text-white text-xl outline-0 ' />
                        <FaUser className='text-white text-xl' />
                    </div>
                    <div className='flex items-center border-2 border-white rounded-full   md:w-[400px] w-[300px]  px-4 py-2 justify-between'>
                        <input value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="text" placeholder='Email' className='w-[90%] placeholder:opacity-30 text-white placeholder:text-white text-xl outline-0 ' />
                        <IoMail className='text-white text-xl' />
                    </div>
                    <div>
                        <div className='flex items-center border-2 border-white rounded-full   md:w-[400px] w-[300px]  px-4 py-2 justify-between'>
                            <input value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password' className='w-[90%] placeholder:opacity-30 text-white placeholder:text-white text-xl outline-0 '
                            />
                            <MdOutlineKey className='text-white text-2xl' />
                        </div>
                        <div className='flex justify-between text-white mt-4 p-2'>
                            <button className='underline'>Forget Password</button>

                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='showpassword' checked={showPassword} onChange={() => {
                                    setShowPassword(!showPassword)
                                }} />
                                <label htmlFor="showpassword">Show password</label>
                            </div>
                        </div>
                    </div>
                    <button className='bg-white font-bold p-2 rounded-full text-xl active:opacity-70'>
                        {
                            isRegister ? 'Register' : 'Login'
                        }</button>
                    <div className='flex items-center justify-center text-white gap-1'>
                        <div>{
                            isRegister ? "Already have an account?" : "Don't have an account?"
                        }</div>
                        <div className='font-bold active:opacity-50 cursor-pointer' onClick={() => {
                            setisRegister(!isRegister)
                        }}>{
                                isRegister ? "Login" : "Sing up"
                            }</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
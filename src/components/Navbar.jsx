import React from 'react'
import { navItems } from '../constants'
import { Link, NavLink } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
    const userData = JSON.parse(localStorage.getItem('user-data'))

    console.log("user data ", userData)


    return (
        <nav className='bg-gradient-to-r px-12 flex justify-between items-center p-4 bg-slate-100 w-full'>

            <h1 className='text-xl font-[600]'>Shomyn</h1>

            <div className='flex items-center gap-10'>
                <div className='flex gap-4'>
                    {
                        navItems.map((nav) => (
                            <NavLink
                                key={nav.name}
                                to={nav.path}
                                className={({ isActive }) =>
                                    `${isActive ? 'text-black' : 'text-black/50'} relative group`
                                }>
                                {nav.name}
                                <span className='absolute left-0 -bottom-1 w-0 bg-black transition-all duration-600  h-[2px] group-hover:w-full'>

                                </span>
                            </NavLink>
                        ))
                    }
                </div>

                <div className=' px-10 py-2  border-l-4'>
                    <div className='flex items-center gap-4'>
                        <FaCircleUser className='text-2xl text-black ' />
                        <div className='font-[500]'>
                            {
                                userData?.name
                            }
                        </div>
                    </div>
                </div>

            </div >
        </nav >
    )
}

export default Navbar

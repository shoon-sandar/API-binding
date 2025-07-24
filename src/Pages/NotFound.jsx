import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center gap-4'>
            <div className='text-xl'>Page is Not Available!</div>
            <Link
                to={"/home"}
                className='bg-gradient-to-br from-purple-400 to-blue-400 text-white p-2 rounded-lg cursor-pointer 
            active:from-blue-400 active:to-purple-400'>Go Back to Home</Link>
        </div>
    )
}

export default NotFound

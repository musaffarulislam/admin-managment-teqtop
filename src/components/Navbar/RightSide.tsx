import React from 'react'
import { MdOutlineHorizontalRule } from 'react-icons/md';
import { VscBell } from 'react-icons/vsc';

export const RightSide = () => {
    return (
        <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-green cursor-pointer" viewBox="0 0 50 50">
                <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"></path>
            </svg>
            <MdOutlineHorizontalRule className="rotate-90 text-3xl text-gray" />
            <div className='flex'>
                <div className='relative cursor-pointer'>
                    <div className='w-6 h-6 flex justify-center items-center bg-gray rounded-full'>
                        <VscBell />
                    </div>
                    <div className='w-3 h-3 bg-red-500 rounded-full absolute border-2 border-white top-1 right-1 -mt-1 -mr-1'></div>
                </div>
                <div className='w-6 h-6 flex justify-center items-center bg-gray rounded-full ms-2 cursor-pointer'>
                    <img
                        src="https://i.pinimg.com/564x/0d/3b/68/0d3b68a111a3a08a5f8996e83aeeeba2.jpg"
                        alt="Avatar"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

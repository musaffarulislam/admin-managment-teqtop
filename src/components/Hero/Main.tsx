import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiFilter } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';

export const Main = () => {
    return (
        <div className='ml-16 sm:ml-24 mt-12 h-full w-full bg-background p-8'>
            <div className='w-full h-full bg-primary drop-shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        Total(100)
                    </div>
                    <div className='flex gap-4'>
                        <div className='relative flex items-center'>
                            <BsSearch className="absolute w-4" />
                            <input
                                type="text"
                                className="border-b border-gray-300 focus:outline-none focus:border-blue-500 ps-6"
                                placeholder="Search by name"
                            />
                        </div>
                        <button className='bg-blue p-2 px-4 text-primary text-sm rounded-md flex items-center gap-1'><BiFilter className="w-5 h-5" /> Filter</button>
                        <button className='bg-green p-2 px-4 text-primary text-sm rounded-md flex items-center gap-1'><HiPlus className="w-5 h-5" /> Add New</button>
                    </div>
                </div>
                <hr className='my-4 text-gray' /> 
            </div>
        </div>
    )
}

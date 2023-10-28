import React from 'react'

export const LeftSide = () => {
    return (
        <div className='flex font-bold items-center'>
            <div className='w-8 h-8 cursor-pointer'>
                <img
                    src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg"
                    alt="Logo"
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <div className='sm:ms-3 md:ms-6 lg:ms-9 cursor-pointer'>
                Sub admin
            </div>
        </div>
    )
}

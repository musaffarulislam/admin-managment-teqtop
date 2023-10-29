import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiFilter } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { filterUser, searchUsers, removeFilter } from '../../services/store/reducer/userSlice';
import Swal from 'sweetalert2';

export const Heading = () => {
    const [isModal, setIsModal] = useState(false)
    const [filterDropdown, setfilterDropdown] = useState(false)
    const [filterCountry, setFilterCountry] = useState<string[]>([])

    const users = useSelector((state: any) => state.user.users)
    const filteredUsers = useSelector((state: any) => state.user.filteredUsers)
    const dispatch = useDispatch<any>();

    const handleModal = () => {
        setIsModal(!isModal)
    }
   
    const handleRemoveFilter = () => {
        dispatch(removeFilter())
    }

    const handleFilterDropdown = () => {
        setfilterDropdown(!filterDropdown)
    }

    const handleFilterCountry = (country: string) => {
        if (filterCountry.includes(country)) {
            const updatedFilterCountry = filterCountry.filter((c) => c !== country);
            setFilterCountry(updatedFilterCountry);
        } else {
            setFilterCountry([...filterCountry, country]);
        }
    };

    const handleAddNew = () =>{
        Swal.fire({
            icon: 'error',
            title: 'something went wrong',
            text: 'This feature is not available',
          })
    }

    const handleSubmit = () => {
        if (filterCountry.length !== 0) {
            dispatch(filterUser(filterCountry))
            setFilterCountry([])
            handleModal()
        } else {
            handleModal()
            Swal.fire({
                icon: 'error',
                title: 'something went wrong',
                text: 'Please select any country',
            })
        }
    }

    const handleSearch = (text: string) =>{ 
        if(text){
            dispatch(searchUsers(text))
        }else{
            dispatch(removeFilter())
        }
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='font-bold'>
                Total(10)
            </div>
            <div className='flex gap-4'>
                <div className='relative flex items-center'>
                    <BsSearch className="absolute w-4" />
                    <input
                        type="text"
                        className="border-b border-gray-300 focus:outline-none focus:border-blue-500 ps-6 hidden sm:block"
                        placeholder="Search by name"
                        onChange={(e)=> handleSearch(e.target.value)}
                    />
                </div>
                {
                    filteredUsers.length ? (
                        <button className='bg-red-600 p-2 px-4 text-primary text-sm rounded-md flex items-center gap-1' onClick={() => handleRemoveFilter()}>
                            <BiFilter className="w-5 h-5" />
                            <div className='hidden sm:block'>Remove Filter</div>
                        </button>
                    ) : (
                        <button className='bg-blue p-2 px-4 text-primary text-sm rounded-md flex items-center gap-1' onClick={() => handleModal()}>
                            <BiFilter className="w-5 h-5" />
                            <div className='hidden sm:block'>Filter</div>
                        </button>
                    )
                }
                <button className='bg-green p-2 px-4 text-primary text-sm rounded-md flex items-center gap-1' onClick={()=> handleAddNew()}>
                    <HiPlus className="w-5 h-5" />
                    <div className='hidden sm:block'>Add New</div>
                </button>
            </div>

            {isModal && (
                <div
                    id="filterModal"
                    tabIndex={-1}
                    className="flex overflow-y-auto overflow-x-hidden fixed  z-30 justify-center items-center w-full inset-0 h-screen bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
                        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Filter
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="updateProductModal"
                                    onClick={() => handleModal()}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>

                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-black w-full border-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => handleFilterDropdown()}>Select <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>
                            {
                                filterDropdown && (
                                    <div id="dropdownDivider" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-5/6 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                            {
                                                users.map((user: any, index: number) => {
                                                    return (
                                                        <li>
                                                            <a href="#" key={index} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleFilterCountry(user.country)}>{user.country}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                            <div className='my-2 flex flex-wrap gap-2'>
                                {
                                    filterCountry && filterCountry.map((country, index) => {
                                        return (
                                            <div key={index} className='bg-gray rounded-md w-fit text-sm p-2 flex items-center gap-2 cursor-pointer' onClick={() => handleFilterCountry(country)}>{country} <ImCross className="text-red-500 w-3 h-3" /></div>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex justify-between'>
                                <button className='bg-gray  w-fit p-2 rounded-md' onClick={() => handleModal()}>Cancel</button>
                                <button className='bg-green text-primary w-fit p-2 rounded-md' onClick={() => handleSubmit()}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

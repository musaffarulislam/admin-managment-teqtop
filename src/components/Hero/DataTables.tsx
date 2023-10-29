import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from '../../services/config/axios';
import { AiFillEye } from 'react-icons/ai';
import { RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../services/store/reducer/userSlice';

export const DataTables = () => {

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  const users = useSelector((state: any) => state.user.users)
  const isLoading = useSelector((state: any) => state.user.isLoading)
  const filteredUsers = useSelector((state: any) => state.user.filteredUsers)

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      cell: row => (
        <div className='flex gap-2'>
          <img src={row.profile_picture} alt="Profile" className='w-5 h-5 rounded-full' />
          {row.first_name} {row.last_name}
        </div>
      )
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
      width: '300px',
    },
    {
      name: 'Phone',
      selector: 'phone',
      sortable: true,
    },
    {
      name: 'Assign Category',
      selector: 'job',
      sortable: true,
    },
    {
      name: 'Country',
      selector: 'country',
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className='flex justify-between gap-2'>
          <button className='p-1  border-2 border-yellow-100 rounded-md hover:bg-yellow-200' onClick={() => handleButtons()}><AiFillEye className="w-5 h-5  text-yellow-400" /></button>
          <button className='p-1 border-2 border-emerald-100 rounded-md hover:bg-emerald-200' onClick={() => handleButtons()}><RiPencilLine className="w-5 h-5  text-emerald-400" /></button>
          <button className='p-1 border-2 border-red-100 rounded-md hover:bg-red-200' onClick={() => handleButtons()}><RiDeleteBin6Line className="w-5 h-5  text-red-400" /></button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: false,
    }
  ];

  const handleButtons = () => {
    Swal.fire({
      icon: 'error',
      title: 'something went wrong',
      text: 'This feature is not available',
    })
  };
  return (
    <>
      {
        isLoading ? (
          <div className='flex justify-center'>loading....</div>
        ) : (
          <DataTable
            className='m-0'
            columns={columns}
            data={filteredUsers.length ? filteredUsers : users}
            pagination
            striped={true}
          />
        )
      }
    </>
  )
};




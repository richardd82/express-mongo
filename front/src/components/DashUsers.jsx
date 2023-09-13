import axios from 'axios';
import React, { useEffect, useState } from "react";

const DashUsers = () => {
    const [users, setUsers] = useState([])
    let count = 1;

    const getUsers = async () => {
        try {
            const res = await axios.get('http://localhost:3000/users')
            // console.log(res?.data)
            setUsers(res?.data)
        } catch (error) {
            console.log({ message: error.message })
        }
    }
    useEffect(() => {
        if (users?.length === 0) {
            getUsers()
        }
    }, [users?.length])
    // console.log('Los Usuarios:', users)
    return (
        <div className='grid grid-cols-4 mt-4'>
            <div className='border-2 border-zinc-300 bg-slate-400'>No.</div>
            <div className='border-2 border-zinc-300 bg-slate-400'>Name</div>
            <div className='border-2 border-zinc-300 bg-slate-400'>E-mail</div>
            <div className='border-2 border-zinc-300 bg-slate-400'>Role</div>
            {
                users?.map((u, index) => {

                    return (
                        <React.Fragment key={index}>
                            <div className='mt-2 border-2 border-zinc-300 bg-slate-800 text-white font-thin'>{count++}</div>
                            <div className='mt-2 border-2 border-zinc-300 bg-slate-800 text-white font-thin'>{u.name}</div>
                            <div className='mt-2 border-2 border-zinc-300 bg-slate-800 text-white font-thin'>{u.email}</div>
                            <div className='mt-2 border-2 border-zinc-300 bg-slate-800 text-white font-thin'>{u.role.role_name}</div>
                        </React.Fragment>
                    )
                })
            }

        </div>
    )
}

export default DashUsers
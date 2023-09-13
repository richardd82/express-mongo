import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useEffect, useState } from "react";


const UsersRegister = () => {
  const [roles, setRoles] = useState([])
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const rePassword = watch("rePassword");

  const getRoles = async () => {
    try {
      const res = await axios.get('http://localhost:3000/roles')
      // console.log(res?.data)
      setRoles(res?.data)
    } catch (error) {
      console.log({ message: error.message })
    }
  }
  useEffect(() => {
    if (roles?.length === 0) {
      getRoles()
    }

  }, [roles?.length])

  // console.log('GET Roles', roles)
  const postUser = async (user) => {
    try {
      const res = await axios.post('http://localhost:3000/users', user)
      console.log(res?.data)
      toast.success('User created successfully')
    } catch (error) {
      return toast.error(error?.response?.data?.message)
    }
  }

  const onSubmit = (data) => {
    if (password !== rePassword) {
      toast.error('Passwords do not match')
      return
    } else {
      const user = {
        name: `${data.name} ${data.lastName}`,
        email: data.email,
        password: data.password,
        role: data.role
      }
      postUser(user)
      // console.log(data);
    }
  }

  // console.log(watch("rePassword"))

  return (
    <div>
      <span className="text-white text-3xl mt-20">Register a new user</span>
      <section className="flex justify-center mt-8">

        <form className="flex flex-col w-60 gap-5 text-zinc-300" onSubmit={handleSubmit(onSubmit)}>

          <input type="text" placeholder="Your name" {...register('name', { required: true })} className="h-10 border-2 border-gray-600 bg-gray-700 rounded-md" />
          {errors.name && <span className='block text-red-400 mb-2'>This is required.</span>}
          <input type="text" placeholder="Your lastname" {...register('lastName', { required: true })} className="h-10 border-2 border-gray-600 bg-gray-700 rounded-md" />
          {errors.lastName && <span className='block text-red-400 mb-2'>This is required.</span>}
          <input type="text" placeholder="Write a valid Email" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className="h-10 border-2 border-gray-600 bg-gray-700 rounded-md" />
          {errors.email && <span className='block text-red-400 mb-2'>This email is not valid.</span>}
          <input type="password" placeholder="write a Password" {...register('password', { required: true })} className="h-10 border-2 border-gray-600 bg-gray-700 rounded-md" />
          {errors.password && <span className='block text-red-400 mb-2'>This is required.</span>}
          <input type="password" placeholder="Confirm your password" {...register('rePassword', { required: true })} className="h-10 border-2 border-gray-600 bg-gray-700 rounded-md" />
          {errors.rePassword && <span className='block text-red-400 mb-2'>This is required.</span>}
          <select {...register('role', { required: true })} className="h-10 border-2 border-gray-600 bg-gray-700 rounded-md" label='Select a role'>
            <option value="">Select a role</option>
            {
              roles?.map((r) => {
                return (
                  <option key={r._id} value={r._id} >{r.role_name}</option>
                )
              })
            }
          </select>
          {errors.role && <span className='block text-red-400 mb-2'>This is required.</span>}

          <button type="submit" className="border-2 bg-pink-600 rounded-md w-32 h-9 m-auto mt-2" >Register</button>

        </form>
      </section>
    </div>
  )
}

export default UsersRegister
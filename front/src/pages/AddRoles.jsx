import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import axios from 'axios';


const AddRoles = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const postRol = async (rol) => {
    console.log('FRONT ROL',rol)
    try {
      const res = await axios.post('http://localhost:3000/roles', rol)
      console.log(res?.data)
      toast.success('Rol created successfully')
    } catch (error) {
      return toast.error(error?.response?.data?.message)
    }
  }
  const onSubmit = (data) => {
      const newRol = data.name
      const rol = {
        role_name: newRol.toLowerCase(),
      }
      postRol(rol)
      // console.log(rol);
    
  }
  return (
    <div>
      <span className="text-white text-3xl mt-20">Register a new rol</span>
      <section className="flex justify-center mt-8">

        <form className="flex flex-col w-60 gap-5 text-zinc-300" onSubmit={handleSubmit(onSubmit)}>

          <input type="text" placeholder="Add a rol" {...register('name', { required: true })} className="h-10 border-2 border-gray-600 bg-gray-700 rounded-md" />
          {errors.name && <span className='block text-red-400 mb-2'>This is required.</span>}
          

          <button type="submit" className="border-2 bg-pink-600 rounded-md w-32 h-9 m-auto mt-2" >Add a rol</button>

        </form>
      </section>
    </div>
  )
}

export default AddRoles
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'


const Register = () => {

    const{register,handleSubmit,reset} = useForm()

    const submit= ( data )=>{
    const url ='http://localhost:3022/api/v1/auth/signup'
    axios.get(url,data)
    .then((res) =>console.log (res.data))
    .catch ((err)=>console.log(err))
    }
  return (

 <form onSubmit={handleSubmit(submit)}>
    <div>
    <label htmlFor="name"> Name</label>
       <input {...register('name')} type="text" id='name' placeholder='Name' />
    </div>
    <div>
    <label htmlFor="email">Email </label>
     <input {...register('email')}   type="email" id='email' placeholder='jhone@email.com' /> 
    </div>
    <div>
    <label htmlFor="password"> Password</label>
     <input  {...register('password')}   type="password" id='password' placeholder='**************' /> 
    </div>
    <div>
    <label htmlFor="role"> Role </label> <input {...register('role')}   type="text  " id='role' placeholder='User o Admin' /> 
    </div>
    <button> Register </button>
    <Link  to='' > login</Link>
 </form>
  )
}

export default Register
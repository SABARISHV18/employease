import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
const Updateuser = () => {
    const {id}=useParams()
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3001/getuser/"+id)
        .then(result=>{
            console.log(result);
            const { name, email, age } = result.data;
           setName(name);
           setEmail(email);
           setAge(age);
         })
        .catch(err=>console.log(err))},[])
    const Update=(e)=>
    {
        e.preventDefault();
        axios.put("http://localhost:3001/update/"+id,{name,email,age: parseInt(age)})
        .then(result=>
            {
                console.log(result)
                 navigate('/employee')
            })
        .catch(err=>console.log(err))
    }
  return (

    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-black'>
    <div className='w-75  bg-white p-3 rounded'> 
           <form onSubmit={Update}>
              <h2>Update user</h2>
              <div className='mb-2'>
                   <label htmlFor=''>NAME</label>
                   <input type='text' placeholder='enter name' className='form-control' value={name}  onChange={(e)=>setName(e.target.value)}></input>
              </div>
              <div className='mb-2'>
                   <label htmlFor=''>EMAIL</label>
                   <input type='email' placeholder='enter email' className='form-control'  value={email} onChange={(e)=>setEmail(e.target.value)}></input>
              </div>
              <div className='mb-2'>
                   <label htmlFor=''>AGE</label>
                   <input type='number' placeholder='enter age' className='form-control'  value={age} onChange={(e)=>setAge(e.target.value)}></input>
              </div>
              <button className='btn btn-success'>Update</button>
              
           </form>
    </div>
  </div>
  )
}

export default Updateuser

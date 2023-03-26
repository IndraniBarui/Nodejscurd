import { useEffect, useState } from "react"
import axios from 'axios'

import {  useParams } from "react-router-dom"

const EditUsers=()=>{


  const {id}=useParams();
  
  const [users, setUsers]= useState(({
    name:"",
    city:"",
    country:"",
  }))
  
  const [message, setMessage]=useState();
  const {name, city, country}=users;

  useEffect(()=>{
    loadUser();


},[]
)

const   loadUser=async()=>{
   const result= await axios.get('http://localhost:9090/endpoint/user/' + id);
   setUsers(result.data)
}

const handleChange=(e)=>{
  setUsers({...users,[e.target.name]: e.target.value})
}

const submitForm = async(e)=>{
  e.preventDefault()
  await axios.put('http://localhost:9090/endpoint/update-users/' + id, users)
  .then((result)=>{
    setMessage("sucessfully updateed");
  }).catch((err)=>{
    alert('something went wrong')
  });
}



    return(



<div className='container forms border border-dark' style={{marginTop:"2%"}}>
<form onSubmit={submitForm }>
  <div className='row'> 
  <div className='col-md-12 text-center text-success' style={{marginTop:"5%"}}><h1>Edit Users</h1></div>
  </div>
    
  <div className='row'> 
  <div className='col-md-12 text-center'><h2>{message}</h2></div>
  </div>

  <div className='row'>
  <div className='col-md-2'></div>
  <div className='col-md-4 h3'>Name</div>
  <div className='col-md-4'><input type="text" name="name" value={name} onChange={handleChange} className='form-control'/></div>
  <div className='col-md-2'></div>
  </div>


  <div className='row'>
  <div className='col-md-2'></div>
  <div className='col-md-4 h3'>City</div>
  <div className='col-md-4'><input type="text" name="city" value={city} onChange={handleChange} className='form-control'/></div>
  <div className='col-md-2'></div>
  </div>

  <div className='row'>
  <div className='col-md-2'></div>
  <div className='col-md-4 h3'>Country</div>
  <div className='col-md-4'><input type="text"  name="country" value={country} onChange={handleChange} className='form-control'/></div>
  <div className='col-md-2'></div>
  </div>

  <div className='row'>
  <div className='col-md-2'></div>
  <div className='col-md-8 text-center'>
   <button className='btn btn-warning'>Update </button>
  </div>
  
  <div className='col-md-2'></div>
  </div>
  </form>

</div>

)
}

export default EditUsers
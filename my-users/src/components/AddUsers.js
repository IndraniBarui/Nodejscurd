import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AddUsers=()=>{
  const [message, setMessage]=useState();
  const [users, setUsers]= useState(({
    name:"",
    city:"",
    country:"",
  }))

  const {name, city, country}=users;

  const handleChange=(e)=>{
    setUsers({...users,[e.target.name]: e.target.value})
  }
  const submitForm= async(e)=>{
    e.preventDefault()
     await axios.post("http://localhost:9090/endpoint/add-users", users)
    .then((result)=>{

      // console.log(result);
      // const message="Sucessfully Added";
      setMessage("Suceessfully added");

    }).catch((err)=>{
      alert("something went wrong")
    })
    

  }

// const handleSubmit=async(e)=>{
//   e.preventDefault()
//   console.log(coin_name,contract_address,amount)
//   let result = await fetch('http://localhost:3000/endpoint/add-coins',{
//     method: 'POST',
//     body:JSON.stringify({coin_name,contract_address,amount}),
//     headers:{
//       'Content-Type': 'application/json'
//     },
//   });
//   result = await result.json()
//   console.log(result)
// }

    return(



<div className='container forms border border-dark ' style={{marginTop:"2%"}}>
  <form onSubmit={submitForm}>
  <div className='row'>
  <div className='col-md-12 text-center text-success' style={{marginTop:"5%"}}><h1>Add Users</h1></div>
  </div>
  <div>
  <div className='col-md-12 text-center'><h2>{message}</h2></div>
  </div>
  

  <div className='row'>
  <div className='col-md-2'></div>
  <div className='col-md-4  text-dark h3'>Name</div>
  <div className='col-md-4'><input type="text" name="name" value={name} onChange={handleChange} className='form-control'/></div>
  <div className='col-md-2'></div>
  </div>


  <div className='row'>
  <div className='col-md-2'></div>
  <div className='col-md-4  text-dark h3' >City</div>
   <div className='col-md-4'><input type="text" name="city" value={city} onChange={handleChange} className='form-control'/></div>
  <div className='col-md-2'></div>
  </div>

  <div className='row'>
  <div className='col-md-2'></div>
  <div className='col-md-4  text-dark h3'>Country</div>
  <div className='col-md-4'><input type="text" name="country" value={country} onChange={handleChange} className='form-control'/></div>
  <div className='col-md-2'></div>
  </div>

  <div className='row'>
  <div className='col-md-2'></div>
  <div className='col-md-8 text-center h3'>
   <button className='btn btn-warning'>Add submit</button>
  </div>
  
  <div className='col-md-2'></div>
  </div>

  </form>
</div>

)
}

export default AddUsers
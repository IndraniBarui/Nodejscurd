import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

const ViewUsers=()=>{

    const [message, setMessage]=useState();

    const [users, setUsers]= useState([])
      

    useEffect(()=>{
        loadUser();


    },[]
    )

 const   loadUser=async()=>{
       const result= await axios.get('http://localhost:9090/endpoint/');
       setUsers(result.data)
    }

    const deleteuser= async(id)=>{
        const result= await axios.delete('http://localhost:9090/endpoint/del-users/' + id)
        .then((result)=>{
            loadUser()
            setMessage("Suceessfully deleted");

        }).catch(()=>{
            alert('could not delete')
        })
    }

    return(



<div className='container forms' style={{marginTop:"3%"}}>
  <div className='row'> 
  <div className='col-md-12 text-center text-success'><h1>List of Users</h1></div>
  </div>
  <div>
  <div className='col-md-12 text-center'><h2>{message}</h2></div>
  </div>
 
 <table className="table table-bordered table-hover"> 
    <thead className="bg-warning text-dark text-center align-middle h5">
        <tr>
        <th rowSpan="2" border="2">Sr. no.</th>
        <th rowSpan="2"> Name</th>
        <th rowSpan="2">City</th>
        <th rowSpan="2">Country</th>
        <th colSpan="2" border="1" className="text-center">Action</th>
        
        {/* <th>Delete</th> */}
        </tr>
        <tr>
            <th className="text-center">Delete</th>
            <th className="text-center">Edit</th>
        </tr>
    </thead>
    
    <tbody className="text-center text-dark">
        {users.map((users,index)=>(

      
        <tr>
            <td>{index+1}</td>
            <td>{users.name}</td>
            <td>{users.city}</td>
            <td>{users.country}</td>
            <td><Link to={`editUsers/${users._id}`}  className="btn btn-success ">Edit</Link></td>
            <td><Link to='' onClick={()=>deleteuser(users._id)} className="btn btn-danger ">Delete</Link></td>
        </tr>
        ))
}
    </tbody>

 </table>

</div>

)
}

export default ViewUsers
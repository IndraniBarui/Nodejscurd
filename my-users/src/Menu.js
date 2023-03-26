import { Link } from "react-router-dom"
import './Menu.css';
const Menu=()=>{
   
  

     return(

    
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-success ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">UserDetails</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">List Users</Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link" to="/addUsers">Add Users</Link>
          
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    ) }

    export default Menu
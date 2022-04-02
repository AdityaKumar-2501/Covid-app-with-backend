import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios';

import Button from "@mui/material/Button";

import { BrowserRouter as Router,  Route, Link,Routes} from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    const url = "http://localhost:3005/login"
    console.log(data);

    axios.post(url, data)
      .then(response => console.log("Response", response))
      .catch(err => console.log(err))




  }





  return (
    <div className="login">

<Button variant="contained" color="success" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{ textDecoration: "none" }}>
                Login
              </Button>


<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Log In</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      


{/* <!-- Default form login --> */}
<form class="text-center border border-light p-5" onSubmit={handleSubmit}>

    <p class="h4 mb-4">Sign in</p>

    {/* <!-- Email --> */}
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="E-mail" />

    {/* <!-- Password --> */}
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Password" />

    <div >
        <div>
            {/* <!-- Remember me --> */}
            <div>
            <p class="mb-0">Don't have an account? <a href="">Register</a></p>
            </div>
        </div>
    </div>

    {/* <!-- Sign in button --> */}
    <button class="btn btn-info btn-block my-4" type="submit" data-bs-dismiss="modal" onClick={() => alert("You Login Succesfully")}>Sign in</button>

    
</form>
{/* <!-- Default form login --> */}


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>












    </div>



  );
}


export default Login;

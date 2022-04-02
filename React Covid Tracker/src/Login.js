import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Register from "./Register";

import Button from "@mui/material/Button";

import { BrowserRouter as Router,  Route, Link,Routes} from "react-router-dom";

function Login() {
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
<form class="text-center border border-light p-5" action="#!">

    <p class="h4 mb-4">Sign in</p>

    {/* <!-- Email --> */}
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" />

    {/* <!-- Password --> */}
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" />

    <div >
        <div>
            {/* <!-- Remember me --> */}
            <div>
            <p class="mb-0">Don't have an account? <a href="">Register</a></p>
            </div>
        </div>
    </div>

    {/* <!-- Sign in button --> */}
    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

    
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

import React, { useState, useEffect } from "react";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios';

import Button from "@mui/material/Button";
function Register() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {fname , lname , email , password};
    fetch("http://localhost:3005/createUser",{ mode: 'no-cors'}, {
      method : 'POST',
      headers : {"Content-Type" : "application/json",'Access-Control-Allow-Origin': '*'},
      body : JSON.stringify(data)
      }).then(() => {
        console.log('user registered');


    })
    // e.preventDefault();

    // fetch("http://localhost:3005/createUser", {mode: 'no-cors'}, {
    //   method: 'GET',
      
    // }).then(()=>{
    //   console.log("111111111111");
    // })

    // axios.post("http://localhost:3005/createUser",{ mode: 'no-cors'}, {
        
    //     headers : {
    //       "Content-Type" : "application/json",
    //       'Access-Control-Allow-Origin': '*',
    //   },
    //     // body : JSON.stringify(data)
    // }).then((response)=> {
    //   console.log("23452");
    // })
  }
  // const [isSubmitted , setIsSubmitted] = useState(false)

  // useEffect(() => {
  //   let data = { fname, lname, email, password };

  // fetch("http://localhost:3005/createUser", {
  //   method: 'POST',
  //   // headers: {
  //   //   "Accept" : "application/json",
  //   //   "Content-Type" : "application/json"
  //   // },
  //   body: JSON.stringify(data)
  // }).then((result) => {
  //   result.json().then((resp) => {
  //     console.log("resp", resp);
  //     console.log(data);
  //   })
  // })}, [isSubmitted])

  // function saveUser() {
  //   let data = { fname, lname, email, password };

  //   fetch("http://localhost:3005/createUser", {
  //     method: 'POST',
  //     headers: {
  //       "Accept" : "application/json",
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.log("resp", resp);
  //     })
  //   })
  // }



  return (
    <div className="register">

      <Button variant="contained" color="error" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{ textDecoration: "none" }}>
        Register
      </Button>

      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Register</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {/* <!-- Default form register --> */}
              <form class="text-center border border-light p-5"  onSubmit={handleSubmit}>

                <p class="h4 mb-4">Sign up</p>

                <div class="form-row mb-4">
                  <div class="col">
                    {/* <!-- First name --> */}
                    <input type="text" id="defaultRegisterFormFirstName" class="form-control" value={fname} onChange={(e) => { setFname(e.target.value) }} name="fname" placeholder="First name" />
                  </div>
                  <div class="col">
                    {/* <!-- Last name --> */}
                    <input type="text" id="defaultRegisterFormLastName" class="form-control" value={lname} onChange={(e) => { setLname(e.target.value) }} name="lname" placeholder="Last name" />
                  </div>
                </div>

                {/* <!-- E-mail --> */}
                <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="E-mail" />

                {/* <!-- Password --> */}
                <input type="password" id="defaultRegisterFormPassword" class="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                {/* <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
          At least 8 characters and 1 digit
        </small> */}

                {/* <!-- Phone number --> */}
                {/* <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
        <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
          Optional - for two step authentication
        </small> */}



                <button type="submit" class="btn btn-primary" >submit</button>

              </form>
              {/* <!-- Default form register --> */}
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

export default Register;

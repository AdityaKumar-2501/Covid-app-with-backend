import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Route, Link, Routes } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import MyComponent from "./MyComponent";
import App from "./App";

function Buttons() {
  return (
      <>
    {/* <Router> */}
    <Stack direction="row" spacing={2}>
    <Link to="/login" style={{ textDecoration: "none" }}>
      <Button variant="contained" color="success">
        Login
      </Button>
    </Link>

    <Link to="/register" style={{ textDecoration: "none" }}>
      <Button variant="contained" color="error" href="../Covid guidlines by ministry of health.pdf">
        Register
      </Button>
    </Link>

    <MyComponent />
  </Stack>

  <Routes>
    <Route exact path="/" element={<App />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route path="*" element={<><h1>404 NOT FOUND</h1></>} />
  </Routes>
{/* </Router> */}
</>
  );
}

export default Buttons;

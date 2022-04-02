import React from "react";
import Button from "@mui/material/Button";

export default class MyComponent extends React.Component {
  render() {
    return (
      <a href="Covid-guidlines.pdf" download style={{ textDecoration: "none" }}><Button variant="contained" color="primary">
      Download guidlines
    </Button></a>
    );
  }
}

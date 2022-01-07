
import React, { Component } from "react";
import NavBar from "./nav/NavBar";

import "./TrapperKeeper.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import ApplicationViews from "./ApplicationViews";


class TrapperKeeper extends Component {
  render() {
    return (
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }
}

const Auth = () => {
  if (localStorage.getItem('react_trapperKeeper_user')) {
    
    return(
      <>
        <NavBar />
     <ApplicationViews />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default TrapperKeeper;











// import React from "react"
// import NavBar from "./nav/NavBar"

// export const TrapperKeeper = () => (
    
    
//     <>
//      <>
//         <NavBar/>
//         </>
       
//     </>
// )

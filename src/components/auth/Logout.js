
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { Button } from 'react-bootstrap';


export const Logout = (props) =>{
    const navigate = useNavigate()
    

    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.removeItem('react_trapperKeeper_user')
                window.location.reload(false);
                navigate("/") 
        }

    return (
        <>
        <Button id="logout-button" variant="secondary" className="primary" onClick={handleLogout}>Log Out</Button>
        </>
    )
}
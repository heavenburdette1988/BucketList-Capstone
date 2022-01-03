import React, { createContext, useState } from "react"

export const AgeContext = createContext()



export const AgeProvider = (props) => {
    const [ages, setAges] = useState([])
    // const currentUser = localStorage.getItem("react_trapperKeeper_user")
    
//will need to update fetch("") calls
     const getAges= () => {
        return fetch(`http://localhost:8088/ages`)
        .then(res => res.json())
        .then(setAges)
    }

    
    return (
        <AgeContext.Provider value={{
           ages, getAges
        }}>
            {props.children}
        </AgeContext.Provider>
    )
}
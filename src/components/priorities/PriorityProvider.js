import React, { createContext, useState } from "react"

export const PrioritiesContext = createContext()



export const PriorityProvider = (props) => {
    const [prioirties, setPriorities] = useState([])
    // const currentUser = localStorage.getItem("react_trapperKeeper_user")
    
//will need to update fetch("") calls
     const getPriorities= () => {
        return fetch(`http://localhost:8088/priorities`)
        .then(res => res.json())
        .then(setPriorities)
    }

    
    return (
        <PrioritiesContext.Provider value={{
           prioirties, getPriorities
        }}>
            {props.children}
        </PrioritiesContext.Provider>
    )
}
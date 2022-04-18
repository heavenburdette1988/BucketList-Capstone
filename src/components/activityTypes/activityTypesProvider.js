import React, { createContext, useState } from "react"

export const ActivityTypesContext = createContext()



export const ActivityTypeProvider = (props) => {
    const [userActivityTypes, setActivityTypes] = useState([])
    // const currentUser = localStorage.getItem("react_trapperKeeper_user")
    
//will need to update fetch("") calls
     const getActivityTypes = () => {
        return fetch(`http://localhost:8088/types`)

        .then(res => res.json())
        .then(setActivityTypes)
    }

    
    return (
        <ActivityTypesContext.Provider value={{
              userActivityTypes, getActivityTypes
        }}>
            {props.children}
        </ActivityTypesContext.Provider>
    )
}
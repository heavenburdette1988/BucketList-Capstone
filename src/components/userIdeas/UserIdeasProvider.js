import React, { createContext, useState } from "react"

export const UserIdeaContext = createContext()



export const UserIdeaProvider = (props) => {
    const [userIdeas, setUserIdeas] = useState([])
    // const currentUser = localStorage.getItem("react_trapperKeeper_user")
    
//will need to update fetch("") calls
     const getUserIdeas = () => {
        return fetch(`http://localhost:8088/userIdeas`)
        .then(res => res.json())
        .then(setUserIdeas)
    }

    const addUserIdeas = userIdeaObj => {
       
        return fetch("http://localhost:8088/userIdeas", {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userIdeaObj)
                    })
                .then(getUserIdeas)
     }
    
    return (
        <UserIdeaContext.Provider value={{
               userIdeas, getUserIdeas, addUserIdeas
        }}>
            {props.children}
        </UserIdeaContext.Provider>
    )
}
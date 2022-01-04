import React, { createContext, useState } from "react"

export const UserIdeaContext = createContext()



export const UserIdeaProvider = (props) => {
    const [userIdeas, setUserIdeas] = useState([])
    const currentUser = localStorage.getItem("react_trapperKeeper_user")
    
//will need to update fetch("") calls
     const getUserIdeas = () => {
        return fetch(`http://localhost:8088/userIdeas?_userId=${currentUser}&_expand=idea&_expand=type&_expand=age`)
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

     const deleteUserIdea = UserIdeaId => {
        return fetch(`http://localhost:8088/userIdeas/${UserIdeaId}`, {
            method: "DELETE"
        })
            .then(getUserIdeas)
    }
    const getUserIdeaById = (id) => {
        return fetch(`http://localhost:8088/userIdeas/${id}`)
            .then(res => res.json())

    }
    const updateUserIdea = idea => {
        console.log(idea)
        return fetch(`http://localhost:8088/userIdeas/${idea.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(idea)
        })
            .then(getUserIdeas)
    }

    
     const patchUserIdea = ideaId => {

        return fetch(`http://localhost:8088/userIdeas/${ideaId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completedIdea: true})
        })
    }
    return (
        <UserIdeaContext.Provider value={{
               userIdeas, getUserIdeas, addUserIdeas, deleteUserIdea, patchUserIdea, getUserIdeaById, updateUserIdea
        }}>
            {props.children}
        </UserIdeaContext.Provider>
    )
}
import React, { useState, createContext } from "react"

export const IdeaContext = createContext()



export const IdeaProvider = (props) => {
    const [ideas, setIdeas] = useState([])
    const currentUser = localStorage.getItem("react_trapperKeeper_user")
    
//will need to update fetch("") calls
     const getIdeas = () => {
        return fetch(`http://localhost:8088/Ideas?userId=${currentUser}`)
        .then(res => res.json())
        .then(setIdeas)
    }

    const addIdeas = ideaObj => {
        return fetch("http://localhost:8088/Ideas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ideaObj)
        })
        
        .then(getIdeas)
      
    }


    const getIdeaById = (id) => {
        return fetch(`http://localhost:8088/ideas/${id}`)
            .then(res => res.json())

    }
    
    // const patchTask = taskId => {

    //     return fetch(`http://localhost:8088/tasks/${taskId}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({isCompleted: true})
    //     })
    // }
    // const deleteTask = taskId => {
    //     return fetch(`http://localhost:8088/tasks/${taskId}`, {
    //         method: "DELETE"
    //     })
    //         .then(getTasks)
    // }
    
    const updateIdea = idea => {
        return fetch(`http://localhost:8088/ideas/${idea.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(idea)
        })
          .then(getIdeas)
      }
      


    return (
        <IdeaContext.Provider value={{
           ideas, getIdeaById,getIdeas, addIdeas, updateIdea
        }}>
            {props.children}
        </IdeaContext.Provider>
    )
}
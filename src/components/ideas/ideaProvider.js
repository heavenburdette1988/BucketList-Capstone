import React, { useState, createContext } from "react"

export const IdeaContext = createContext()



export const IdeaProvider = (props) => {
    const [ideas, setIdeas] = useState([])
    const currentUser = parseInt(localStorage.getItem("react_trapperKeeper_user"))
     console.log(currentUser)

     const getIdeas = () => {
        return fetch(`http://localhost:8088/Ideas?_embed=userIdeas&_embed=activtyTypes&_embed=priorities`)
        .then(res => res.json())
        .then((allTheIdeas) => {
            let ideasUserHasAdded = []
            for(let i = 0; i< allTheIdeas.length; i++ ){
                let singleIdeaInLoop = allTheIdeas[i]
                // console.log(singleIdeaInLoop)
                for(let x = 0; x < singleIdeaInLoop.userIdeas.length; x++){
                    let singleUserIdeaInLoop = singleIdeaInLoop.userIdeas[x]
                    console.log("user idea in loop", singleUserIdeaInLoop.userId)
                
                    if(singleUserIdeaInLoop.userId === currentUser || singleIdeaInLoop.userId === currentUser){
                        ideasUserHasAdded.push(singleIdeaInLoop)
                    }
                }
            }
            console.log("should be user's ideas", ideasUserHasAdded)
            setIdeas(ideasUserHasAdded)
        })
    }

//* This allows us to access both ideas and userIdeas from the Database -  UserIdeas is a join table



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
           ideas, getIdeaById, getIdeas , addIdeas, updateIdea
        }}>
            {props.children}
        </IdeaContext.Provider>
    )
}
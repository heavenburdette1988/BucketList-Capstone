import React, { useState, createContext, useContext } from "react"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import './Idea.css'


export const IdeaContext = createContext()



export const IdeaProvider = (props) => {
    const [ideas, setIdeas] = useState([])
    const currentUser = parseInt(localStorage.getItem("react_trapperKeeper_user"))
    const { getUserIdeas } = useContext(UserIdeaContext)
    
    const getIdeas = () => {
        return fetch(`http://localhost:8088/Ideas?_embed=userIdeas`)
            .then(res => res.json())
        .then(setIdeas)
           
    }

    //* This allows us to access both ideas and userIdeas from the Database to be able to print from both lists -  UserIdeas is a join table



    const addIdeas = ideaObj => {
 console.log(ideaObj)
        // Todo: fill out these objects to match the db tables
        const idea = {
            userId: ideaObj.userId,
            title: ideaObj.title,
            url: ideaObj.url,
            details: ideaObj.details

        }

        const userIdea = {
            rating: ideaObj.rating,
            notes: ideaObj.notes,
            completedIdea: ideaObj.completedIdea,
            completionDate: ideaObj.completionDate,
            typeId: +ideaObj.typeId,
            ageId: +ideaObj.ageId,
            ideaId: ideaObj.ideaId,
            userId: ideaObj.userId

        }
        console.log("Idea Object", idea)
        console.log("user idea Object", userIdea)

        return fetch("http://localhost:8088/Ideas", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(idea)
        })
        .then((response) => {
            return response.json()
        }).then((ideaWeJustPosted) => {
            // Todo: test if this works
            console.log(ideaWeJustPosted.id)

            // Todo: attach to userIdea
            userIdea.ideaId = ideaWeJustPosted.id
            //Todo: post userIdea
            return fetch("http://localhost:8088/userIdeas", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userIdea)
        })

        })
            .then(getIdeas)
    }



    const getIdeaById = (id) => {
        return fetch(`http://localhost:8088/useridea/${id}`)
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

    const deleteIdea = ideaId => {
        return fetch(`http://localhost:8088/userIdeas/${ideaId}`, {
            method: "DELETE"
        })
            .then(getUserIdeas)
    }

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
            ideas, getIdeaById, getIdeas, addIdeas, updateIdea, deleteIdea
        }}>
            {props.children}
        </IdeaContext.Provider>
    )
}
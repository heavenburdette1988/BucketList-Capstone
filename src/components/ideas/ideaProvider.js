//This provider pulls from the ideas db

import React, { useState, createContext, useContext } from "react"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import './Idea.css'


export const IdeaContext = createContext()



export const IdeaProvider = (props) => {
    const [ideas, setIdeas] = useState([])
    
    const { getUserIdeas } = useContext(UserIdeaContext)
    const [ searchIdeas, setSearchIdeas ] = useState("")

    const getIdeas = () => {
        return fetch(`http://localhost:8088/ideas?_embed=userIdeas`)
            .then(res => res.json())
        .then(setIdeas)
           
    }

    //* This allows us to access both ideas and userIdeas from the Database to be able to print from both lists -  UserIdeas is a join table


    //This is posting to both ideas and userideas when new idea is added. 
    const addIdeas = ideaObj => {
 console.log("the",ideaObj)
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
            // test if this works
            console.log(ideaWeJustPosted.id)

            //  attach to userIdea
            userIdea.ideaId = ideaWeJustPosted.id
            // post userIdea
            return fetch("http://localhost:8088/userIdeas", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userIdea)
        })

        })
            .then(getUserIdeas)
    }

 

    const getIdeaById = (id) => {
        return fetch(`http://localhost:8088/ideas/${id}`)
            .then(res => res.json())

    }

 

    const deleteIdea = ideaId => {
        return fetch(`http://localhost:8088/ideas/${ideaId}`, {
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
            .then(getUserIdeas)
    }



    return (
        <IdeaContext.Provider value={{
            ideas, getIdeaById, getIdeas, addIdeas, updateIdea, deleteIdea, searchIdeas, setSearchIdeas
        }}>
            {props.children}
        </IdeaContext.Provider>
    )
}
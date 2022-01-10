import React, { createContext, useState } from "react"

export const UserIdeaContext = createContext()



export const UserIdeaProvider = (props) => {
    const [userIdeas, setUserIdeas] = useState([])
    const currentUser = JSON.parse(localStorage.getItem('react_trapperKeeper_user')).id
    
//will need to update fetch("") calls
     const getUserIdeas = () => {
        return fetch(`http://localhost:8088/userIdeas?userId=${currentUser}&_expand=idea&_expand=type&_expand=age&_expand=user`)
        .then(res => res.json())
        .then(setUserIdeas)
    }

    const addUserIdeas = (idea) => {
        return fetch('http://localhost:8088/userIdeas', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(idea)
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
        return fetch(`http://localhost:8088/userIdeas/${id}?_expand=idea`)
            .then(res => res.json())

    }
    
   

    const updateUserIdea = ideaObj => {
        console.log("the IdeaObj" ,ideaObj)

        const idea = {
            userId: ideaObj.userId,
            title: ideaObj.title,
            url: ideaObj.url,
            details: ideaObj.details,
            id: ideaObj.ideaId

        }

        const userIdea = {
            rating: ideaObj.rating,
            notes: ideaObj.notes,
            completedIdea: ideaObj.completedIdea,
            completionDate: ideaObj.completionDate,
            typeId: +ideaObj.typeId,
            ageId: +ideaObj.ageId,
            ideaId: ideaObj.ideaId,
            userId: ideaObj.userId,
            id:  ideaObj.id

        }
        console.log("Idea",idea)
        console.log("userIdea",userIdea)

        return fetch(`http://localhost:8088/userIdeas/${userIdea.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userIdea)
        })
        .then((response) => {
            return response.json()
        }).then((IdeaToEdit) => {

            console.log(IdeaToEdit)

            // userIdea.ideaId = IdeaToEdit.id

            return fetch(`http://localhost:8088/ideas/${idea.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(idea)
            // })
        })
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
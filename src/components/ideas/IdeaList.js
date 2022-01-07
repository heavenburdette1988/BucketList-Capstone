import React, { useContext, useEffect, useState } from "react"
// import "./Idea.css"
// import { useNavigate } from "react-router-dom"
// import { Button } from "react-bootstrap"
import { IdeaContext } from "./IdeaProvider"
import { IdeaCard } from "./IdeaCard"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

import './Idea.css'

export const IdeaList = () => {
  // This state changes when `getIdeas()` is invoked below
   const { userIdeas, getUserIdeas } = useContext(UserIdeaContext)
  const [showCompletedUserIdeas, setShowCompletedUserIdeas] = useState(false)

 

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("IdeaList: useEffect - getUserIdeas", getUserIdeas)

    
   getUserIdeas()
    }, [])
    
  const navigate = useNavigate()




  return (
 
    <>

<Button variant="primary" onClick={() => navigate("/home/create")}>
    New Idea
</Button>
 
    <div className="ideas">
      <h1 className="IdeaList">Bucket List Ideas</h1>
    {

 //todo Add user Welcome Section

        userIdeas.filter(userIdea => userIdea.completedIdea === showCompletedUserIdeas).map(userIdea =>{
        
          
    
          
          return <> 
          
          <IdeaCard 
       
          key={userIdea.id}
          userIdea={userIdea} 
          
          /> 
          </>

         

          
         
           })
           
      }
     
    </div> 
    </>

  )
}
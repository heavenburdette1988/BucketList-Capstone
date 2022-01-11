import React, { useContext, useEffect, useState } from "react"
// import "./Idea.css"
// import { useNavigate } from "react-router-dom"
// import { Button } from "react-bootstrap"
import { IdeaContext } from "./IdeaProvider"
import { IdeaCard } from "./IdeaCard"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import { useNavigate } from "react-router-dom"
import { Button, Image } from "react-bootstrap"

import './Idea.css'
import { CompletedIdeaList } from "../completedIdeas/CompletedIdeaList"

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



<div className="mainContainer">
  {/* <div className="logo"><Image className="logoImage" src={require('../image/NavBarImage.png')} rounded alt="Brand logo" style={{ width: '7rem' }}/></div> */}

<Button variant="secondary" onClick={() => navigate("/home/create")}>
    New Idea
</Button>

    <div className="ideasMainContainer">
  
      <div className="ideasContainer">
         <h2 className="IdeaListTitle">Bucket List Ideas</h2>
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
           
      }</div>
      <div className="completedIdeas">
      <h2 className="IdeaListTitle">Your Accomplished Ideas</h2>
     <CompletedIdeaList/>
     </div>
    </div>
     </div>
    </>

  )
}
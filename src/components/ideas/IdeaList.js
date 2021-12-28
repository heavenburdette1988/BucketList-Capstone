import React, { useContext, useEffect } from "react"
// import "./Idea.css"
// import { useNavigate } from "react-router-dom"
// import { Button } from "react-bootstrap"
import { IdeaContext } from "./IdeaProvider"
import { IdeaCard } from "./IdeaCard"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"



export const IdeaList = () => {
  // This state changes when `getIdeas()` is invoked below
  const { ideas, getIdeas } = useContext(IdeaContext)
   const currentUser = localStorage.getItem("react_trapperKeeper_user")
  const { userIdeas, getUserIdeas } = useContext(UserIdeaContext)
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("IdeaList: useEffect - getIdeas")
    getIdeas()
    .then(getUserIdeas)
    }, [])
//   const navigate = useNavigate()




  return (

    
   
  
    <div className="ideas">
      
      {console.log("IdeaList: Render", ideas)}
    
      {

        // const theUserIdea = userIdeas.filter(ui => i.userId.includes(...currentUser))

 

        ideas
         .map(idea =>{
            
            // const theUserIdea  = userIdeas.find(i => i.userId === ideas.id)
            // console.log(theUserIdea)
     
          
          return <IdeaCard 
          key={idea.id}
          idea={idea} 
         />
          
           })
           
      }
    </div>

  )
}
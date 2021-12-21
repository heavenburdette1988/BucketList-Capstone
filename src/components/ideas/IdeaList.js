import React, { useContext, useEffect } from "react"
// import "./Idea.css"
// import { useNavigate } from "react-router-dom"
// import { Button } from "react-bootstrap"
import { IdeaContext } from "./IdeaProvider"
import { IdeaCard } from "./IdeaCard"


export const IdeaList = () => {
  // This state changes when `getIdeas()` is invoked below
  const { ideas, getIdeas } = useContext(IdeaContext)
  
  
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("IdeaList: useEffect - getIdeas")
    getIdeas()
    }, [])
//   const navigate = useNavigate()

  return (

    
   
  
    <div className="ideas">
      {console.log("IdeaList: Render", ideas)}
      {

        //    ideas.filter(task => task.isCompleted === false).map(task => {
          ideas.map(idea => {
          console.log(idea)
          return <IdeaCard 
          key={idea.id}
           idea={idea} />
          
        })
      }
    </div>

  )
}
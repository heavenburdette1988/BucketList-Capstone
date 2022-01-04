import React, { useContext, useEffect, useState } from "react"
import { CommunityCard } from "./CommunityCard"

import { IdeaContext } from "../ideas/IdeaProvider"

export const CommunityList = () => {
  // This state changes when `getIdeas()` is invoked below
   const { ideas, getIdeas } = useContext(IdeaContext)
    //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("IdeaList: useEffect - getIdeas")
   getIdeas()
    }, [])
  
  return (
 
  
    <div className="communityIdeas">
        {
        ideas.map(idea => {
        
           
     
          
          return <CommunityCard
        
          key={idea.id}
          idea={idea} 
          
          />

         

          
         
           })
          
        }
    </div> 


  )
}
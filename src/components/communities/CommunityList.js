import React, { useContext, useEffect, useState } from "react"
import { CommunityCard } from "./CommunityCard"

import { IdeaContext } from "../ideas/IdeaProvider"

export const CommunityList = () => {
  // This state changes when `getIdeas()` is invoked below
   const { ideas, getIdeas,searchIdeas, setSearchIdeas } = useContext(IdeaContext)
   const [ filteredIdeas, setFilteredIdeas ] = useState([])
    useEffect(() => {
getIdeas()
      
    }, [])
    
    //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("IdeaList: useEffect - getIdeas")
    if (searchIdeas !== "") {
      // If the search field is not blank, display matching Ideas
      const subset = ideas.filter(idea => idea.title.toLowerCase().includes(searchIdeas.toLowerCase()))
      setFilteredIdeas(subset)
    } else {
      // If the search field is blank, display all Ideas
      setFilteredIdeas(ideas)
    }

    }, [searchIdeas, ideas])


   
  
  return (
 
  
    <div className="communityIdeas">
        {
        filteredIdeas.map(idea => {
        
           
     
          
          return <CommunityCard
        
          key={idea.id}
          idea={idea} 
          
          />

         

          
         
           })
          
        }
    </div> 


  )
}
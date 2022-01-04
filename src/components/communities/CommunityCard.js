
import React, { useContext, useEffect } from "react"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"





export const CommunityCard = ({ idea }) => {

    const { getUserIdeas } = useContext(UserIdeaContext)


    useEffect(() => {
       
        getUserIdeas()
        
      }, []) 


    return(
    <section className="community">
        <h3 className="community__title">{idea.title}</h3>
        <div className="community__details">Idea Details: {idea.details}</div>
        {/* <div className="community__rating">User Rating: {idea.userIdeas[0]?.rating}</div> */}
        
    </section>
)
}

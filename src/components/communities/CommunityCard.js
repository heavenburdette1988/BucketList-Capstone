
import React, { useContext, useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"





export const CommunityCard = ({ idea }) => {

    const { getUserIdeas, userIdeas } = useContext(UserIdeaContext)
  

    useEffect(() => {
       
        getUserIdeas()
        
      }, []) 


    return(
    // <section className="community">
    //     <h3 className="community__title">{idea.title}</h3>
    //     <div className="community__details">Idea Details: {idea.details}</div>
    //     {/* <div className="community__rating">User Rating: {idea.userIdeas[0]?.rating}</div> */}
        
    // </section>

     
<Card className="mainCard" style={{ width: '15rem' }}>
{/* <Card.Img className="cardImg" variant="top" src={idea.userIdea.type.typeImg}></Card.Img> */}
<Card.Body>

  <Card.Title className="title" href={idea.url}>
       { idea.title }     
        </Card.Title>
  <Card.Text className="details"> User Details {idea.details}
  </Card.Text>
  <Card.Text className="type"> Type {idea.userIdeas[0]?.typeId}  {userIdeas.types?.map(type => {
        return <div key={type.id} value={type.id}>
        {type.type}</div>
        })}
  </Card.Text>
  
   </Card.Body>
  

        
               {/* <Button variant="primary" onClick={}>
               Add to my list
              </Button>
          */}
              

</Card>
)
}

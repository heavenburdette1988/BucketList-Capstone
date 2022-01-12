
import React, { useContext, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"





export const CommunityCard = ({ idea }) => {
    
    
    
    const navigate = useNavigate(); 

    

   

     const handleAddUserIdea = (event) => {
        event.preventDefault()
      
        navigate(`/community/add/${idea.id}`)
     }

    return(
    

     
<Card className="mainCard"  style={{ width: '15rem' }}>

<Card.Body>
  

  <Card.Title className="title" name="title"  >
       {idea?.title}     
        </Card.Title>
  <Card.Text className="details" name="title" > <strong>Details:</strong> {idea?.details}
  </Card.Text>
 
   <Card.Link variant="primary" name="url" target="_blank" rel="noreferrer noopener" href={idea?.url} >Explore</Card.Link>
   </Card.Body>
  
  
        
               <Button variant="dark"
                 onClick={handleAddUserIdea}>
               Add idea to my list
              </Button>
         
              

</Card>
)
}

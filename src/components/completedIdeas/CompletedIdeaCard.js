// this is the card for the completed Idea List

import { Card, Button, Modal } from "react-bootstrap"
// import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import './CompletedIdeas.css'


export const IdeaCompletedCard = ({userIdea}) => {

  console.log(userIdea)
  const formatDate = date => {
    const dateSplit = date.split('-');

    return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
  }
  

const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
    return(
    <Card className="mainCard" style={{ width: '15rem' }}>
    
    <Card.Body>
    
      <Card.Title className="title">
           { userIdea.idea.title }     
            </Card.Title>
      <Card.Text className="date"> <strong>Complete Date: </strong>{formatDate(userIdea.completionDate)}
      </Card.Text>
     
      
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
     
      <Typography component="legend"><strong>Your Rating:</strong></Typography>
      <Rating name="read-only" value={userIdea.rating} readOnly />
     
    </Box>
       </Card.Body>

       <Button variant="dark" onClick={handleShow}>
               Details
             </Button>
             <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
                 <Modal.Title href={userIdea.idea?.url} target="_blank"> {userIdea.idea?.title }</Modal.Title>
       </Modal.Header>
        
        <Modal.Body>
          <p><strong>Details:</strong> {userIdea.idea?.details}</p> 
          <p><strong>Type of Activity:</strong> {userIdea.type?.type}</p> 
          <p><strong>User Completion Notes: </strong>{userIdea.note}</p> 
          <Card.Link variant="primary" name="url" target="_blank" rel="noreferrer noopener" href={userIdea.idea?.url} >Explore</Card.Link>
         </Modal.Body> 
         
                  <Modal.Footer>
             
                  
                   
                   <Button variant="secondary" onClick={handleClose}>
                      Close
                   </Button>
                 </Modal.Footer>
   
                </Modal>
       </Card>
)
}
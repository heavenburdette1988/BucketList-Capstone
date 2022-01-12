// this form has both the idea card and the details modal in it. 

// import React, { useContext, useEffect, useState } from "react"
import { Tooltip } from "@mui/material"
import { useContext, useState } from "react"
import {  Button, Card, Modal } from "react-bootstrap"
import {useNavigate } from "react-router-dom"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"

import './Idea.css'




export const IdeaCard = ({userIdea}) => {

  const {   deleteUserIdea  } = useContext(UserIdeaContext)



   

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
	const navigate = useNavigate();

  const handleUserIdeaDelete = () => {
    console.log("deleteIdeaIds",userIdea.id)
    deleteUserIdea(userIdea.id)
      .then(() => {
        navigate(handleClose)
      })
  }



  

        


    return (
   
      
      <Card className="mainCard" style={{ width: '15rem' }}>
 <Tooltip title={userIdea.type?.type} placement="right" disableInteractive><Card.Img className="cardImg" variant="top" src={userIdea.type?.typeImg}></Card.Img></Tooltip> 
  <Card.Body>
  
    <Card.Title className="title">
         { userIdea.idea?.title }     
          </Card.Title>
    <Card.Text className="age"> <strong>When to complete by:</strong> {userIdea.age?.age}
    </Card.Text>
    <Card.Link variant="primary" name="url" target="_blank" rel="noreferrer noopener" href={userIdea.idea?.url} >Explore</Card.Link>
     </Card.Body>

  {/* Details Button starts here   */}
  <Button variant="dark" onClick={handleShow}>
               Details
             </Button>
      
             <Modal  show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                 <Modal.Title > {userIdea.idea?.title }</Modal.Title>
               </Modal.Header>
        
     <Modal.Body>
       <p><strong>Details: </strong>{userIdea.idea?.details}</p> 
       <p><strong>When to complete: </strong> {userIdea.age?.age}</p>
       <p><strong>Type of Activity:</strong> {userIdea.type?.type}</p> 
      </Modal.Body> 
               <Modal.Footer>
               <Button className="editButton" variant="dark" onClick={() => {
      navigate(`/home/edit/${userIdea.id}`)
    }}>
                  Edit
                </Button>
                 <Button variant="dark" onClick={handleUserIdeaDelete}>
                   Delete
                </Button>
                <Button variant="dark" onClick={() => {
      navigate(`/home/complete/${userIdea.id}`)
    }}>
                  Complete
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                   Close
                </Button>
              </Modal.Footer>

             </Modal>
  
</Card>




     
     
)
}

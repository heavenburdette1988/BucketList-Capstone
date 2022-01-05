// import React, { useContext, useEffect, useState } from "react"
import { useContext, useState } from "react"
import {  Button, Card, Modal } from "react-bootstrap"
import {useNavigate } from "react-router-dom"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"

import './Idea.css'
// import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import { IdeaContext } from "./IdeaProvider"
// import { useNavigate, useParams } from "react-router-dom"
// // import "./idea.css"




export const IdeaCard = ({userIdea}) => {

  const {   deleteUserIdea  } = useContext(UserIdeaContext)
// console.log("usId", userIdea)


   

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

// const handleComplete = () => {
//   console.log(handleComplete)
// if (userIdea.completedIdea === true) {
//     patchUserIdea(userIdea.id, false)
//          .then(getUserIdeas) 
//         } else {
//           patchUserIdea(userIdea.id, true)
//           .then(getUserIdeas)
          
//         }
        
//          }


  

        


    return (
   
      
      <Card className="mainCard" style={{ width: '15rem' }}>
  <Card.Img className="cardImg" variant="top" src={userIdea.type?.typeImg}></Card.Img>
  <Card.Body>
  
    <Card.Title className="title">
         { userIdea.idea?.title }     
          </Card.Title>
    <Card.Text className="age"> When to complete by: {userIdea.age?.age}
    </Card.Text>
    <Card.Link variant="primary" name="url" target="_blank" rel="noreferrer noopener" href={userIdea.idea?.url} >Explore</Card.Link>
     </Card.Body>

  {/* Details Button starts here   */}
  <Button variant="primary" onClick={handleShow}>
               Details
             </Button>
      
             <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                 <Modal.Title href={userIdea.idea?.url} target="_blank"> {userIdea.idea?.title }</Modal.Title>
               </Modal.Header>
        
     <Modal.Body>
       <p>Details: {userIdea.idea?.details}</p> 
       <p>When to complete: {userIdea.age?.age}</p>
       <p>Type of Activity: {userIdea.type?.type}</p> 
      </Modal.Body> 
               <Modal.Footer>
               
                 <Button variant="primary" onClick={handleUserIdeaDelete}>
                   Delete
                </Button>
                <Button variant="primary" onClick={() => {
      navigate(`/home/edit/${userIdea.id}`)
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
//May add image from types api to easily recognize the type of activity.
//need to figure out the embed vs expand in provider
// userActivityTypes.map(type => {
//   return <li key={type.id} value={type.id}>
//   {type.type}</li>
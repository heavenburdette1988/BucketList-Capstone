import React, { useContext, useEffect, useState } from "react"
// import "./Idea.css"
// import { useNavigate } from "react-router-dom"
// import { Button } from "react-bootstrap"

import { IdeaCard } from "./IdeaCard"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import { useNavigate } from "react-router-dom"
import { Button, Card, Carousel, Image, Modal } from "react-bootstrap"

import './Idea.css'
import { CompletedIdeaList } from "../completedIdeas/CompletedIdeaList"

export const IdeaList = () => {
  // This state changes when `getIdeas()` is invoked below
  const { userIdeas, getUserIdeas } = useContext(UserIdeaContext)
  const [showUncompletedUserIdeas, setShowCompletedUserIdeas] = useState(false)

  
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  

  //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("IdeaList: useEffect - getUserIdeas", getUserIdeas)
    getUserIdeas()
  }, [])

 
  const navigate = useNavigate()

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }



  return (

    <>



      <div className="mainContainer">
      
        <Button variant="secondary" onClick={() => navigate("/home/create")}>
          New Idea
        </Button>

        <div className="ideasMainContainer">

          <div className="ideasContainer">
            <h2 className="IdeaListTitle">Bucket List Ideas</h2>
            {

              //todo Add user Welcome Section
              userIdeas.some(userIdea => userIdea.completedIdea === false)?
              userIdeas.filter(userIdea => userIdea.completedIdea === showUncompletedUserIdeas).map(userIdea => {

                return <>
                  <IdeaCard
                    key={userIdea.id}
                    userIdea={userIdea}
                  />
                </>
                
              }): <button onClick={() =>handleShow('sm-down')}>Best Day Ever! Click Me!!</button>
            }
            </div>
          <div className="completedIdeas">
            <h2 className="IdeaListTitle">Your Accomplished Ideas</h2>
            <CompletedIdeaList />
          </div>
        </div>
      </div>
          
      

  





  
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <div className="backgroundModal">
          <Modal.Header closeButton>
          
          </Modal.Header>
<div className="completeModal" closeButton>
      <Modal.Title><img className="congratsImg" src="https://media.giphy.com/media/TWRXfLpxq2mJC0bvHx/giphy.gif" alt="Congrats"/></Modal.Title>
          <Image src="https://media.giphy.com/media/lNrNLRLmpC3VIjl82D/giphy.gif" alt="its done gif" className="completeImage"></Image>

          <Modal.Body><div className="completeBody"><strong>You have completed all your life goals. You may now die.</strong></div></Modal.Body>
        </div> </div> </Modal>
    </>

  )
}
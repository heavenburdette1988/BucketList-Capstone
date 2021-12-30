// import React, { useContext, useEffect, useState } from "react"
import { useContext, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ActivityTypesContext } from "../activityTypes/ActivityTypesProvider"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
// import { useNavigate, useParams } from "react-router-dom"
// // import "./idea.css"
// import { IdeaContext } from "./ideaProvider"



export const IdeaCard = ({idea}) => {

  const { getUserIdeas, userIdeas } = useContext(UserIdeaContext)
   
  // const { getActivityTypes, userActivityTypes } = useContext(ActivityTypesContext)
// todo: uncomment this out and see if you have the right info
//console.log("this is the idea prop in IdeaCard", idea)
  useEffect(() => {
    getUserIdeas()
    
  }, []) 


              // const formatDate = date => {
              //   const dateSplit = date.split('-');
              
              //   return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
              // }


//todo will need to move some data to the details button.

    return (
   

      <Card className="mainCard" style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
  
    <Card.Title className="title"><Link to={`/locations/detail/${idea.id}`}>
            { idea.title }
          </Link></Card.Title>
    <Card.Text className="priorties"> Age range you want to complete in: {idea.userIdeas[0].priortiesId}
    </Card.Text>
    <Card.Text className="type">Type of Activity: {userIdeas.activityTypes?.map(type => {
        return <div key={type.id} value={type.id}>
        {type.type}</div>
      })}
  
    </Card.Text>
    {/* //todo need get prioirties and types to loop//} */}

  </Card.Body>
  
</Card>


     
     
)
}
//May add image from types api to easily recognize the type of activity.
//need to figure out the embed vs expand in provider
// userActivityTypes.map(type => {
//   return <li key={type.id} value={type.id}>
//   {type.type}</li>
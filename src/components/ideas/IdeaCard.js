// import React, { useContext, useEffect, useState } from "react"
import { useContext, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { ActivityTypesContext } from "../activityTypes/activityTypesProvider"
// import { useNavigate, useParams } from "react-router-dom"
// // import "./idea.css"
// import { IdeaContext } from "./ideaProvider"



export const IdeaCard = ({idea}) => {

   
  const { getActivityTypes, userActivityTypes } = useContext(ActivityTypesContext)


  useEffect(() => {
    getActivityTypes()
    
  }, []) 


              // const formatDate = date => {
              //   const dateSplit = date.split('-');
              
              //   return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
              // }


//todo will need to move some data to the details button.

    return (
   

      <Card className="mainCard" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title className="title">{idea.title}</Card.Title>
    <Card.Text className="details">
    {idea.details}
    </Card.Text>
    <Card.Text className="completionDate">
   {idea.userIdeas[0].completionDate}
    </Card.Text>
    <Card.Text className="notes">
   {idea.userIdeas[0].notes}
    </Card.Text>
    <Card.Text className="priorties">
   {idea.userIdeas[0].priortiesId}
    </Card.Text>
    <Card.Text className="type">Type of Activity: {idea.userIdeas[0].type}{userActivityTypes.map(type => {
        return <li key={type.id} value={type.id}>
        {type.type}</li>
      })}
    </Card.Text>
    {/* //todo need get prioirties and types to loop//} */}

    <Button className="url" variant="primary" href={idea.url}>Let's Go Explore </Button>
  </Card.Body>
</Card>


     
     
)
}
//May add image from types api to easily recognize the type of activity.
//need to figure out the embed vs expand in provider

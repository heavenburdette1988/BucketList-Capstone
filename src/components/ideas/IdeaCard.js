// import React, { useContext, useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
// import { useNavigate, useParams } from "react-router-dom"
// // import "./idea.css"
// import { IdeaContext } from "./ideaProvider"



export const IdeaCard = ({idea}) => {

    // const { getIdeas, getIdeaById } = useContext(IdeaContext)
    
    // const [ ideas, setIdeas ] = useState({})



  //   const {ideaId} = useParams();
	// const navigate = useNavigate();

 

    // const handleComplete = () => {
      
    //     patchTask(task.id)
    //          .then(getTasks)
    //           }

    //           // This might also work?

              // const formatDate = date => {
              //   const dateSplit = date.split('-');
              //   // This will definitely work for our app
              //   return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
              // }


  // useEffect(() => {
  // console.log()
  // getIdeas()
  //   // getIdeaById(ideaId)
  //   .then((response) => {
  //     setIdeas(response)
     
  //   })
  //   }, [])

    return (
   

      <Card className="mainCard" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title className="title">{idea.title}</Card.Title>
    <Card.Text className="details">
    {idea.details}
    </Card.Text>
    {/* <Card.Text className="completionDate">
    {idea.userIdeas.completionDate}
    </Card.Text> */}
    <Button className="url" variant="primary" href={idea.url}>Let's Go Explore </Button>
  </Card.Body>
</Card>


     
     
)
}
//May add image from types api to easily recognize the type of activity.
//need to figure out the embed vs expand in provider

import React, { useContext, useEffect, useState } from "react"
import { Button, Card, InputGroup } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
// import "./idea.css"
import { IdeaContext } from "./ideaProvider"



export const IdeaCard = ({idea}) => {

    const { getIdeas, getIdeaById } = useContext(IdeaContext)
    
    const [ tasks, setTasks ] = useState({})



    const {ideaId} = useParams();
	const navigate = useNavigate();

 

    // const handleComplete = () => {
      
    //     patchTask(task.id)
    //          .then(getTasks)
    //           }

    //           // This might also work?

              const formatDate = date => {
                const dateSplit = date.split('-');
                // This will definitely work for our app
                return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
              }


  useEffect(() => {
  console.log()
  getIdeas()
    // getIdeaById(ideaId)
    .then((response) => {
      setTasks(response)
     
    })
    }, [])

    return (
   

  <Card>
  <Card.Header className="idea__title">{idea.title}</Card.Header>
  <Card.Body>
      <Card.Text className="idea__completeDate">Expected Completion:{formatDate(idea.userIdeas.completionDate)}
    </Card.Text>
    <Card.Url className="idea__url">Url:{idea.url}
    </Card.Url>
    <Card.Text className="idea__completeDate">Details: {idea.details}
    </Card.Text>
       {/* <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={handleComplete}/> Completed?
  </InputGroup>   */}
  {/* <Button variant="secondary" onClick={() => {
      navigate(`/tasks/edit/${task.id}`)
  }}>Edit</Button>{' '} */}
  </Card.Body>
</Card>


     
     
)
}


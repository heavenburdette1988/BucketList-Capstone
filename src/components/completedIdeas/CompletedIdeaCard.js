
import { Card } from "react-bootstrap"
// import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"

export const IdeaCompletedCard = ({userIdea}) => {
  const formatDate = date => {
    const dateSplit = date.split('-');

    return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
  }


    return(
    <Card className="mainCard" style={{ width: '15rem' }}>
    
    <Card.Body>
    
      <Card.Title className="title">
           { userIdea.idea.title }     
            </Card.Title>
      <Card.Text className="date"> Complete Date: {formatDate(userIdea.completionDate)}
      </Card.Text>
      <Card.Text className="note"> User Completed Notes: {userIdea.note}
      </Card.Text>
      <Card.Text className="details"> Idea Details: {userIdea.idea.details}
      </Card.Text>
      <Card.Text className="details"> Idea Rating: {userIdea.rating}
      </Card.Text>
      
       </Card.Body>
       </Card>
)
}
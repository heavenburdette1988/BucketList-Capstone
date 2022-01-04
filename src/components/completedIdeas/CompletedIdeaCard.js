
import { Card } from "react-bootstrap"
// import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export const IdeaCompletedCard = ({userIdea}) => {
  const formatDate = date => {
    const dateSplit = date.split('-');

    return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
  }
  const [value, setValue] = React.useState(2)

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
      
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
     
      <Typography component="legend">Your Rating:</Typography>
      <Rating name="read-only" value={userIdea.rating} readOnly />
     
    </Box>
       </Card.Body>
       </Card>
)
}
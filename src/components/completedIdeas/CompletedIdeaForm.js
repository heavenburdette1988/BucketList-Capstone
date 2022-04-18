
import  React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from "react-bootstrap";
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider";
import { Box } from "@mui/system";
import { Rating, Typography } from "@mui/material";

import './CompletedIdeas.css'

export const CompletedIdeaForm = () => {
    const { getUserIdeaById, updateCompletedIdea } = useContext(UserIdeaContext)
    
    const [value, setValue] = React.useState(2)
    

    const [completedUserIdea, setCompletedUserIdea] = useState({

      id:0,
      rating: 0,
      note: "",
      completedIdea: true,
      completionDate: "",
      typeId:0,
      ageId:0,
      ideaId:0,
      userId: 0
    
     
     });   // setting the state?
        

        const [isLoading, setIsLoading] = useState(true);
        const {UserIdeaId} = useParams();
    
    const navigate = useNavigate();  

 useEffect(() => {
          //todo trouble shoot this to get ideas in state
        
          getUserIdeaById(UserIdeaId).then(setCompletedUserIdea)
 
                 setIsLoading(false)
          
          
 
          
        
       
    }, [])

    // const handleDate = () =>{
    //   let dt = new Date().toLocaleDateString();
    //   setDate(dt);
    // }

     
   

    const handleControlledInputChange = (event) => {
     
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newCompletedIdea = { ...completedUserIdea } // this is giving newAnimal state and properties
      
        
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newCompletedIdea[event.target.name] = event.target.value
        // update state
        setCompletedUserIdea(newCompletedIdea)
      }

       
        const handleSaveCompletedIdea = () => {
        console.log("rating", completedUserIdea.rating)
       
        updateCompletedIdea({

             
                  id: UserIdeaId,
                 
                  note: completedUserIdea.note,
                  completedIdea: true,
                  completionDate:completedUserIdea.completionDate,
                  rating: value,
                  typeId: completedUserIdea.typeId,
                  ageId: completedUserIdea.ageId,
                  ideaId: completedUserIdea.ideaId,
                 userId: parseInt(completedUserIdea.userId)
                  
              
              })

              .then(() => navigate(`/home`))
            
            }
                

            

      
  
      
    return (
      <form className="completedIdeaForm">
          <h2 className="completedIdeaForm__title">Completed Note Idea</h2>
          <div className="completedIdeaTitle"><strong>{completedUserIdea.idea?.title}</strong></div>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="completedIdeaNote">Notes</label>
                  <input type="text" id="note" name="note" required autoFocus className="form-control" placeholder="Note" 
                   onChange={handleControlledInputChange}  />
              </div>
          </fieldset>
        
        
          <fieldset>
              <div className="form-group">
                  <label htmlFor="completionDate">Completion Date:</label>
                  <input type="date" id="completionDate" name="completionDate" required autoFocus className="form-control" 
                   onChange={handleControlledInputChange}  />
              </div>
          </fieldset> 
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating
       defaultValue={2.5}  
        name="rating"
        id="rating"
        className="form-control"
        value={value} 
        onChange={(handleControlledInputChange, newValue) => {
          setValue(newValue);
        }}
      />

    </Box>
  
            <Button variant="secondary"
            disabled={isLoading}
          onClick={event => {
        
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveCompletedIdea()
            
           
          }}>
         Complete</Button>{' '}
      </form>
    )
    }
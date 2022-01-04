
import  React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from "react-bootstrap";
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider";
import { Box } from "@mui/system";
import { Rating, Typography } from "@mui/material";
import ReactDOM from 'react-dom';
import { ActivityTypesContext } from "../activityTypes/ActivityTypesProvider";
import { AgeContext } from "../ages/AgeProvider";

export const CommunityForm = () => {
    const { getUserIdeaById, updateUserIdea, userIdeas} = useContext(UserIdeaContext)
    
    const { getActivityTypes, userActivityTypes } =useContext(ActivityTypesContext)

    const {getAges , ages } =useContext(AgeContext)
    const [isLoading, setIsLoading] = useState(true);

    const {AddIdeaId} = useParams();
    const [addUserIdea, setAddUserIdea] = useState({

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
        

      
    
    const navigate = useNavigate();  

 useEffect(() => {
          //todo trouble shoot this to get ideas in state
        
          getUserIdeaById(AddIdeaId).then(setAddUserIdea).then(getActivityTypes).then(getAges)
 
                 setIsLoading(false)
          
          
                 
          
        
       
    }, [])

    // const handleDate = () =>{
    //   let dt = new Date().toLocaleDateString();
    //   setDate(dt);
    // }

   

    const handleControlledInputChange = (event) => {
     
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newAddIdea = { ...addUserIdea } // this is giving newAnimal state and properties
      
        
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newAddIdea[event.target.name] = event.target.value
        // update state
        setAddUserIdea(newAddIdea)
      }


     
       
        const handleSaveCompletedIdea = () => {
        
       
              updateUserIdea({

             
                  id: AddIdeaId,
                 
                  note: addUserIdea.note,
                  completedIdea: false,
                  completionDate:addUserIdea.completionDate,
                  rating: addUserIdea.rating,
                  typeId: addUserIdea.typeId,
                  ageId: addUserIdea.ageId,
                  ideaId: addUserIdea.ideaId,
                 userId: parseInt(addUserIdea.userId)
                  
              
              })

              .then(() => navigate(`/home`))
            
            }
                

            

      
  
      
    return (
      <form className="addIdeaForm">
          <h2 className="addIdeaForm__title">Add Idea</h2>
        
          <fieldset>
              <div className="form-group">
                  <label htmlFor="activityTypes">Activity Type: </label>
                  <select defaultValue={ages.id} name="typeId" id="typeId" className="form-control"  onChange={handleControlledInputChange}>
                      <option value="0">Select a Type</option>
                      {userActivityTypes.map(a => (
                          <option key={a.id} value={a.id}>
                              {a.type}
                              
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset> 
          <fieldset>
              <div className="form-group">
                  <label htmlFor="ages">Age range you want to complete in: </label>
                  <select defaultValue={ages.id} name="ageId" id="ageId" className="form-control"  onChange={handleControlledInputChange}>
                      <option value="0">Select a Type</option>
                      {ages.map(p => (
                          <option key={p.id} value={p.id}>  
                              {p.age}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
    
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
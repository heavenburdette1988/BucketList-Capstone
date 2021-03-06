
import  React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from "react-bootstrap";
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider";

import { ActivityTypesContext } from "../activityTypes/ActivityTypesProvider";
import { AgeContext } from "../ages/AgeProvider";
import { IdeaContext } from "../ideas/IdeaProvider";

export const CommunityForm = () => {
    const { userIdeas, addUserIdeas} = useContext(UserIdeaContext)
    const currentUser = JSON.parse(localStorage.getItem('react_trapperKeeper_user')).id
  
    const {getIdeaById} = useContext(IdeaContext)
    
    const { getActivityTypes, userActivityTypes } = useContext(ActivityTypesContext)

    const {getAges , ages } =useContext(AgeContext)

    const [isLoading, setIsLoading] = useState(true);
    const {AddIdeaId} = useParams();
   const navigate = useNavigate();  

    const [userIdea, setUserIdea] = useState({

        id:0,
      rating: 0,
      note: "",
      completedIdea: true,
      completionDate: "",
      typeId:0,
      ageId:0,
      ideaId:0,
      userId: 0
    
     
     });   // setting the state
        
   
      
     
 

 useEffect(() => {
          //todo trouble shoot this to get ideas in state
        
          getIdeaById(AddIdeaId).then(setUserIdea).then(getActivityTypes).then(getAges)
 
                 setIsLoading(false)
          
          
                 
          
        
       
    }, [])

    

   

    const handleControlledInputChange = (event) => {
     
       
        const newUserIdea = { ...userIdea } 
        
       
        newUserIdea[event.target.name] = event.target.value
        // update state
        setUserIdea(newUserIdea)
      }


     
        const handleSaveCompletedIdea = () => {
       console.log(userIdeas)
       
          const userIdeaForDatabase = {
            
            
         
            rating: "",
            notes: "",
            completedIdea: false,
            completionDate: "",
            typeId: +userIdea.typeId,
            ageId: +userIdea.ageId,
            ideaId: +AddIdeaId,
            userId: currentUser
         
          } 
           
         
    
        
      if (!userIdeaForDatabase.ageId || !userIdeaForDatabase.typeId) {
        window.alert("Please select a type or priority.")
      
      } else {
          
              addUserIdeas(userIdeaForDatabase)
              .then(() => navigate(`/home`))
            
            } 
        }

            

      
  
      
    return (
      <form className="addIdeaForm">
          <p className="addIdeaForm__title">Please select below options for the </p> 
    <p><strong>{userIdea.title}</strong></p>
        
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
                      <option value="0">Select a Priority</option>
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
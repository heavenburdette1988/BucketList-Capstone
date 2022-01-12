//this form is only for the New Idea button- it only adds

import React, { useContext, useEffect, useState } from "react"

import { useNavigate, useParams } from 'react-router-dom';
import { ActivityTypesContext } from "../activityTypes/ActivityTypesProvider";
import { AgeContext } from "../ages/AgeProvider";
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider";

import { IdeaContext } from "./IdeaProvider";
import './Idea.css'
import { Button } from "react-bootstrap";


export const IdeaForm = () => {
    const { addIdeas, getIdeas} = useContext(IdeaContext)
    const {   getUserIdeas } = useContext(UserIdeaContext)
    const { getActivityTypes, userActivityTypes } =useContext(ActivityTypesContext)

    const {getAges , ages } =useContext(AgeContext)
    
    const currentUser = JSON.parse(localStorage.getItem('react_trapperKeeper_user')).id


   
    const {UserIdeaId} = useParams();

    // Todo: add all of the properties on the userIdea table to this state object
    const [idea, setIdea] = useState({
      //Properties from ideas
        id:0,
      title: "",
      url: "",
      details:"",
      userId: currentUser,
      //properties from userIdeas
      rating: 0,
      notes: "",
      completedIdea: false,
      completionDate: null,
      typeId: 0,
      ageId: 0,
      ideaId: 0

     });   // setting the state?

    

console.log(UserIdeaId)

    const navigate = useNavigate();   //use nav allows you to change url locations?

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getUserIdeas().then(getActivityTypes)
      .then(getAges)
        
    }, [])

  
    useEffect(() => {
        getIdeas()
        .then(getActivityTypes).then(getAges).then(getUserIdeas)
        
      }, [])
    
    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newIdea = { ...idea } // this is giving newAnimal state and properties

      
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newIdea[event.target.name] = event.target.value
    
      // update state
      setIdea(newIdea)
    }

    const handleClickSaveIdea = (event) => {
        console.log("the Idea", idea)
      event.preventDefault() //Prevents the browser from submitting the form

      
      const typeId = parseInt(idea.typeId)
      idea.typeId = typeId
    
      const ageId = parseInt(idea.ageId)
      idea.ageId = ageId

      if (typeId === 0 || ageId === 0 ) {
        window.alert("Please select a type or priority.")
      
      } else {
       
        addIdeas(idea)
        .then(() => navigate("/home")) //telling it to useNavigate to redisplay updated animal list
      }
}



    return (
      <form className="ideaForm">
          <h2 className="ideaForm__title">New Idea</h2>
                   
          <fieldset>
              <div className="form-group">
                  <label htmlFor="title">Idea Title:</label>
                  <input type="text" id="title" name="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Idea Title" defaultValue={idea.title}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="url">Url: </label>
                  <input type="text" id="url" name="url" onChange={handleControlledInputChange} className="form-control" placeholder="URL" defaultValue={idea.url}/>
              </div>
          </fieldset>
         <fieldset>
              <div className="form-group">
                  <label htmlFor="details">Details: </label>
                  <input type="text" id="details" name="details" onChange={handleControlledInputChange} className="form-control" placeholder="Details of Activity" defaultValue={idea.details}/>
              </div>
          </fieldset>
 
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
    
          <Button variant="secondary" className="btn btn-primary"
            onClick={handleClickSaveIdea}>
            Save Idea
          </Button>
      </form>
    )
}
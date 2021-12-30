import React, { useContext, useEffect, useState } from "react"

import { useNavigate } from 'react-router-dom';
import { ActivityTypesContext } from "../activityTypes/ActivityTypesProvider";
import { PrioritiesContext } from "../priorities/PriorityProvider";
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider";

import { IdeaContext } from "./IdeaProvider";


export const IdeaForm = () => {
    const { ideas ,addIdeas, getIdeas } = useContext(IdeaContext)
    const {  userIdeas, getUserIdeas  } = useContext(UserIdeaContext)
    const { getActivityTypes, userActivityTypes } =useContext(ActivityTypesContext)

    const {getPriorities , prioirties } =useContext(PrioritiesContext)
    
    const currentUser = parseInt(localStorage.getItem("react_trapperKeeper_user"))


    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
    Define the intial state of the form inputs with useState()
    */
    

    // Todo: add all of the properties on the userIdea table to this state object
    const [idea, setIdea] = useState({
      //Properties from ideas
     
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
      priortiesId: 0

    
    });   // setting the state?



    const navigate = useNavigate();   //use nav allows you to change url locations?

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getIdeas()
      .then(getActivityTypes).then(getPriorities).then(getUserIdeas)
      
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
    
      const priorityId = parseInt(idea.priortiesId)
      idea.priortiesId = priorityId

      if (typeId === 0 || priorityId === 0 ) {
        window.alert("Please select a type or priority.")
      
      } else {
        // invoke addAnimal passing animal as an argument.
        // once complete, change the url and display the animal list
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
                  <input type="text" id="title" name="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Idea Title" value={idea.title}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="url">Url: </label>
                  <input type="text" id="url" name="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="URL" value={idea.url}/>
              </div>
          </fieldset>
         <fieldset>
              <div className="form-group">
                  <label htmlFor="details">Details: </label>
                  <input type="text" id="details" name="details" onChange={handleControlledInputChange}  autoFocus className="form-control" placeholder="Details of Activity" value={idea.details}/>
              </div>
          </fieldset>
         
            <fieldset>
              <div className="form-group">
                  <label htmlFor="activityTypes">Activity Type: </label>
                  <select defaultValue={userActivityTypes.type} name="typeId" id="type" className="form-control"  onChange={handleControlledInputChange}>
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
                  <label htmlFor="prioirties">Age range you want to complete in: </label>
                  <select defaultValue={prioirties.priority} name="priortiesId" id="priority" className="form-control"  onChange={handleControlledInputChange}>
                      <option value="0">Select a Type</option>
                      {prioirties.map(p => (
                          <option key={p.id} value={p.id}  >  
                              {p.priority}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
    
          <button className="btn btn-primary"
            onClick={handleClickSaveIdea}>
            Save Idea
          </button>
      </form>
    )
}
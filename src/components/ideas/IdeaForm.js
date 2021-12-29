import React, { useContext, useEffect, useState } from "react"

import { useNavigate } from 'react-router-dom';
import { ActivityTypesContext } from "../activityTypes/activityTypesProvider";
import { PrioritiesContext } from "../priorities/PriorityProvider";
import { UserIdeaProvider } from "../userIdeas/UserIdeasProvider";
import { IdeaContext } from "./IdeaProvider";


export const IdeaForm = () => {
    const { addIdeas, getIdeas } = useContext(IdeaContext)
    // const { addUserIdeas, userIdeas  } = useContext(UserIdeaProvider)
    const { getActivityTypes, userActivityTypes } =useContext(ActivityTypesContext)

    const {getPriorities , prioirties } =useContext(PrioritiesContext)
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
    Define the intial state of the form inputs with useState()
    */

    const [idea, setIdea] = useState({
      title: "",
      url: "",
      details:"",
      userId: 1
    
    });   // setting the state?

// const [userIdea, setUserIdea] = useState({})

    const navigate = useNavigate();   //use nav allows you to change url locations?

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getIdeas()
      .then(getActivityTypes).then(getPriorities)
      
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
      newIdea[event.target.id] = event.target.value
      // update state
      setIdea(newIdea)
    }

    const handleClickSaveIdea = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

    //   const locationId = parseInt(employee.locationId)
    //   employee.locationId = locationId
    

    //   if (locationId === 0) {
    //     window.alert("Please select a location")
    //   } else {
        // invoke addAnimal passing animal as an argument.
        // once complete, change the url and display the animal list
        addIdeas(idea)
        .then(() => navigate("/home")) //telling it to useNavigate to redisplay updated animal list
      }
    

    return (
      <form className="ideaForm">
          <h2 className="ideaForm__title">New Idea</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="title">Idea Title:</label>
                  <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Idea Title" value={idea.title}/>
              </div>
          </fieldset>
         <fieldset>
              <div className="form-group">
                  <label htmlFor="details">Details: </label>
                  <input type="text" id="details" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Idea Title" value={idea.details}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="url">Url: </label>
                  <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Idea Title" value={idea.url}/>
              </div>
          </fieldset>
            <fieldset>
              <div className="form-group">
                  <label htmlFor="activityTypes">Activity Type: </label>
                  <select defaultValue={userActivityTypes.types} name="type" id="type" className="form-control"  onChange={handleControlledInputChange}>
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
                  <select defaultValue={prioirties.priority} name="type" id="type" className="form-control"  onChange={handleControlledInputChange}>
                      <option value="0">Select a Type</option>
                      {prioirties.map(p => (
                          <option key={p.id} value={p.id}>
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
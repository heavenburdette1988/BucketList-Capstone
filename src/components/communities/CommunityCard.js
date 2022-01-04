
import React, { useContext, useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { IdeaContext } from "../ideas/IdeaProvider"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"





export const CommunityCard = ({ idea }) => {
 
    const { getUserIdeas, userIdeas, addUserIdeas, getUserIdeaById } = useContext(UserIdeaContext)
    const currentUser = parseInt(localStorage.getItem("react_trapperKeeper_user"))
    
  
    const [userIdea, setUserIdea] = useState({
        
   
    rating: 0,
      notes: "",
      completedIdea: false,
      completionDate: null,
      typeId: 0,
      ageId: 0,
      userId: currentUser,
    ideaId:idea.id,
      
    
    })
    
    const navigate = useNavigate(); 

    useEffect(() => {
       getUserIdeas()
        
      }, []) 

   

     const handleAddUserIdea = (event) => {
        event.preventDefault()

        
        addUserIdeas(userIdea).then(
            getUserIdeas(userIdea.id)
        )
        .then(() => navigate(`/community/add/${userIdea.Id}`))
     }

    return(
    // <section className="community">
    //     <h3 className="community__title">{idea.title}</h3>
    //     <div className="community__details">Idea Details: {idea.details}</div>
    //     {/* <div className="community__rating">User Rating: {idea.userIdeas[0]?.rating}</div> */}
        
    // </section>

     
<Card className="mainCard"  style={{ width: '15rem' }}>
{/* <Card.Img className="cardImg" variant="top" src={idea.userIdea.type.typeImg}></Card.Img> */}
<Card.Body>

  <Card.Title className="title" name="title"  >
       {idea.title}     
        </Card.Title>
  <Card.Text className="details" name="title" >Details: {idea.details}
  </Card.Text>
  {/* <Card.Text className="type"> Type {idea.userIdeas[0]?.typeId}  {userIdeas.type?.map(type => {
        return <div key={type.id} value={type.id}>
        {type.type}</div>
        })}
  </Card.Text>
   */}
   <Card.Link variant="primary" name="url" target="_blank" rel="noreferrer noopener" href={idea.url} >Explore</Card.Link>
   </Card.Body>
  
  
        
               <Button variant="primary" onClick={handleAddUserIdea}>
               Add idea to my list
              </Button>
         
              

</Card>
)
}

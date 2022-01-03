// import { useContext, useEffect, useState } from "react"
// import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
// import { IdeaCompletedCard } from "./CompletedIdeaCard"




// export const CompletedIdeaList = () => {
//     // This state changes when `getIdeas()` is invoked below
//      const { userIdeas, getUserIdeas } = useContext(UserIdeaContext)
//     const [showCompletedUserIdeas, setShowCompletedUserIdeas] = useState(true)
   
//     //useEffect - reach out to the world for something
//     useEffect(() => {
//       // console.log("IdeaList: useEffect - getIdeas")
//      getUserIdeas()
//       }, [])
      
//     const navigate = useNavigate()
  
  
  
  
//     return (
  
//       <>
     

    
//       <div className="completedIdeas">
        
//         {/* {console.log("IdeaList: Render", ideas)}
//        */}
//         {
  
   
  
//           userIdeas.filter(userIdea => userIdea.completedIdea === showCompletedUserIdeas).map(userIdea =>{
          
//               // const theUserIdea  = ideas.find(i => i.id === userIdeas.id)
//               // console.log("idea",theUserIdea)
       
            
//             return <IdeaCompletedCard
          
//             key={userIdea.id}
//             userIdea={userIdea} 
            
//             />
  
           
  
            
           
//              })
             
//         }
//       </div> 
//       </>
  
//     )
//   }
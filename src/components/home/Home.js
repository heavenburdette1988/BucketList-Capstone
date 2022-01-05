

import { useContext, useEffect } from "react"
import { UserIdeaContext } from "../userIdeas/UserIdeasProvider"
import "./Home.css"

export const Home = () => {
    const { userIdeas, getUserIdeas } = useContext(UserIdeaContext)
  
    
  console.log(userIdeas)
  
  
    return (
    <>
      <div className="d-flex text-center text-white bg-dark home__container">
  

      <main className="px-3 home__content">
        <h4>Welcome {userIdeas.user?.email}</h4>
         
     </main>

  
      
      </div>

    </>
    )
  
}
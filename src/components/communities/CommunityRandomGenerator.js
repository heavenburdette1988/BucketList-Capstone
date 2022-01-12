// randomly generates ideas for users to add.


import { Button } from "react-bootstrap"



import { CommunityCard } from "./CommunityCard"




export const CommunityRandomGenerator = ({ ideas }) => {

    function refreshPage() {
        window.location.reload(false);
      }

//using refreshPage to reload page to new generated Idea







    




    return (
        <>
           <div className="randomIdea">
                 <Button variant="secondary" className="newIdeaButton"
         onClick={refreshPage}>Generate New Idea</Button>
            {
                
                <CommunityCard idea={ideas.map((idea, i) => {
                    const ideaLength = ideas.length
                    const randomIdea = Math.floor(Math.random() * ideaLength)
                    return ideas[randomIdea]
                })[0]} />

            }
      

</div>


        </>

    )
}


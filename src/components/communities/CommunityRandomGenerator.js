


import { useContext, useEffect, useState } from "react"
import { Button } from "react-bootstrap"

import { useNavigate } from "react-router-dom"
import { IdeaContext, IdeaProvider } from "../ideas/IdeaProvider"
import { CommunityCard } from "./CommunityCard"




export const CommunityRandomGenerator = ({ ideas }) => {

    function refreshPage() {
        window.location.reload(false);
      }

//using refreshPage to reload page to new generated Idea







    const navigate = useNavigate();




    return (
        <>
            <h2>Random</h2>
            {
                <CommunityCard idea={ideas.map((idea, i) => {
                    const ideaLength = ideas.length
                    const randomIdea = Math.floor(Math.random() * ideaLength)
                    return ideas[randomIdea]
                })[0]} />

            }
        <Button variant="primary"
         onClick={refreshPage}>Generate New Idea</Button>




        </>

    )
}


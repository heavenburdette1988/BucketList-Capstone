


import { useContext, useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import { IdeaContext, IdeaProvider } from "../ideas/IdeaProvider"
import { CommunityCard } from "./CommunityCard"




export const CommunityRandomGenerator = ({ ideas, length }) => {











    const navigate = useNavigate();




    return (
        <>
            <h2>Random</h2>
            {
                <CommunityCard idea={ideas.map((idea, i) => {
                    const poop = ideas.length
                    const poopJr = Math.floor(Math.random() * poop)
                    return ideas[poopJr]
                })[0]} />

            }





        </>

    )
}


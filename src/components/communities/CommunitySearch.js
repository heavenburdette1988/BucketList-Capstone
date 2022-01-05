import React, { useContext } from "react"

import { IdeaContext } from "../ideas/IdeaProvider"

export const IdeaSearch = () => {
  const { setSearchIdeas } = useContext(IdeaContext)

  return (
    <>
      Community Idea Search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchIdeas(event.target.value)}
        placeholder="Search for an Ideas... " />
    </>
  )
}
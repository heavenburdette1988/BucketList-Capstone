
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import { IdeaCard } from "./ideas/IdeaCard";
import { IdeaList } from "./ideas/IdeaList";
// import { IdeaList } from "./ideas/IdeaList";
import { IdeaProvider } from "./ideas/IdeaProvider";
import { UserIdeaProvider } from "./userIdeas/UserIdeasProvider";





export default class ApplicationViews extends Component {

  render() {
    return (
      <UserIdeaProvider>
     <IdeaProvider>
         <Routes>
         <Route path="home/*" element={<IdeaList />} />
    
        </Routes>            
     </IdeaProvider>
     </UserIdeaProvider>
    );
  }
}
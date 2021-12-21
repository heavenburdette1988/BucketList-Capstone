
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
// import { IdeaCard } from "./ideas/IdeaCard";
import { IdeaList } from "./ideas/IdeaList";
// import { IdeaList } from "./ideas/IdeaList";
import { IdeaProvider } from "./ideas/IdeaProvider";





export default class ApplicationViews extends Component {

  render() {
    return (
     <IdeaProvider>
         <Routes>
         <Route path="home/*" element={<IdeaList />} />
    
        </Routes>            
     </IdeaProvider>
    );
  }
}

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { IdeaList } from "./ideas/IdeaList";
import { IdeaProvider } from "./ideas/ideaProvider";
import TrapperKeeper from "./TrapperKeeper";




export default class ApplicationViews extends Component {

  render() {
    return (
     <IdeaProvider>
         <Routes>
         <Route path="#home/*" element={<IdeaList />} />
         </Routes>
     </IdeaProvider>
    );
  }
}
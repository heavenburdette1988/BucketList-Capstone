
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { ActivityTypeProvider } from "./activityTypes/ActivityTypesProvider";
import { IdeaDetail } from "./ideas/IdeaDetail";
import { IdeaForm } from "./ideas/IdeaForm";
// import { IdeaCard } from "./ideas/IdeaCard";
import { IdeaList } from "./ideas/IdeaList";
// import { IdeaList } from "./ideas/IdeaList";
import { IdeaProvider } from "./ideas/IdeaProvider";
import { PriorityProvider } from "./priorities/PriorityProvider";
import { UserIdeaProvider } from "./userIdeas/UserIdeasProvider";





export default class ApplicationViews extends Component {

  render() {
    return (
      <PriorityProvider>
     <ActivityTypeProvider>
      <UserIdeaProvider>
     <IdeaProvider>
         <Routes>
         <Route path="home/*" element={<IdeaList />} />
         {/* <Route path="home/create/*" element={<IdeaForm />} /> */}
         {/* <Route path="ideas/detail/:ideaId/*" element={<IdeaDetail />} /> */}
        </Routes>            
     </IdeaProvider>
     </UserIdeaProvider>
     </ActivityTypeProvider>
     </PriorityProvider>
    );
  }
}
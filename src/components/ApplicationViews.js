
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { ActivityTypeProvider } from "./activityTypes/ActivityTypesProvider";

import { IdeaForm } from "./ideas/IdeaForm";
// import { IdeaCard } from "./ideas/IdeaCard";
import { IdeaList } from "./ideas/IdeaList";
// import { IdeaList } from "./ideas/IdeaList";
import { IdeaProvider } from "./ideas/IdeaProvider";
import { AgeProvider} from "./ages/AgeProvider";
import { UserIdeaProvider } from "./userIdeas/UserIdeasProvider";

import { CompletedIdeaList } from "./completedIdeas/CompletedIdeaList";
import { CompletedIdeaForm } from "./completedIdeas/CompletedIdeaForm";
import { CommunityList } from "./communities/CommunityList";
import { CommunityForm } from "./communities/CommunityForm";





export default class ApplicationViews extends Component {

  render() {
    return (
      <AgeProvider>
     <ActivityTypeProvider>
      <UserIdeaProvider>
     <IdeaProvider>
         <Routes>
         <Route path="home/*" element={<><IdeaList /><CompletedIdeaList/></>} />
         <Route path="home/create/*" element={<IdeaForm />} />
         <Route path="home/edit/:UserIdeaId*" element={<CompletedIdeaForm />} />       
         <Route path="community/*" element={<CommunityList />} /> 
         <Route path="community/add/:AddIdeaId*" element={<CommunityForm />} /> 
        </Routes>            
     </IdeaProvider>
     </UserIdeaProvider>
     </ActivityTypeProvider>
     </AgeProvider>
    );
  }
} 
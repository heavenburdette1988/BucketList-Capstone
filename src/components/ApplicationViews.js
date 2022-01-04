
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





export default class ApplicationViews extends Component {

  render() {
    return (
      <AgeProvider>
     <ActivityTypeProvider>
      <UserIdeaProvider>
     <IdeaProvider>
         <Routes>
         <Route path="home/*" element={<><IdeaForm /><IdeaList /><CompletedIdeaList/></>} />
         <Route path="home/edit/:UserIdeaId*" element={<CompletedIdeaForm />} />      
         {/* <Route path="community/*" element={<CommunityList />} />  */}
        </Routes>            
     </IdeaProvider>
     </UserIdeaProvider>
     </ActivityTypeProvider>
     </AgeProvider>
    );
  }
} 
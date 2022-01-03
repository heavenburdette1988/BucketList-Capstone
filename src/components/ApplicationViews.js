
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
import { IdeaCompletedCard } from "./completedIdeas/CompletedIdeaCard";





export default class ApplicationViews extends Component {

  render() {
    return (
      <AgeProvider>
     <ActivityTypeProvider>
      <UserIdeaProvider>
     <IdeaProvider>
         <Routes>
         <Route path="home/*" element={<><IdeaForm /><IdeaList /></>} />
         {/* <Route path="home/create/*" element={<IdeaForm />} /> */}
      
        </Routes>            
     </IdeaProvider>
     </UserIdeaProvider>
     </ActivityTypeProvider>
     </AgeProvider>
    );
  }
}
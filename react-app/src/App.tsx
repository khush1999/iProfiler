import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AlreadySubmit from "./components/AlreadySubmit";
import Applicants from "./components/Applicants";
import Contact from "./components/Contact";
import FileUpload from "./components/FileUpload";
import IncommingRounds from "./components/IncommingRounds";
import SendEmail from "./components/InviteApplicant";
import SuccessSubmit from "./components/SuccessSubmit";
import Analytics from "./pages/Analytics";
import DashboardPage from "./pages/DashboardPage";
import JobDetails from "./pages/JobDetails";
import { JobPosting } from "./pages/JobPosting";
import { Landingpage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import Pricing from "./pages/Pricing";
import { SignUp } from "./pages/SignUp";
import { UserProfile } from "./pages/UserProfile";

declare global {
  interface Window {
    token: any;
  }
}

let token = window.token;

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/Pricing" component={Pricing} />
          <Route path="/Apply" component={FileUpload} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/DashboardPage" component={DashboardPage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/SendEmail" component={SendEmail} />
          <Route path="/IncommingRounds" component={IncommingRounds} />
          <Route path="/Applicant" component={Applicants} />
          <Route path="/JobPostings" component={JobPosting} />
          <Route path="/Analytics" component={Analytics} />
          <Route path="/JobDetails" component={JobDetails} />
          <Route path="/SuccessSubmit" component={SuccessSubmit} />
          <Route path="/AlreadySubmit" component={AlreadySubmit} />
        </Switch>
      </HashRouter>
    </div>
    
  );
}

export default App;

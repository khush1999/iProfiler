import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Applicants from "./components/Applicants";
import Contact from "./components/Contact";
import FileUpload from "./components/FileUpload";
import IncommingRounds from "./components/IncommingRounds";
import SendEmail from "./components/InviteApplicant";
import DashboardPage from "./pages/DashboardPage";
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
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/Pricing" component={Pricing} />
          <Route exact path="/Apply" component={FileUpload} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/DashboardPage" component={DashboardPage} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/UserProfile" component={UserProfile} />
          <Route exact path="/SendEmail" component={SendEmail} />
          <Route exact path="/IncommingRounds" component={IncommingRounds} />
          <Route exact path="/Applicant" component={Applicants} />
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;

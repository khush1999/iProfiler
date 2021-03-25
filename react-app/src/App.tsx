import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import FileUpload from "./components/FileUpload";
import DashboardPage from "./pages/DashboardPage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import Contact from "./components/Contact";
import { Landingpage } from "./pages/LandingPage";
import SendEmail from "./components/InviteApplicant";
import { UserProfile } from "./pages/UserProfile";
import IncommingRounds from "./components/IncommingRounds";
import Applicants from "./components/Applicants";

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
          <Route exact path="/Applicants" component={Applicants} />
          <Route exact path="/Applicants:status" component={Applicants} />
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;

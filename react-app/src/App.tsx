import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import {BrowserRouter,Route} from "react-router-dom";
import { Banner } from './components/Banner';
import { Homepage } from './pages/Homepage';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import FileUpload from './components/FileUpload';
import DashboardPage from './pages/DashboardPage';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
declare global {
  interface Window {
      token:any;
  }
}

let token = window.token;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/Pricing" component={Pricing} />
      <Route exact path="/Apply" component={FileUpload} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/DashboardPage" component={DashboardPage} />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
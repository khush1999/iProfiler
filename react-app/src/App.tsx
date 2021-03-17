import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import { Banner } from './components/Banner';
import { Homepage } from './pages/Homepage';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import FileUpload from './components/FileUpload';
import Apply from './pages/Apply';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import {NavigationBar} from './components/NavigationBar';


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
    
      </BrowserRouter>
    </div>
  
  );
}

export default App;
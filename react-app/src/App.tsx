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
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

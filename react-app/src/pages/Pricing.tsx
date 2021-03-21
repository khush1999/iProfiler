import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import './pricing.css';

const Pricing = () => {
  return (
    <>
      <NavigationBar />
      <div className="pricingTable">
      <h2 className="pricingTable-title">Find a plan that's right for you.</h2>
      <h3 className="pricingTable-subtitle">Every plan comes with a 10-day free trial.</h3>
      
      <ul className="pricingTable-firstTable">
        <li className="pricingTable-firstTable_table">
          <h1 className="pricingTable-firstTable_table__header">Basic</h1>
          <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>59</span><span>/Month</span></p>
          <ul className="pricingTable-firstTable_table__options">
            <li> All Basic Features </li>
            <li> 5 Active Job Postings </li>
            <li> Free Resume Parsing </li>
          </ul>
          <div className="pricingTable-firstTable_table__getstart">Get Started Now</div>
        </li>
        <li className="pricingTable-firstTable_table">
        <h1 className="pricingTable-firstTable_table__header">Standard</h1>
        <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>89</span><span>/Month</span></p>
        <ul className="pricingTable-firstTable_table__options">
          <li> All Basic Features </li>
          <li> 10 Active Job Postings </li>
          <li> Multi Filtering Option </li>
          <li> User Friendly Interface </li>
        </ul>
        <div className="pricingTable-firstTable_table__getstart">Get Started Now</div>
        </li>
        <li className="pricingTable-firstTable_table">
        <h1 className="pricingTable-firstTable_table__header">Pro</h1>
        <p className="pricingTable-firstTable_table__pricing"><span>$</span><span>149</span><span>/Month</span></p>
        <ul className="pricingTable-firstTable_table__options">
          <li> All Standard Features </li>
          <li> 20 Active Job Postings </li>
          <li> Applicant Contact Support </li>
        </ul>
        <div className="pricingTable-firstTable_table__getstart">Get Started Now</div>
      </li>
    </ul>
  </div>
</>
  );
}

export default Pricing;
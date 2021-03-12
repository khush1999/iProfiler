import React from "react";
import { Button, Card, CardDeck, OverlayTrigger } from "react-bootstrap";
import './price.css';
import { ArrowRight } from 'react-bootstrap-icons';

const Pricing = () => {
    return(
      <div>
        <div className="price-head">
        <h1>Choose Your Plan For AI Powered ATS</h1>
        <br/>
        <p className="price-text">We Know That COVID-19 Has Introduced New Challenges For Businesses.</p> 
        <p className="price-text">So We Have Modified Our Pricing Plans To Help You And Your Business Adjust To These Changes.
        </p>
        </div>

        <CardDeck className="price">
        <Card>
          <Card.Header className="card-head">
              Basic
            </Card.Header>
          <Card.Body>
            <Card.Title className="card-title">Great for Companies That Want To Start Hiring</Card.Title>
            <Card.Text className="card-text">
            <div className="amt"><sup>$</sup> 59 /<sub>month</sub></div>
            <div className="feat">
            <ArrowRight />All Features<br/>
            <ArrowRight />5 Active Jobs<br/>
            <ArrowRight />Unlimited Users
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <div className="text-center">
            <button type="button" className="btn btn-primary">Get Started</button>
          </div>
          </Card.Footer>
        </Card>
        <Card>
        <Card.Header className="card-head">
              Standard
            </Card.Header>
          <Card.Body>
            <Card.Title className="card-title">Great for growing startups and small businesses</Card.Title>
            <Card.Text className="card-text">
            <div className="amt"><sup>$</sup> 89 /<sub>month</sub></div>
            <div className="feat">
            <ArrowRight />All Features<br/>
            <ArrowRight />10 Active Jobs<br/>
            <ArrowRight />Unlimited Users
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <div className="text-center">
            <button type="button" className="btn btn-primary">Get Started</button>
          </div>
          </Card.Footer>
        </Card>
        <Card>
        <Card.Header className="card-head">
              Pro
            </Card.Header>
          <Card.Body>
            <Card.Title className="card-title">Great for scaling up businesses and SMB's</Card.Title>
            <Card.Text className="card-text">
            <div className="amt"><sup>$</sup> 149 /<sub>month</sub></div>
            <div className="feat">
            <ArrowRight />All Features<br/>
            <ArrowRight />20 Active Jobs<br/>
            <ArrowRight />Unlimited Users
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <div className="text-center">
            <button type="button" className="btn btn-primary">Get Started</button>
          </div>
          </Card.Footer>
        </Card>
      </CardDeck>
      </div>
    );
}

<<<<<<< HEAD
export default Pricing
=======
export default Pricing;
>>>>>>> b210bb7003e33b59c55613b05d3e2106e04955fc

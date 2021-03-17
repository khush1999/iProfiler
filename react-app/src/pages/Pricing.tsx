import React from "react";
import { Button, Card, CardDeck, OverlayTrigger } from "react-bootstrap";
import './price.css';

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
        <br />
        <Button variant="primary" size="lg" block>
          Free Trial
      </Button>

        <CardDeck className="price">
          <Card className="card">
          <Card.Header className="card-head">
              Basic
            </Card.Header>
          <Card.Body>
            <Card.Title className="card-title">Great for Companies That Want To Start Hiring</Card.Title>
            <Card.Text className="card-text">
            <div className="amt"><sup>$</sup> 59 /<sub>month</sub></div>
            <div className="feat">
            All Features<br />
            5 Active Jobs<br/>
            Unlimited Users
            </div>
            </Card.Text>
            <br />
            <Button variant="primary" size="lg" block>Get Started</Button>
          </Card.Body>
        </Card>
        <Card className="card">
        <Card.Header className="card-head">
              Standard
            </Card.Header>
          <Card.Body>
            <Card.Title className="card-title">Great for growing startups and small businesses</Card.Title>
            <Card.Text className="card-text">
            <div className="amt"><sup>$</sup> 89 /<sub>month</sub></div>
            <div className="feat">
            All Features<br/>
            10 Active Jobs<br/>
            Unlimited Users
            </div>
            </Card.Text>
            <br />
            <Button variant="primary" size="lg" block>Get Started</Button>
          </Card.Body>
        </Card>
        <Card className="card">
        <Card.Header className="card-head">
              Pro
            </Card.Header>
          <Card.Body>
            <Card.Title className="card-title">Great for scaling up businesses and SMB's</Card.Title>
            <Card.Text className="card-text">
            <div className="amt"><sup>$</sup> 149 /<sub>month</sub></div>
            <div className="feat">
            All Features<br/>
            20 Active Jobs<br/>
            Unlimited Users
            </div>
            </Card.Text>
            <br />
            <Button variant="primary" size="lg" block>Get Started</Button>
          </Card.Body>
        </Card>
      </CardDeck>
      </div>
    );
}

export default Pricing;

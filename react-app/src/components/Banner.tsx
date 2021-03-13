import React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import banner from './banner.jpg';
import './banner.css';

const Styles = styled.div`
  .jumbo {
    background: url(${banner}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
    margin-bottom: 0;
    
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    
  }
`;

export const Banner = () => (
  <Styles>
    <Jumbo fluid className="jumbo mt-5">
      <div className="overlay">
        <Container className="main">
          <div className="des1">
            <h1>Iprofiler</h1>
            <p>Take the hassle out,</p>
            <p>for the remote recruitment process</p>
          </div>
          <div>
            <hr className="hr-style" />
            <p className="des2">A profile filtering tool that helps selecting</p>
            <p className="des2">out relevant prospects from a pool of generic applications.</p>
            <Button variant="info" className="button">Let's Hire {'>>'}</Button>{' '}
          </div>
        </Container>
      </div>
    </Jumbo>
  </Styles>
)
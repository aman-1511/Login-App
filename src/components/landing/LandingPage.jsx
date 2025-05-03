import React from 'react';
import Auth from '../auth/Auth';
import './LandingPage.css';
import agentImage from '../../assets/image.png';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="text-content">
          <h1 className="main-heading">
            Partner with real estate agents in{' '}
            <span className="responsive-br"></span>
            your city and <span className="highlight">accelerate your{' '}</span>
            <span className="responsive-br"></span>
            <span className="highlight">residential project sales</span>
          </h1>
          
          <p className="description">
            A plug-and-play platform designed to help real estate developers discover{' '}
            <span className="responsive-br"></span>
            channel partners, manage communication, track site visits, and automate{' '}
            <span className="responsive-br"></span>
            commission calculation - all in one place
          </p>
        </div>
        
        <div className="illustration-container">
          <img 
            src={agentImage} 
            alt="Real estate agent illustration" 
            className="agent-illustration" 
          />
        </div>
      </div>
      
      <div className="auth-wrapper">
        <Auth />
      </div>
    </div>
  );
};

export default LandingPage; 
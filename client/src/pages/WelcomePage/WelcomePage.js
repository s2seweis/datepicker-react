import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './WelcomePage.css'; // Import your custom styles for the WelcomePage component
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';
import video from './video-hero.mp4';

const WelcomePage = () => {
  return (
    <DefaultLayout>
      <div className="welcome-container">
       
        <div className="hero-container">
          <video style={{width:'60%'}} src={video} autoPlay muted loop className="video-bg" />
          <div style={{margin:'0px 20px 0px 20px'}} className="hero-content">
            <h1>Welcome to Datepicker App!</h1>
            <p>Easily manage dates in your application using our intuitive datepicker component. Simply select a date from the calendar below to get started.</p>
            <button style={{marginTop:'20px'}} className="cta-button"><Link to="/datepicker" className="btn">Go to Datepicker</Link></button>
          </div>
        </div>

      </div>
    </DefaultLayout>
  );
};

export default WelcomePage;

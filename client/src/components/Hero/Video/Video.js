import React from 'react';
import classNames from 'classnames';
import styles from './Video.module.css';
import video from './video-hero.mp4';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Videos = () => {
  return (
    <div className={classNames(styles['hero-container'])}>
      <video src={video} autoPlay loop muted></video>
      <div className={classNames(styles['hero-content'])}>
        <h1 style={{color:'white'}}>Welcome to my Datepicker App!</h1>
        <p style={{color:'white'}}>Easily manage dates in your application using our intuitive datepicker component. Simply select a date from the calendar below to get started.</p>
        <button className={classNames(styles['cta-button'])}><Link to="/datepicker">Get Started</Link></button>
      </div>
    </div>
  );
};

export default Videos;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './WelcomePage.css'; // Import your custom styles for the WelcomePage component
import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';

const WelcomePage = () => {
  return (
    <DefaultLayout>
      <div className="welcome-container">
        <div className="welcome-content">
          <h1>Welcome to Datepicker App!</h1>
          <p>
            Easily manage dates in your application using our intuitive datepicker component. Simply select a date from the calendar below to get started.
          </p>
        </div>
        <div className="datepicker-container">
          <button>
            <Link to="/datepicker" className="btn">Go to Datepicker</Link>
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default WelcomePage;

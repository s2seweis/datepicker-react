import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css'; // Import the CSS file

const MyDatePickerComponent = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  return (
    <div className="datepicker-container">
      <h1>Datepicker Example</h1>
      <div className="datepicker-input">
        <label>From:</label>
        <DatePicker selected={fromDate} onChange={handleFromDateChange} />
      </div>
      <div className="datepicker-input">
        <label>To:</label>
        <DatePicker selected={toDate} onChange={handleToDateChange} />
      </div>
    </div>
  );
};

export default MyDatePickerComponent;

// ###Refer to the [official documentation](https://reactdatepicker.com/) for a comprehensive list of available props and customization options.

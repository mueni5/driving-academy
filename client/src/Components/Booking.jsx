import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  // Initialize state for selected date and other booking details
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Add state for accepting terms

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if terms are accepted before submitting
    if (!acceptedTerms) {
      alert("Please accept the Terms and Conditions.");
      return;
    }

    // Handle your booking logic here, e.g., sending a request to a backend server

    // Reset form fields after submission
    setName("");
    setEmail("");
    setSelectedDate(null);
    setAcceptedTerms(false);
  };

  return (
    <div>
      <h2>Book Your Driving Lesson</h2>
      <form onSubmit={handleSubmit}>
        {/* Date picker for selecting a date */}
        <div>
          <label>Select Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
          />
        </div>
        {/* Booking form fields */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Checkbox for accepting Terms and Conditions */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />{" "}
            I accept the <a href="/terms">Terms and Conditions</a>
          </label>
        </div>
        {/* Submit button */}
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;

import React, { useState } from "react";

const ContactForm = () => {
  // Implement a contact form with form fields and form submission logic
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Include form fields for name, email, subject, and message */}
        {/* Use controlled components with state (formData) */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

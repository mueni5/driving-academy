import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/instructors">Instructors</Link>
        <Link to="/booking">Book a Lesson</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;

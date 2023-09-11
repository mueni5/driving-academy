import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Instructors from "./Components/Instructors";
import Booking from "./Components/Booking";
import ContactForm from "./Components/ContactForm";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <div className="content-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<ContactForm />} />
            
          </Routes>
        </div>
        
        
      </Router>
    </div>
  );
}

export default App;



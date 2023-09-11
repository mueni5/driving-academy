import React from "react";

const Instructors = () => {
  // Sample instructor data
  const instructors = [
    {
      name: "John Doe",
      qualifications: "Certified Driving Instructor",
      specialties: "Defensive driving,"
    },
    {
        name: "Christine Doe",
        qualifications: "Certified Driving Instructor",
        specialties: "Model Town Board & Road Signs",
    },
  ];

  return (
    <div>
      <h2>Our Instructors</h2>
      {/* Map through the instructors and display their profiles */}
      {instructors.map((instructor, index) => (
        <div key={index}>
          <h3>{instructor.name}</h3>
          <p>Qualifications: {instructor.qualifications}</p>
          <p>Specialties: {instructor.specialties}</p>
        </div>
      ))}
    </div>
  );
};

export default Instructors;

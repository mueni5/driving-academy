import React from "react";

const Courses = () => {
  // Define an array of course objects
  const courses = [
    {
      name: "Beginner's Course",
      description: "Learn the basics of safe and confident driving.",
      duration: "6 weeks",
      price: "$500",
    },
    {
      name: "Refresher Course",
      description: "Refresh on the basics of safe and confident driving.",
      duration: "5 days",
      price: "$50 per lesson",
    },
  ];

  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
          <p>Duration: {course.duration}</p>
          <p>Price: {course.price}</p>
          {/* Include enrollment button or form for each course */}
          <button>Enroll Now</button>
          {/* Add form elements as needed */}
        </div>
      ))}
    </div>
  );
};

export default Courses;

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb

# Instructors
Instructor.create(name: 'Ann Doe', email: 'john@example.com')
Instructor.create(name: 'Ben Bright', email: 'ben@example.com')

# Courses
Course.create(title: 'Beginner Course', description: 'Learn the basics of driving.', instructor_id: 1, duration: '6 weeks', price: '16000')
Course.create(title: 'Refresher Course', description: 'Refresh on the basics of safe and confident driving.', instructor_id: 2, duration: '5 days', price: '10000')
Course.create(title: 'Defensive driving Course', description: 'Driving in situations where the driver needs to be more vigilant and safe.', instructor_id: 2, duration: '7 days', price: '12000')
# Create more courses...

# Enrollments
Enrollment.create(course_id: 1, instructor_id: 1)
Enrollment.create(course_id: 2, instructor_id: 2)
Enrollment.create(course_id: 3, instructor_id: 2)
# Create more enrollments...


use('sigmaDatabase');

// Insert a few documents into the coder collection.
db.getCollection('coder').insertMany([
  [
    {
      "name": "Python",
      "Price": 1800,
      "Instructor": "Aarav"
    },
    {
      "name": "JavaScript",
      "Price": 1500,
      "Instructor": "Meera"
    },
    {
      "name": "C++",
      "Price": 2200,
      "Instructor": "Rohan"
    },
    {
      "name": "Data Science",
      "Price": 2500,
      "Instructor": "Shikhar"
    },
    {
      "name": "Machine Learning",
      "Price": 2700,
      "Instructor": "Anika"
    },
    {
      "name": "Web Development",
      "Price": 1600,
      "Instructor": "Vikram"
    },
    {
      "name": "Cybersecurity",
      "Price": 2100,
      "Instructor": "Priya"
    },
    {
      "name": "Cloud Computing",
      "Price": 3000,
      "Instructor": "Shivam"
    },
    {
      "name": "Database Management",
      "Price": 1900,
      "Instructor": "Nisha"
    },
    {
      "name": "Artificial Intelligence",
      "Price": 2800,
      "Instructor": "Shikhar"
    }
  ]
  
]);
// Print a message to the output window.
console.log(`done inserting data`);



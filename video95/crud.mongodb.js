use("CrudDb")

crud = c = create 

db.createCollection("courses")

db.courses.insertOne({
    name:"shikhar free course",
    price:0,
    assignments:12,
    projects:45
})
db.courses.insertMany(
        [
            {
          "name": "Shikhar Free Course",
          "price": 0,
          "assignments": 12,
          "projects": 45
        },
        {
          "name": "Introduction to Programming",
          "price": 500,
          "assignments": 10,
          "projects": 30
        },
        {
          "name": "Beginner Python Course",
          "price": 0,
          "assignments": 15,
          "projects": 25
        },
        {
          "name": "Data Science Basics",
          "price": 750,
          "assignments": 8,
          "projects": 20
        },
        {
          "name": "Java Fundamentals",
          "price": 0,
          "assignments": 20,
          "projects": 35
        },
        {
          "name": "Web Development for Beginners",
          "price": 300,
          "assignments": 18,
          "projects": 40
        },
        {
          "name": "Machine Learning Crash Course",
          "price": 0,
          "assignments": 12,
          "projects": 32
        },
        {
          "name": "Cybersecurity Essentials",
          "price": 450,
          "assignments": 14,
          "projects": 28
        },
        {
          "name": "Cloud Computing Introduction",
          "price": 600,
          "assignments": 10,
          "projects": 22
        },
        {
          "name": "Artificial Intelligence Basics",
          "price": 0,
          "assignments": 16,
          "projects": 34
        }
    ])

    r = read 
let a = db.courses.findOne({price:0})
console.log(a);
console.log(a.toArray());
console.log(a);

db.courses.find({price:{$exists:true,$eq:999}})


update
/ db.courses.updateOne({price:0},{$set:{price:999}})
db.courses.updateMany({price:0},{$set:{price:999}})

DELETE
db.courses.deleteOne({ _id: ObjectId("671e213c458dc6e6710034f7") });


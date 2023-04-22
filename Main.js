const express = require("express");
const app = express();
port = 9000;
//url, body, Method
//url =route, parameter
//127.0.0.1/courses/1
students = [
  { name: "sahil", age: 30 },
  {
    name: " ammar",
    age: 30,
  },
  {
    name: "karnika",
    age: 30,
  },
];

// //get all the details of the students
// app.get("/students", function (req, res) {
//   res.send(students);
// });
// //geting the data for only ammar
// app.get("student/:name", function (req, res) {
//   res.send(students[1]);
// });
// app.listen(port, () => {
//   console.log("Server is running on ", port);
// });

app.get("/students", function (req, res) {
    res.send(students);
  });
  
  // get the data for a specific student by name
  app.get("/student/:name", function (req, res) {
    const name = req.params.name;
    const student = students.find((s) => s.name === name);
    if (student) {
      res.send(student);
    } 
    else {
      res.status(404).send("Student not found");
    }
  });
  
  app.listen(port, () => {
    console.log("Server is running on ", port);
  });
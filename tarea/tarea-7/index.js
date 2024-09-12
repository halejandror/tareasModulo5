import express from "express"; // necesario para uso de express / tambien npm i express al inicio de all

const app = express(); //aca se iguala una const a express 
const port = 3002; // aca creamos una const que sera == a nuestro puerto

let students = [
  { id: 1, name: "Alice", age: 20, major: "Computer Science" },
  { id: 2, name: "Bob", age: 22, major: "Mathematics" },
  { id: 3, name: "Charlie", age: 21, major: "Physics" },
  { id: 4, name: "David", age: 23, major: "Chemistry" },
  { id: 5, name: "Eve", age: 21, major: "Biology" },
  { id: 6, name: "Frank", age: 22, major: "Engineering" },
  { id: 7, name: "Grace", age: 20, major: "Economics" },
  { id: 8, name: "Hank", age: 23, major: "History" },
  { id: 9, name: "Ivy", age: 21, major: "Philosophy" },
  { id: 10, name: "Jack", age: 22, major: "Political Science" },
  { id: 11, name: "Kara", age: 20, major: "Sociology" },
  { id: 12, name: "Leo", age: 23, major: "Art" },
  { id: 13, name: "Mia", age: 21, major: "Music" },
  { id: 14, name: "Nina", age: 22, major: "Literature" },
  { id: 15, name: "Oscar", age: 20, major: "Psychology" },
  { id: 16, name: "Paul", age: 23, major: "Geography" },
  { id: 17, name: "Quinn", age: 21, major: "Anthropology" },
  { id: 18, name: "Rose", age: 22, major: "Linguistics" },
];
// linea 27 a 29 muestro el array de estudiantes en tipo JSON
app.get("/students", (req, res) => {
  res.send(students);
});
// aca se crea funcion para llamar 1 solo estudiante por su id
app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  const result = students.find((student) => student.id === parseInt(id));
  if (result) res.send(result);
  else {
    res.status(404);
    res.send("Student not found");
  }
});
// aca elimina estudiantes por el id que le demos
app.delete("/students/:id", (req, res) => {
  const id = req.params.id;
  const result = students.findIndex((student) => student.id === parseInt(id));
  if (result !== -1) {
    students.splice(result, 1);
    res.send(`Se ha eliminado el estudiante con el id ${id}`);
  } else {
    res.status(404);
    res.send("Student not found");
  }
});
// aca se crean estudiantes en nuestro array desde postman
app.post("/students", (req, res) => {
  students.push(req.body);
  res.send(`Se ha agregado el estudiante ${req.body.title}`);
});
//aca se actualizan o editan los estudiantes 
app.put("/students/:id", (req, res) => {
  const id = req.params.id;
  const index = students.findIndex((student) => student.id === parseInt(id));
  students[index] = req.body;
  res.send("Se ha actualizado el Estudiante");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

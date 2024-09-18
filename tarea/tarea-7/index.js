import express, { json } from "express"; // necesario para uso de express / tambien npm i express al inicio de all
import { readFile, appendFile, open, writeFile, write, unlink, read } from "fs";


const app = express(); //aca se iguala una const a express 
const port = 3002; // aca creamos una const que sera == a nuestro puerto

let students= readFile('studentsArchivo.json' , "utf8", (error, data )=> {
  if(error)console.error(error);
  else{
    students= (JSON.parse(data))
  }
}) ;

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

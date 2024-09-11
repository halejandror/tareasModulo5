import http from 'http'
import { readFile, appendFile, open, writeFile, write, unlink } from "fs";

readFile('inventario.json', 'utf8', (err, products) => {
  if(err) {
    console.log('Error al leer archivo', err);
    return;
  }
  console.log('Lectura de mi archivo->Contenido del archivo:', products); 


const server = http.createServer((req, res) => {
    if (req.url === '/products' && req.method === 'GET') {
      res.writeHead(200, {'Content-Type':'products'});
      res.end((products));
    } 
   else if (req.url === '/products/id' && req.method === 'GET') {
      res.writeHead(200, {'Content-Type':'products/id'});
      res.end((products));
    } 

     else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Ruta no encontrada');
    }
});

const port = 3002;  
server.listen(port, () => {
    console.log(`Hola, este es mi servidor ${port}`);
});
});

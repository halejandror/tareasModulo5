import http from 'http'
import fs from 'fs/promises'


const response= await fs.readFile('./inventario.json', 'utf8')
const products= JSON.stringify(response)
const server = http.createServer((req, res) => {
    if (req.url === '/products' && req.method === 'GET') {
      res.writeHead(200, {'Content-Type':'products'});
      res.end((JSON.parse(products)));
    } 
   else if (req.url === '/products/:id' && req.method === 'GET') {
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

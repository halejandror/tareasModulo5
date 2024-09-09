import { createReadStream } from "fs";
import { readFile, appendFile, open, writeFile, write, unlink } from "fs";

readFile("numeros.txt", (error, data) => {
  if (error) console.error(error);
  else console.log([data.toString()]);

// ACA NECESITO AYUDA HASTA AHI PUDE PROCESAR DATA 

  const numeros = [data.toString()];
  const pares = [];
  for (let i = 0; i <= numeros.length; i++) {
    if (numeros % 2 === 0) {
      pares.push(numeros);
    }
  }
  console.log(pares);


});

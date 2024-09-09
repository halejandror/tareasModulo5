import { createReadStream } from "fs";
import { readFile, appendFile, open, writeFile, write, unlink } from "fs";

readFile("numeros.txt", 'utf-8',(error, data) => {
  if (error) console.error(error);
  else console.log([data.toString()]);

  const numeros= data.split(',') // con esto convertimos el String en un array
  const pares= numeros.map(num => parseInt(num.trim())).filter(num => num %2 ===0) //.map y parseInt(num.trim()) esta convirtiendo a numeros y filter nos devuelve solo pares 
  console.log(pares);

  writeFile('numerosPares.txt', `${pares}`, (error) => {
      if(error) console.log(error)
      else console.log("file updated")
  })

});

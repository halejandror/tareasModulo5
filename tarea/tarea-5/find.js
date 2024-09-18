import { readFile, appendFile, open, writeFile, write, unlink } from "fs";

readFile("numeros.txt", "utf-8", (error, data) => {
  if (error) console.error(error);
  else console.log([data.toString()]); //to.String convierte de buffer a String

  const numeros = data.split(","); // con esto convertimos el String en un array
  const pares = numeros
    .map((num) => parseInt(num.trim()))//.map y parseInt(num.trim()) esta convirtiendo a numeros
    .filter((num) => num % 2 === 0);   //filter nos devuelve solo los q al dividir por 2 de 0
  console.log(pares);

  writeFile("numerosPares.txt", `${pares}`, (error) => {
    if (error) console.log(error);
    else console.log("file updated");
  });
});

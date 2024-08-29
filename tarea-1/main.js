let libros = [
  { titulo: "El Hobbit", autor: "J.R.R. Tolkien", paginas: 300 },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 400,
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    paginas: 350,
  },
];

console.log("______________________________________________________");
console.log(
  `Nombre de Libro => ${libros[1].titulo}, Autor => ${libros[1].autor}`
);
console.log("----------------------------------------------------");
libros[0].paginas = 350;
console.log(libros[0]);
console.log("________________________________________________________");
libros.map((libro) => {
  let claves = Object.keys(libro);
  let ultimaClave = claves[claves.length - 1];
  delete libro[ultimaClave];
});
console.log(libros);
console.log('___________________________________________________________');
/*Punto 2: Cálculo de Estadísticas Básicas: Dado el siguiente array de estudaintes y utilizando un bucle for:*/

  const estudiantes = [
      { nombre: "Pedro", edad: 29, promedio: 7.9 },
      { nombre: "Ana", edad: 33, promedio: 8.9 },
      { nombre: "Pablo", edad: 32, promedio: 9.5 },
      { nombre: "Juan", edad: 25, promedio: 6.0 },
      { nombre: "Maria", edad: 28, promedio: 7.3 },
      { nombre: "Andres", edad: 45, promedio: 8.7 },
 ];

let sumaEdades= 0;
for(let i=0; i< estudiantes.length; i++){
  sumaEdades += estudiantes[i].edad;
};
console.log(`La suma de las edades es ${sumaEdades}`);

// let newEstudiantes= estudiantes.reduce((add, estudiante) => {return add + estudiante.edad},0);
// console.log(`La suma de las edades es  ${newEstudiantes}`);
console.log('____________________________________________________________________________________');
let promedioEdades= sumaEdades / estudiantes.length;
console.log(`El promedio de edades es ${promedioEdades}`);
console.log('_____________________________________________________________________________________');
/*Punto 3: Búsqueda y Filtrado de Datos: Dado el siguiente array de productos:*/

 let productos = [
     { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
     { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
     { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
     { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
 ];
/* Utilizando filter debes filtrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.
RETO (Opcional): Si quieres retarte te invitamos a crear un programa que sea capaz de recorrer el array estudiantes de el 
punto 2 y encontrar a el/la estudiante con el mayor promedio, utilizando un bucle for o cualquer otro método visto en
 clase */
const filterRopa= productos.filter(producto => producto.categoria === 'Ropa')
console.log(filterRopa);
console.log('__________________________________________________________________________________________');
const preciosMayores= productos.filter(producto=> producto.precio > 30)
console.log(preciosMayores);
console.log('____________________________________________________________________________________________');
let mejorPromedio= 0;
for(let i=0; i < estudiantes.length; i++){
  if(estudiantes[i].promedio > mejorPromedio){
    mejorPromedio = estudiantes[i].promedio;
  }
}
console.log(`El mejor promedio es ${mejorPromedio}`);









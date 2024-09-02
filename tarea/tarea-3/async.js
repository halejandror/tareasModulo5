const esperarSegundos = (tiempo, texto, index) => {
  setTimeout(() => {
    console.log(
      "___________________________________________________________________________________"
    );

    console.log(
      `han pasado ${tiempo} milesimas de segundo`
    );
    console.log(
      "____________________________________________________________________________________"
    );

    console.log(index, texto);
  }, tiempo);
};

export default esperarSegundos;

const esperarSegundos = (tiempo, texto) => {
  setTimeout(() => {
    console.log(
      "___________________________________________________________________________________"
    );

    console.log(
      `han pasado ${tiempo} milesimas de segundo`
    );
    console.log(
      "_______________________________________________________________________________"
    );

    console.log(texto);
  }, tiempo);
};

export default esperarSegundos;

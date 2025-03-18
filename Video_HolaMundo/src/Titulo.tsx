function Titulo() {
  const nombre = "Lola";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }

  return <h1>Hola bro</h1>;
}

export default Titulo;

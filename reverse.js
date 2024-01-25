// ========  Aufgabe 1


function procesarTexto(cadena) {
  // Eliminar espacios entre palabras
  const textoSinEspacios = cadena.replace(/\s/g,"");

  // Crear un array para almacenar las letras en orden invertido
  const letrasInvertidas = [];

  // Almacenar todas las letras desde la última hasta la primera
  for (let i = textoSinEspacios.length - 1; i >= 0; i--) {
    letrasInvertidas.push(textoSinEspacios[i]);
  }

  // Unir todas las letras en un string
  const resultado = letrasInvertidas.join('');

  
  console.log(resultado);
}


const texto = "Hola Mundo del espacio infinito";
procesarTexto(texto);

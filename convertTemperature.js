// Módulo para interactuar con la entrada estándar
const readline = require('readline');

// Crea una interfaz para leer la entrada y escribir la salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para convertir temperatura de Celsius a Fahrenheit
function convertToCelsius(celsius) {
  return (celsius * 9/5) + 32;
}

// Pregunta al usuario la temperatura en Celsius
rl.question('Ingrese la temperatura en Celsius: ', (answer) => {
  // Convierte la entrada a un número
  const celsius = parseFloat(answer);

  // Verifica si la entrada es un número válido
  if (!isNaN(celsius)) {
    // Realiza la conversión
    const fahrenheit = convertToCelsius(celsius);

    // Imprime el resultado
    console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
  } else {
    console.log('Por favor, ingrese un número válido.');
  }

  // Cierra la interfaz de entrada/salida
  rl.close();
});

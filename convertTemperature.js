// =============  Aufgabe 2 ==========
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


rl.question('Ingrese la temperatura en Celsius: ', (answer) => {
  // Convierte la entrada a un número
  const celsius = parseFloat(answer);

  
  if (!isNaN(celsius)) {
    // Realiza la conversión
    const fahrenheit = convertToCelsius(celsius);

    
    console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
  } else {
    console.log('Por favor, ingrese un número válido.');
  }

  
  rl.close();
});

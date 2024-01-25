// =============== Aufgabe 3 =======================

const faker = require('faker');

function generarContrasena(longitud) {
  const caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?';
  let contrasena = '';

  for (let i = 0; i < longitud; i++) {
    const caracterAleatorio = caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length));
    contrasena += caracterAleatorio;
  }

  return contrasena;
}

// Ejemplo de uso
const longitudDeseada = 12; 
const contrasenaGenerada = generarContrasena(longitudDeseada);

console.log('Contraseña generada:', contrasenaGenerada);

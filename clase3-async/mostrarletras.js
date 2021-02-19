function mostrarLetras(palabra, time, cb) {
  for(let i=0; i<palabra.length; i++) {
    setTimeout(() => {
      console.log(palabra[i]);
      if (i == palabra.length-1)
        cb()
    }, time*i);
  }
  
}

const fin = () => console.log('Terminé');

mostrarLetras('¡Hola!', 0, fin);
mostrarLetras('¡Hola!', 250, fin);
mostrarLetras('¡Hola!', 1000, fin);
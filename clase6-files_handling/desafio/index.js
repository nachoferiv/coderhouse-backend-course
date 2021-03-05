const Archivo = require('./Archivo');

const file = new Archivo('productos.js');

const newProduct = {
    title: "Silla",
    price: 675.67,
    thumbnail: "www.google.com/32.png"
}

file.save(newProduct).then(a => console.log(a));
file.read().then(a => console.log(a));
//file.delete().then(a => console.log(a))
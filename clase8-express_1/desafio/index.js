const e = require('express');
const express = require('express');
const port = process.env.PORT || 8080;

const DALProductos = require('./db/DALProductos');
const Producto = require('./entities/Producto');

const app = express();
app.use(express.json());

const server = app.listen(port, () => {
    console.log('Server listening at port: ' + port);
})

server.on('error', err => {
    console.log(err)
});

app.get('/api/productos/listar', async (req, res) => {
    const dalProductos = new DALProductos('items.js')
    const products = await dalProductos.read();

    if (products.length == 0)
        res.status(404).json({error: 'Products not found'});
    else 
        res.status(200).json(products);
});

app.get('/api/productos/listar/:id', async (req, res) => {
    const dalProductos = new DALProductos('items.js')
    const products = await dalProductos.read();
    const product = await products.filter(p => p.id == req.params.id);

    if (product.length == 0)
        res.status(404).json({error: "Product not found"});
    else 
        res.status(200).json(product);
});

app.post('/api/productos/guardar', async (req, res) => {
    try {
        const dalProductos = new DALProductos('items.js')

        if(!req.body.name)
            res.status(400).json({error: 'Product must have a title.'});

        if(!req.body.price)
            res.status(400).json({error: 'Product must have a price.'});
            
        if(!req.body.thumbnail)
            res.status(400).json({error: 'Product must have a thumbnail.'});

        const newProduct = new Producto(null, req.body.name, req.body.price, req.body.thumbnail);
        const created = await dalProductos.save(newProduct);

        if (!created)
            res.status(400).json({error: 'The product already exists'});
        else
            res.status(200).json({message: "Created!"});
    } catch (e) {
        res.status(400).json({error: "Whoops! Something went wrong..."});
    }
})

module.exports = app;
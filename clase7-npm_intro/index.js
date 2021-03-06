const express = require('express');
const Archivo = require('./Archivo');
const port = process.env.port || 8080

const app = express();

const itemsVisits = getEndpointVisits();
const itemVisits = getEndpointVisits();

app.listen(port, () => {
   console.log( `Server listening at port ${port}`);
});

app.get('/items', async(req, res) => {
    try {
        itemsVisits.increaseVisits();
        const db = new Archivo('productos.js');
        const items =  await db.read();

        const data = {
            items,
            cantidad: items.length
        };

        res.json(data);

    } catch (err) {
        console.log(err);
        res.status(500).send({error: 'Whoops! Something when wrong...'});
    }
});

app.get('/item-random', async(req, res) => {
    try {
        itemVisits.increaseVisits();
        const db = new Archivo('productos.js');
        const items = await db.read();
        const randomPosition = items.length > 0 ? Math.floor(Math.random() * items.length) : 0;
        const randomItem = items[randomPosition];

        res.json({item: randomItem});

    } catch (err) {
        console.log(err);
        res.status(500).send({error: 'Whoops! Something when wrong...'});
    }
    
});

app.get('/visits', async(req, res) => {
    try {
        const visits = {
            items: itemsVisits.getVisits(),
            item: itemVisits.getVisits()
        };
    
        res.json({
            visits
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({error: 'Whoops! Something when wrong...'});
    }
})

function getEndpointVisits() {
    let visits = 0;

    return {
        getVisits: () => visits,
        increaseVisits: () => visits++
    }
}
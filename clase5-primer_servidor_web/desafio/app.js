const http = require('http');
const PORT = process.env.port || 3000;

const server = http.createServer((req, res) => {
    const id  = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    const title = `Product-${ Math.floor(Math.random() * (10 - 1 + 1) + 1) }`;
    const price = (Math.floor(Math.random() * (9999.99 * 100 - 0.00 * 100 + 1 * 100) + 0.00 * 100))/100;
    const thumbnail = `Photo-${  Math.floor(Math.random() * (10 - 1 + 1) + 1) }`
    
    const product = {
        id,
        title,
        price,
        thumbnail
    }

    res.end(JSON.stringify(product))
});

server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
})
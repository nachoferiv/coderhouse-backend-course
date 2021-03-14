const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));

router.get('/users', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

router.post('/upload', (req, res) => {
    console.log('asdf')
    console.log(req.body)
    res.send('asdf');
})

app.use('/v1/api', router);

app.listen(port, () => {
    console.log('Server running on port ' + port);
})
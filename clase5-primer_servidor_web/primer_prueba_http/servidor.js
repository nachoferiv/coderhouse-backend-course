const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
    const currentdate = new Date(); 
    const currentHour = Number(currentdate.getHours());
    const result = "";

    if (currentHour >= 6 && currentHour <= 12)
        result = "Buenos dias!";
    if (currentHour > 12 && currentHour <= 19)
        result = "Buenas tardes!";
    if (currentHour > 19 && currentHour < 6)
        result = "Buenas noches!";

    res.end(result.toString());
});

server.listen(port, function() {
    console.log('Server at port ' + this.address().port);
})


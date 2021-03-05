const fs = require('fs');


function writeData() {
    try {
        fs.readFile('package.json','utf-8', (err, data) => {
            if (err) {
                throw new Error("Something went wrong!");
            }

            let info = {
                contenidoStr: data.toString(),
                contenidoObj: JSON.parse(data),
                size:  data.size
            };
    
            fs.writeFile("info.txt", JSON.stringify(info, null, '\t'), err => {
                if (err) {
                    console.log(err);
                    return;
                }
    
                console.log("Saved!");
            })  
        });
    } catch (error) {
        console.log(error);
        return;
    }
}

async function getData() {
    const data = await fs.promises.readFile('info.txt', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
    }).then(async d => {
        const objContent = JSON.parse(d.toString()).contenidoObj;
        objContent.author = "Coderhouse";

        fs.writeFile("package.json.coder", JSON.stringify(objContent, null, '\t'), err => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Saved!");
        })  
    })

    const parsedData = JSON.parse(data)

    console.log(parsedData)
}

//writeData();
getData().then(d => d).catch(e => e);




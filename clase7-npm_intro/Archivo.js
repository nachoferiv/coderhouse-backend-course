const fs = require('fs');

class Archivo {
    constructor(name) {
        this.name = name;
    }
    read = async function () {
        try {
            const a = await fs.promises.readFile(this.name);
            const parsedData = JSON.parse(a.toString())
            return parsedData;

        } catch {
            return [];
        }
    }

    save = async function (data) {
        try {
            if (!data) {
                throw new Error();
            }
    
            let fileContent = await this.read().then(d => d);
            const id = fileContent.length + 1;
            const product = {
                id,
                title: data.title,
                price: data.price,
                thumbnail: data.thumbnail
            }

            fileContent.push(product)

            await fs.promises.writeFile(this.name, JSON.stringify(fileContent, null, '\t'))  
            return 'Saved!';

        } catch {
            return `Something went wrong trying to write the file named ${this.name}...`;
        }
    }

    delete = async function () {
       try {
        await fs.promises.unlink(this.name)
        return 'Deleted!';

       } catch {
        return `Something went wrong trying to delete the file named ${this.name}...`;
       }
    }
}

module.exports = Archivo;
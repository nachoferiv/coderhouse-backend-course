function* generateRandomNumber(min = 0, max = 100) {
    let id = 1;
    let obj = {}
    while (true) {
        obj.order= id;
        obj.number= Math.floor(Math.random() * (max - min + 1) + min);
        obj.date= new Date().toISOString();
        yield obj;
        id++;
    }
}

const generator = generateRandomNumber(300,5082)

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
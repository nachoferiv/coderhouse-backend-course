function * generarIds() {
    let id = 0;
    while (true && id != 4) {
        yield id ++;
    }
}

const generator = generarIds();

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());
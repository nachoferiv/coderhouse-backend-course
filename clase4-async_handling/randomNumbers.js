function generateRandomNumber(min = 0, max = 100) {
    let id = 1;

    return {
        next: () => {
            return {
                order: id++,
                number: Math.floor(Math.random() * (max - min + 1) + min),
                date: new Date().toISOString()
            }
        }
    }
}

const generator = generateRandomNumber(300,5082)

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
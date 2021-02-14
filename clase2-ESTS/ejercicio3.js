function sumValues(...values) {
    return values.reduce((prev, current) => {
        return prev+current
    })
}


const values = [1,2,3,4,5];

console.log(sumValues(1,2,3,4,5))
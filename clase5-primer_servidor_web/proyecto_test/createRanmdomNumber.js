const createRandomNumbers = () => {
    let iteration = 0;
    let numbers = {};
    while (iteration < 1000) {
        iteration++;
        const randomNumber= Math.floor(Math.random() * (20 - 1 + 1) + 1);
        const numberExist = numbers[randomNumber];

        if (numberExist) {
            numbers[randomNumber] = numbers[randomNumber]+1;
        } else {
            numbers[randomNumber] = 1;
        }
    }
    
    return numbers;
}

module.exports = createRandomNumbers;
const array = ['6**2', '**', '3**3', '4**', '4**5', '8**2', '4*=5']

for(i in array) {
    if (!array[i].includes('**'))  {
        console.log('Not Pow');
        continue;
    }

    try {
    const numbers = array[i].split('**');
    const firstNumber = (numbers[0].length > 0 ? numbers[0] : null);
    const secondNumber = (numbers[1].length > 0 ? numbers[1] : null);

    if (firstNumber == null || secondNumber == null)
        throw new Error();
        
    console.log((+firstNumber) ** (+secondNumber));
    } catch {
        console.log('Invalid Nubmers')
    }
}
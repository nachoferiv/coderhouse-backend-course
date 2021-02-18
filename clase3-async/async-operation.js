function operation (num1, num2, cb) {
  try {
    const result = cb(num1, num2);
    return result
  } catch {
    return 'Invalid input';
  }
}

const sum = (num1, num2) => {
  return num1 + num2;
}

const sustract = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
  return num1 / num2;
}

console.log(operation(1,5,sum));
console.log(operation(5,3,sustract));
console.log(operation(8,8,multiply));
console.log(operation(100,4,divide));

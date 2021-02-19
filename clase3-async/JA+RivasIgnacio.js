async function showWords(text, time, cb) {
  const words = text.split(' ');
  const wordsQuantity = words.length;

  for(let i in words) {
    setTimeout(() => {
      console.log(words[i])
      if (i == words.length-1)
        cb(wordsQuantity)
    }, time * 1000)
  }
}

const showFinishMessage = (wordsQuantity) => console.log(`Proceso completo. Cantidad de palabras: ${wordsQuantity}`) 

showWords('First Text', 10, showFinishMessage);
showWords('This is the second text', 1, showFinishMessage);
showWords('The last one', 3, showFinishMessage);
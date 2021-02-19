function showWords(text, cb, time = 1) {
  const words = text.split(' ');
  const wordsQuantity = words.length;

  for (let i in words) {
    let extraTime = i == 0? 1 : +i+1;
    setTimeout(() => {  
      console.log(words[i]);
      if (i == words.length -1)
        cb(wordsQuantity)
    }, (time * extraTime)  * 1000);
  }
}

const showFinishMessage = (wordsQuantity) => {
  console.log(`END - Processed words: ${wordsQuantity}`);
} 

showWords('First Text', totalWords => {
  let words = totalWords;
  showWords('This is the second text', totalWords => {
    words += totalWords;
    showWords('The last one', totalWords => {
      words += totalWords;
      showFinishMessage(words)
    });
  }, 2);
}, 3);

function showWords(text, time, cb) {
  const words = text.split(' ');
  for(let i in words) {
    setTimeout(() => {
      console.log(words[i])
    }, time)
  }
  cb()
}


showWords('First Text', 3, () => console.log('Termine'));
showWords('This is the second text', 2, () => console.log('Termine'));
showWords('The last one', 5, () => console.log('Termine'));
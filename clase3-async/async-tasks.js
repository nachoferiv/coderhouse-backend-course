/* ******************************* 
                SYNC
   ******************************* */
/*
const delay = ret => {for(let i=0; i < ret*3e6; i++);}

function doTask(num) {
  console.log('Doing task ' + num);
  delay(100);
}

console.log('Starting Tasks...');

doTask(1);
doTask(2);
doTask(3);
doTask(4);

console.log('Finishing Tasks...')
console.log('Other Tasks...')
*/
/* ******************************* 
                ASYNC
   ******************************* */


  function doTask(num, cb) {
    console.log('Doing task ' + num);
    setTimeout(cb, 100);
  }
  
  console.log('Starting Tasks...');

  doTask(1, () => {
    doTask(2, () => {
      doTask(3, () => {
        doTask(4, () => {
          console.log('Finishing Tasks...');
        })
      })
    })
  })

  console.log('Another Tasks...')
// With async/await
const wait2Seconds = async function (obj) {
    const obj1 = Object.entries(obj)
    for (let i in obj1) {
        console.log(await returnKeyValueAfterTwoSeconds(obj1[i]))
    }
}

// With promise
const wait2SecondsPromise = function (obj) {
    const obj1 = Object.entries(obj)
    for (let i in obj1) {
        returnKeyValueAfterTwoSeconds(obj1[i])
            .then( x => console.log(x))
    }
}

const returnKeyValueAfterTwoSeconds = x => new Promise((resolve, reject) => {
    setTimeout(resolve(x), 2000)
})

const obj = {
    nombre: 'juan',
    edad: 35,
    altura: 1.56
};

//wait2Seconds(obj)
wait2SecondsPromise(obj)
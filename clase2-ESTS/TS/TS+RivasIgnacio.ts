async function operacion(num1: number, num2: number, op: string) {
    const moduloSuma : string = './modules/suma.js';
    const moduloResta : string = './modules/resta.js';

    if (op != 'suma' && op != 'resta')
        return 'Operacion invalida, solo se permite "suma" o "resta".';

    const funcionImportada = op == 'suma'? 
        import(moduloSuma).then(Suma => {
            const suma = new Suma(num1, num2)
            return suma.resultado()
        }) : 
        import(moduloResta).then(Resta => {
            const resta = new Resta(num1, num2)
            return resta.resultado()
        });

    return funcionImportada;
}

async function operaciones() {
    let casosDePrueba = [{
        num1: 4,
        num2: 3,
        operacion: 'suma'
    },
    {
        num1: 2,
        num2: 8,
        operacion: 'resta'
    },
    {
        num1: 4,
        num2: 3,
        operacion: 'multiplicacion'
    },
    {
        num1: 23,
        num2: 3,
        operacion: 'resta'
    }];

    for(let i in casosDePrueba) {
        const resultado = await operacion(casosDePrueba[i].num1, casosDePrueba[i].num2, casosDePrueba[i].operacion);
        console.log(resultado);
    }
}


operaciones();
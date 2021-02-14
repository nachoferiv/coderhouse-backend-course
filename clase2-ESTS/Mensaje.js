class Mensaje {
    mostrar = (message, intervalInSeconds) => {
        return new Promise((resolve, reject) => {

            if(!message && !intervalInSeconds) {
                reject(console.log('You must set a message'));
                return;
            }   
            
            const delay = intervalInSeconds? intervalInSeconds : 1;
            const trimedMessage = String(message).trimEnd();

            setTimeout(() => resolve(console.log(trimedMessage))
            , delay * 1000);         
        });
    }
}

/* ***************************** */
/* ****         TESTS       **** */
/* ***************************** */

const msj = new Mensaje();

// Deberia tardar 1 seg
msj.mostrar('Primer mensaje, 1 segundo   ')
    .then(v => {})
    .catch(v => {});
// Deberia tardar 3 segs
msj.mostrar(0, 3)
    .then(v => {})
    .catch(v => {});
// Deberia mostrarse inmediatamente
msj.mostrar('   Tercer mensaje, cero segundos', 0)
    .then(v => {})
    .catch(v => {});
msj.mostrar(false, 4)
    .then(v => {})
    .catch(v => {});
// Deberia fallar
msj.mostrar()
    .then(v => {})
    .catch(v => {});

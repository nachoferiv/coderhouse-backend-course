import { Observable } from 'rxjs';

function contarPushMultiple(tiempo) {
    let reftimer;
    let contadorPushMultiple = 0;
    return new Observable( suscriber => {
        suscriber.next(contadorPushMultiple++);
        reftimer = setInterval(() => {
            suscriber.next(contadorPushMultiple)
            if (contadorPushMultiple == 4) {
                //suscriber.complete();
            }
            if (contadorPushMultiple == 5) {
               // suscriber.error('Error!');
            }

            contadorPushMultiple++;
        }, tiempo);

        return () => {
            console.log('Fin de contador por return');
            clearInterval(reftimer);
        }
    });
} 


let suscriptor = contarPushMultiple(1000)
                    .subscribe(
                        contador => console.log(contador),  // metodo next
                        error => console.log(error),        // metodo error
                        () => console.log('Termina por complete') // metodo complete
                    );
setTimeout(() => {
    suscriptor.unsubscribe()
}, 10000);
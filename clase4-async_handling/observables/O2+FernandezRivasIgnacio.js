import { Observable, pipe } from "https://dev.jspm.io/rxjs@6/_esm2015";
import operators from 'https://dev.jspm.io/rxjs@6/operators';
const { map } = operators;

const input = document.querySelector("#input_1");
const input_reversed = document.querySelector("#input_1_reversed");

const observableReverser = new Observable((suscriber) => {
    input.addEventListener("keyup", eventHandler);

    function eventHandler (e) {
        if (input.value == "error")
            suscriber.error("Invalid input!");
        if (input.value == "complete")
            suscriber.complete();
        suscriber.next(input.value);
    }

    return () => {
        input.value = "";
        input_reversed.value = "";
        input.removeEventListener("keyup", eventHandler);
    }
  }).pipe(
    map(str => str.split("").reverse().join("")) // Operador mapeo
  )
  
const subscriptor = observableReverser.subscribe({
    next(x) { input_reversed.value = x },
    error(err) { 
        console.log('Se ha producido un error: ' + err); 
        input.value = "";
        input_reversed.value = "";
    },
    complete() { 
        console.log('Completado'); 
        input.value = "";
        input_reversed.value = "";
    }
  });

setTimeout(() => {
    subscriptor.unsubscribe();
    input.setAttribute("readonly", true);
}, 3000)

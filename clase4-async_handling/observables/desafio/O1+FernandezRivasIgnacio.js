import { Observable } from "https://dev.jspm.io/rxjs@6/_esm2015";

const input = document.querySelector("#input_1");
const input_reversed = document.querySelector("#input_1_reversed");

function reverseValue() {
    return new Observable(suscriber => {
        input.addEventListener("keyup", eventHandler, true);

        function eventHandler (e) {
            reverseText(input, input_reversed);
        }
        
        function reverseText(input, input_reversed) {
            if (input.value == "error")
                suscriber.error("Invalid input!");
            if (input.value == "complete")
                suscriber.complete();
            input_reversed.value = input.value.split("").reverse().join("");
        }

        return () => {
            input.value = "";
            input_reversed.value = "";
            input.removeEventListener("keyup", eventHandler, true);
        }
    })
}


let suscriptor = reverseValue()
                    .subscribe(
                        next => console.log("ok"),  // metodo next
                        error => console.log(error),        // metodo error
                        () => console.log('Termina por complete') // metodo complete
                    );
setTimeout(() => {
    suscriptor.unsubscribe();
    input.setAttribute("readonly", true)
}, 30000)



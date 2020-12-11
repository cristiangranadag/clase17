const Lista1 = document.getElementById('MonedaOri');
const Lista2 = document.getElementById('MonedaDestino');
const botonC = document.getElementById('Convertir');

const fragmento1 = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();
const fragmento3 = document.createDocumentFragment();

let MonedaOrigen = [];
let MonedaDestino = [];
// let moneda = 0;

MonedaOrigen = ['Elige Moneda', 'Dolar', 'Pesos Mexicano', 'Peso Colombiano']
MonedaDestino = ['Elige Moneda', 'Dolar', 'Pesos Mexicano', 'Peso Colombiano', 'Euro', 'Bolivar']

//Ingresar Mensaje
const mensaje = document.createElement('h1');
mensaje.textContent="Ejercicio Divisas";
fragmento3.appendChild(mensaje)
document.getElementById('Principal').appendChild(fragmento3)

MonedaOrigen.forEach((moneda,index)=>{
    const opcion = document.createElement('option');
    opcion.setAttribute('value',index);
    opcion.textContent = moneda;
    fragmento1.appendChild(opcion);
})

Lista1.appendChild(fragmento1)

for (let index = 0; index < MonedaDestino.length; index++) {
    const opcion1 = document.createElement('option');
    opcion1.setAttribute('value', index)
    opcion1.textContent = MonedaDestino[index];
    fragmento2.appendChild(opcion1);
}

Lista2.appendChild(fragmento2)

botonC.addEventListener('click', function(){
    // console.log('Convertir Moneda')

    // const monedaSeleccionada = Lista1.options[Lista1.selectedIndex].value;
    // console.log(monedaSeleccionada);

    const monedaSeleccionada1 = Lista1.options[Lista1.selectedIndex].value;
    const monedaSeleccionada2 = Lista2.options[Lista2.selectedIndex].value;
    // console.log(monedaSeleccionada);
    console.log(monedaSeleccionada1);
    console.log(monedaSeleccionada2);

    if(monedaSeleccionada1==0 || monedaSeleccionada2==0) {
        console.log('Error')
    }
    // if(monedaSeleccionada1 == 'Dolar'){
    // if(monedaSeleccionada1 == '1'){

    switch (monedaSeleccionada1) {
        case '1':
            switch(monedaSeleccionada2) {             
                case '1':
                    //  moneda = 34*19.8003;
                    //  console.log(moneda)
                    // console.log('Converti a pesos Mexicanos')
                    console.log('Error')
                    break;
                case '2':
                    console.log('Convertir a pesos Mexicanos')
                    break;
                // case 'Peso Colombiano':
                //      moneda = 34*3466.38;
                //      console.log(moneda)
                // break;
    
                default:
                    break;
           }
            break;

            case '2':
                
                break;

        default:
            break;
    }
        // console.log('Convertir Dolar')
    //     switch(monedaSeleccionada2) {             
    //         case '1':
    //             //  moneda = 34*19.8003;
    //             //  console.log(moneda)
    //             // console.log('Converti a pesos Mexicanos')
    //             console.log('Error')
    //         break;
    //         case '2':
    //             console.log('Convertir a pesos Mexicanos')
    //         break;
    //         // case 'Peso Colombiano':
    //         //      moneda = 34*3466.38;
    //         //      console.log(moneda)
    //         // break;

    //         default:
    //             break;
    //    }
})

// const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

function Convertir2(){
    console.log('Enviar')
}
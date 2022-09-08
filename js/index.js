const formulario = document.getElementById("form");

const suma = (a, b) => a + b

const impuestoArgentina = x => x * 0.75
const impuestoColombia = x => x * 0.19
const impuestoChile = x => x * 0.16
const impuestoMexico = x => x * 0.16
const impuestoPeru = x => x * 0.38
const impuestoUruguay = x => x * 0.22
const impuestoParaguay = x => x * 0.13
const impuestoVenezuela = x => x * 0.20
const impuestoBolivia = x => x * 0.23

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    let pais = document.getElementById('pais').value
    let precio = parseInt(document.getElementById('precio').value)
    
    if (pais === "1") {
        precioFinal = (suma(precio,impuestoArgentina(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } else if (pais == "2") {
        precioFinal = (suma(precio,impuestoColombia(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } else if (pais == "3") {
        precioFinal = (suma(precio,impuestoChile(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } else if (pais == "4") {
        precioFinal = (suma(precio,impuestoMexico(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } else if (pais == "5") {
        precioFinal = (suma(precio,impuestoPeru(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } else if (pais == "6") {
        precioFinal = (suma(precio,impuestoUruguay(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } else if (pais == "7") {
        precioFinal = (suma(precio,impuestoParaguay(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } else if (pais == "8") {
        precioFinal = (suma(precio,impuestoVenezuela(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } else if (pais == "9") {
        precioFinal = (suma(precio,impuestoBolivia(precio))).toFixed(2);
        console.log(pais);
        console.log(precioFinal);
    } 
    
    if ((pais === '')) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingrese un país!',
        })

    } 
    if ((precio === '')) {
            Swal.fire({
                icon: 'error',
                title: 'Oopa...',
                text: 'Por favor ingrese un valor!',
            })
        } 
            
            document.getElementById('Calcular') == precioFinal; {
                Swal.fire({
                    icon: 'success',
                    title: 'El precio más impuesto es: $' + (precioFinal),
                    confirmButtonText: "Cool",     
                })
            }
});

const lista = document.getElementById("lista");
    
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch("./js/data.json")
        .then(function(res) {
            return res.json();
    })
        .then(function(data) {
            let html = '';
            data.forEach(function(datas) {
                html +=`
                <li>${datas.nombre} ${datas.iva}</li>
                `;
            })
            document.getElementById('resultado2').innerHTML = html;
    }) 
};


/* function guardarDatos(){
    localStorage.pais = document.getElementById("pais").value;
    localStorage.precio = document.getElementById("precio").value;
   }
   
   function recuperarDatos(){
    if ((localStorage.pais != undefined) && (localStorage.precio != undefined)) {
     document.getElementById("datos").innerHTML = "Pais: " + localStorage.pais + "<br/> Precio + IVA: $" + localStorage.precio;
    } else{
     document.getElementById("datos").innerHTML = "No has introducido pais ni precio";
    }
   } */
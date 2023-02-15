
// const eligeUsuario=() =>
// const nombre =prompt ("seleccione su cuenta");
// let contraseña = prompt('ingrese su contraseña')

const cuentas=[
    {nombre: 'mali', saldo: 200, contraseña: 1 },
    { nombre: 'gera', saldo: 290, contraseña: 2 },
    { nombre: 'maui', saldo: 67,  contraseña: 3 }
];



//variables globales.
let usuarioActual;
let saldoActual;
let passwordActual;
//fin globales.

//datos del usuario, guardar en variables globales.
function mali(){
usuarioActual = cuentas[0].nombre;
saldoActual= cuentas[0].saldo;
contraseñaActual=cuentas[0].contraseña;

// document.getElementById("claveUsuario").style.display = "none";
//             document.getElementById("opcionesCajero").style.display = "inherit";
}


function gera(){
usuarioActual= cuentas[1].nombre;
saldoActual = cuentas[1].saldo;
contraseñaActual =cuentas[1].contraseña;
// document.getElementById("claveUsuario").style.display = "none";
//             document.getElementById("opcionesCajero").style.display = "inherit";

}
function maui(){
    usuarioActual = cuentas[2].nombre;
    saldoActual= cuentas[2].saldo;
    contraseñaActual=cuentas[2].contraseña;
    // document.getElementById("claveUsuario").style.display = "none";
    //         document.getElementById("opcionesCajero").style.display = "inherit";

}
// // ocultando opciones cajero
document.getElementById("opcionesCajero").style.display="none";

//validando usuarios

function validandoUsuario(){ // este es el boton//
let nombre = document.getElementById("ingreseUsuario").value;//esto es un input
paso(nombre);

console.log("nombre usuario= " + nombre);

}
function paso(nombre){         //validando informacion en las cuentas//
   let usuarioFinal=nombre;
    for(let i=0; i< cuentas.length; i++){
if(usuarioFinal == cuentas[i].nombre){
    usuarioActual= cuentas[i].nombre
 passwordActual=cuentas[i].contraseña
 saldoActual=cuentas[i].saldo
        // document.getElementById("Usuario").style.display ="none";
    // document.getElementById("opcionesCajero").style.display = "inherit";
    }
//     else if (usuarioFinal==usuarioActual){
//         const correcto = document.createTextNode(`ok`);
//         const correctoFinal = document.getElementById("correctoUsuario");
// correctoFinal.innerHTML ="";
// correctoFinal.appendChild (correcto);
      console.log(typeof usuarioFinal);
}
}


//validando contraseñas

function clave(){//este es boton//
    let contraseña = document.getElementById("password").value;//este es un input//
    paso2 (contraseña);

    console.log("contraseña= " + contraseña );
} 

//se hace la validación. Si está bien, oculta la pantalla de ingreso de clave y muestra las opciones del cajero.
function paso2(contraseña){
let validacionFinal= parseInt (contraseña);
    // for(let i = 0; i < cuentas.length; i++){
        // if (usuarioActual == cuentas[i].nombre && validacionFinal == cuentas[i].contraseña)
        if (validacionFinal == passwordActual) {
                             document.getElementById("clave").style.display = "none";
                       document.getElementById("Usuario").style.display ="none";
            document.getElementById("opcionesCajero").style.display = "inherit";

        }else {
            const resultado = document.createTextNode (`Por favor revise su Usuario/Contraseña. Intente nuevamente`);
            const resultadoError = document.getElementById("errorClave");
            resultadoError.innerHTML = "";
            resultadoError.appendChild (resultado);          
                }
    // }
}

//opciones cajero--- ver saldo

document.getElementById("verSaldo").style.display = "none";//ocultar
const verSaldo=()=>{//boton
    const saldoFinal=document.createTextNode (`$${saldoActual}`);
    const mensajeSaldo = document.getElementById ("saldoCliente");
    mensajeSaldo.innerHTML = "";
    mensajeSaldo.appendChild(saldoFinal);
    document.getElementById("verSaldo").style.display = "inherit";
    document.getElementById("opcionesCajero").style.display = "none";
    document.getElementById("verSaldo").style.display = "inherit";
    }

const atras=()=>{
    document.getElementById("opcionesCajero").style.display = "inherit";
    document.getElementById("verSaldo").style.display = "none";


}
const cerrarSesion=()=>{
    document.getElementById("opcionesCajero").style.display = "none";
    document.getElementById("Usuario").style.display = "inherit";
    document.getElementById("clave").style.display = "inherit";
}

    
//opciones cajero--- agregar saldo
document.getElementById("agregarSaldo").style.display = "none";
const ingresarSaldo=()=>{//boton//
const saldoIngresado = document.getElementById("saldoIngresado").value;//input//
revisaSaldo (saldoIngresado);


    document.getElementById("agregarSaldo").style.display = "inherit";
    document.getElementById("opcionesCajero").style.display = "none";


}    



const atrasSaldo=()=>{
    document.getElementById("opcionesCajero").style.display = "inherit";
    document.getElementById("agregarSaldo").style.display = "none";
    document.getElementById("saldoTotal").style.display = "none";
    
}
//ingreso de monto nuevo el agregar saldo
        const revisaSaldo =(saldoIngresado)=> {
        let saldoNuevo= (parseInt(saldoIngresado)+parseInt(saldoActual));console.log(saldoNuevo);
        const saldoIngresoNuevo=parseInt(saldoNuevo);
        if(saldoIngresoNuevo >990)
                {
                const mensajeError = document.createTextNode ("Sobrepasa el monto permitido por el banco. Ingresa un valor inferior.");
        const mensajeUsuario = document.getElementById ("alertaCupo");
        mensajeUsuario.innerHTML = "";
        mensajeUsuario.appendChild (mensajeError);
   
            }
        else {
// document.getElementById("saldoTotal").style.display="none";
        mostrarTransacción(saldoIngresado, saldoIngresoNuevo);
    
        }

   
}


     // Muestra la pantalla con el saldo del cliente
     document.getElementById("saldoTotal").style.display = "none";
const mostrarTransacción =(saldoIngresado, saldoIngresoNuevo)=> {
    document.getElementById("agregarSaldo").style.display = "none";
    document.getElementById("saldoTotal").style.display = "inherit";

    
    const dineroIngresado = document.createTextNode (`$${saldoIngresoNuevo}`);
            const mostrarDinero = document.getElementById("saldoIngresadoCliente");
    mostrarDinero.innerHTML = "";
    mostrarDinero.appendChild (dineroIngresado);
    // verSaldo
}
// }
const nuevoSaldoActual =()=>{
if(saldoIngresoNuevo >= 1);
nuevoSaldoActual=saldoIngresoNuevo;
console.log(nuevoSaldoActual);
}





"use strict";

let datosPublicidad = document.getElementById('datosPublicidad').style.display = 'none';
let datosPago = document.getElementById('datosPago').style.display = 'none';
let ultimoInputDatosPublicidad = document.getElementById('link');
let ultimoInputDatosPago = document.getElementById('codigo'); 

function prioridadBaja() {
        document.getElementById('prioridadMedia').style.border= "none"; 
        document.getElementById('prioridadAlta').style.border= "none"; 
        let prioridades = document.getElementById('prioridadBaja'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        document.getElementById('datosPublicidad').style.display = 'flex';
}


function prioridadMedia() {
        document.getElementById('prioridadBaja').style.border= "none"; 
        document.getElementById('prioridadAlta').style.border= "none"; 
        let prioridades = document.getElementById('prioridadMedia'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        document.getElementById('datosPublicidad').style.display = 'flex';
        
}

function prioridadAlta() {
        document.getElementById('prioridadBaja').style.border= "none"; 
        document.getElementById('prioridadMedia').style.border= "none"; 
        let prioridades = document.getElementById('prioridadAlta'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        document.getElementById('datosPublicidad').style.display = 'flex';
}

ultimoInputDatosPublicidad.addEventListener('keydown', function () {
        document.getElementById('datosPago').style.display = 'flex';
});

ultimoInputDatosPago.addEventListener('keydown', function() {
        document.getElementById('enviarDatos').style.opacity = 1;
});
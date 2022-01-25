"use strict";

let baja = 'si';
function prioridadBaja() {
    if (baja == 'si'){
        let prioridades = document.getElementById('prioridadBaja'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        return baja = 'no';
    }

    if (baja == 'no'){
        document.getElementById('prioridadBaja').style.border= 'none';
        return baja = 'si';
    }
}

let media = 'si';
function prioridadMedia() {
    if (media == 'si'){
        let prioridades = document.getElementById('prioridadMedia'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        return media = 'no';
    }

    if (media == 'no'){
        document.getElementById('prioridadMedia').style.border= 'none';
        return media = 'si';
    }
}

let alta = 'si';
function prioridadAlta() {
    if (alta == 'si'){
        let prioridades = document.getElementById('prioridadAlta'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        return alta = 'no';
    }

    if (alta == 'no'){
        document.getElementById('prioridadAlta').style.border= 'none';
        return alta = 'si';
    }
}
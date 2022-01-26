"use strict";

function prioridadBaja() {
        document.getElementById('prioridadMedia').style.border= "none"; 
        document.getElementById('prioridadAlta').style.border= "none"; 
        let prioridades = document.getElementById('prioridadBaja'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
    
}


function prioridadMedia() {
        document.getElementById('prioridadBaja').style.border= "none"; 
        document.getElementById('prioridadAlta').style.border= "none"; 
        let prioridades = document.getElementById('prioridadMedia'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
}


function prioridadAlta() {
        document.getElementById('prioridadBaja').style.border= "none"; 
        document.getElementById('prioridadMedia').style.border= "none"; 
        let prioridades = document.getElementById('prioridadAlta'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';

}
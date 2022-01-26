"use strict";

function prioridadBaja() {
        document.getElementById('form').style.display= "none"; 
        document.getElementById('prioridadMedia').style.border= "none"; 
        document.getElementById('prioridadAlta').style.border= "none"; 
        let prioridades = document.getElementById('prioridadBaja'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        document.getElementById('form').style.display= "block"; 
    
}


function prioridadMedia() {
        document.getElementById('form').style.display= "none"; 
        document.getElementById('prioridadBaja').style.border= "none"; 
        document.getElementById('prioridadAlta').style.border= "none"; 
        let prioridades = document.getElementById('prioridadMedia'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        document.getElementById('form').style.display= "block"; 
}


function prioridadAlta() {
        document.getElementById('form').style.display= "none"; 
        document.getElementById('prioridadBaja').style.border= "none"; 
        document.getElementById('prioridadMedia').style.border= "none"; 
        let prioridades = document.getElementById('prioridadAlta'); 
        prioridades.style.border = "1px solid #A66FA6";
        prioridades.style.borderRadius = '5px';
        document.getElementById('form').style.display= "block"; 

}
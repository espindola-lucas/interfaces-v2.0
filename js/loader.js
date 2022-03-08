"use strict"

document.getElementById('loader').addEventListener("animationend", function () {
    document.getElementById('loader').style.display = "none";
    document.getElementById('ring').style.display = "none"; 
});

let url = location.href;
let separar = url.split("/");
let urlmensajes;
let scrollMobileMensajes = window.screen.width;

for(let i = 0; separar.length > i; i++){
    urlmensajes = separar[i];
}

let n = 0;
function Timer() {
    let parar = 1;
    let entre = 0;
    
    window.setInterval(function(){
        if(parar != n){
            n++;
            document.getElementById('loader').style.marginTop = '20%';
            document.body.style.overflow = 'hidden';
        }else {
            if (entre == 0){
                entre = 1 ;
                document.getElementById('loader').className = "loader-container-finish";
                document.getElementById('ring').className = "ring-container-finish";
                n = 0 ;
                parar = 0;
                urlmensajes == "mensajes.html" ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
                urlmensajes == "mensajes.html" && scrollMobileMensajes < 400 ? document.body.style.overflow = 'scroll' : document.body.style.overflow = 'scroll'; 
            }
        }
    },1500);
}

document.addEventListener("DOMContentLoaded", Timer());
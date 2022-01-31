"use strict"

document.getElementById('loader').addEventListener("animationend", function () {
    document.getElementById('loader').style.display = "none";
    document.getElementById('ring').style.display = "none"; 
});

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
                document.body.style.overflow = 'scroll';
            }
            
        }
    },1500);
}


document.addEventListener("DOMContentLoaded", Timer());
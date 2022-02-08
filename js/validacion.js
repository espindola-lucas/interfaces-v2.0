let email = document.getElementById("mail");

email.addEventListener("change", function (event) {
    if (email.validity.typeMismatch) {
        document.getElementById("error").style.display= "block";
    } else {
        document.getElementById("error").style.display= "none";
    }
});

let contrasenia = document.getElementById("contrasenia");

contrasenia.addEventListener("change", function (event) {
    let c=document.getElementById("contrasenia").value; 
    if (c.length < 8) {
        document.getElementById("aviso").style.display= "none";
        document.getElementById("errorC").style.display= "block";
    } else {
        document.getElementById("aviso").style.display= "block";
        document.getElementById("errorC").style.display= "none";
    }
});

let Repetircontrasenia = document.getElementById("repetircontrasenia");

Repetircontrasenia.addEventListener("change", function (event) {
    let c=document.getElementById("contrasenia").value; 
    let Rc=document.getElementById("repetircontrasenia").value; 
    if (Rc != c ) {
        document.getElementById("repetircontrasenia").style.boxShadow =  "0 0 5px 1px red";
        document.getElementById("errorCr").style.display= "block";
    } else {
        document.getElementById("errorCr").style.display= "none";
        document.getElementById("repetircontrasenia").style.boxShadow = "none"  ;
    }
});


let emailMobile = document.getElementById("errorMobileMail");

emailMobile.addEventListener("change", function (event) {
    if (emailMobile.validity.typeMismatch) {
        document.getElementById("errorMobile").style.display= "block";
    } else {
        document.getElementById("errorMobile").style.display= "none";
    }
});

let contraseniaMobile = document.getElementById("contraseniaMobile");

contraseniaMobile.addEventListener("change", function (event) {
    let c=document.getElementById("contraseniaMobile").value; 
    if (c.length < 8) {
        document.getElementById("avisoMobile").style.display= "none";
        document.getElementById("errorMobileC").style.display= "block";
    } else {
        document.getElementById("avisoMobile").style.display= "block";
        document.getElementById("errorMobileC").style.display= "none";
    }
});

let RepetircontraseniaMobile = document.getElementById("repetircontraseniamobile");

RepetircontraseniaMobile.addEventListener("change", function (event) {
    let c=document.getElementById("contraseniaMobile").value;
    let Rc=document.getElementById("repetircontraseniamobile").value; 
    if (Rc != c ) {
        document.getElementById("repetircontraseniamobile").style.boxShadow =  "0 0 5px 1px red";
        document.getElementById("errorCrm").style.display= "block";
    } else {
        document.getElementById("errorCrm").style.display= "none";
        document.getElementById("repetircontraseniamobile").style.boxShadow = "none"  ;
    }
});
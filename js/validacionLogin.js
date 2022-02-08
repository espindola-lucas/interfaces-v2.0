let emailLogin = document.getElementById("emailLogin");

emailLogin.addEventListener("change", function (event) {
    if (emailLogin.validity.typeMismatch) {
        document.getElementById("errorLogin").style.display= "block";
    } else {
        document.getElementById("errorLogin").style.display= "none";
    }
});


function validar (){
    let c= document.getElementById("ContraseniaL").value;
    if (c != 123) {
        document.getElementById("contraseniaIncorrecta").style.display= "block";
        document.getElementById("contraseniaIncorrecta").style.marginTop= "2%";
        document.getElementById("ContraseniaL").style.boxShadow =  "0 0 5px 1px red";
    } else {
        document.getElementById("contraseniaIncorrecta").style.display= "none";
        document.getElementById("ContraseniaL").style.boxShadow =  "none";
        window.location="muroInicio.html";
    }
}


let emailLoginM = document.getElementById("emailLoginM");

emailLoginM.addEventListener("change", function (event) {
    if (emailLoginM.validity.typeMismatch) {
        document.getElementById("errorLoginM").style.display= "block";
        document.getElementById("errorLoginM").style.marginTop= "-3%";
    } else {
        document.getElementById("errorLoginM").style.display= "none";
    }
});

function validarM (){
    let c= document.getElementById("ContraseniaLM").value;
    if (c != 123) {
        document.getElementById("contraseniaIncorrectaM").style.display= "block";
        document.getElementById("contraseniaIncorrectaM").style.marginTop= "-3%";
        document.getElementById("ContraseniaLM").style.boxShadow =  "0 0 5px 1px red";
    } else {
        document.getElementById("contraseniaIncorrecta").style.display= "none";
        document.getElementById("ContraseniaLM").style.boxShadow =  "none";
        window.location.replace("file:///home/rosario/visuPruebas/interfaces-v2.0/muroInicio.html");
    }
}
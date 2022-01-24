function Abrir(){
    let elegirChat = document.getElementById('elegirChat');
    elegirChat.style.display = 'none';

    let chatSeleccionado = document.getElementById('chatSeleccionado');
    chatSeleccionado.style.display = 'flex';
}

function cerrar() {
    let elegirChat = document.getElementById('elegirChat');
    elegirChat.style.display = 'block';

    let chatSeleccionado = document.getElementById('chatSeleccionado');
    chatSeleccionado.style.display = 'none';
}

function Rechazar1 (){
    document.getElementById('chat1').style.display='none';
}

function Rechazar2 (){
    document.getElementById('chat2').style.display='none';
}

function Rechazar3 (){
    document.getElementById('chat3').style.display='none';
}

function Rechazar4 (){
    document.getElementById('chat4').style.display='none';
}

function Rechazar5 (){
    document.getElementById('chat5').style.display='none';
}

function Rechazar6 (){
    document.getElementById('chat6').style.display='none';
}

function Rechazar7 (){
    document.getElementById('chat7').style.display='none';
}

function Rechazar8 (){
    document.getElementById('chat8').style.display='none';
}

function Rechazar9 (){
    document.getElementById('chat9').style.display='none';
}

function Rechazar10 (){
    document.getElementById('chat10').style.display='none';
}

function MensajeNuevo (){
    document.addEventListener('keypress', function keypress(e){
        if (e.keyCode == '13'){
            document.getElementById('MensajeNuevo').style.display='flex';
            document.getElementById("input").placeholder = "Escribe un mensaje...";
        }
    });
}
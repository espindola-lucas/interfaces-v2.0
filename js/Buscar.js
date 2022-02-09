function BuscarAmigo(){
    document.addEventListener('keypress', function keypress(e){
        if (e.keyCode == '13'){
            window.location.href = "muroInicio-busqueda.html";
        }
    });
}


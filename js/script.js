function like1() {
    let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
        document.getElementById("P1").innerHTML = span + 665;
    }
    
    function like2() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
            document.getElementById("P2").innerHTML = span + 11;
    }
    
    function like3() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
            document.getElementById("P3").innerHTML = span + 3;
    }
    
    function like4() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
            document.getElementById("P4").innerHTML = span + 91;
    }
    
    function like5() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
            document.getElementById("P5").innerHTML = span +  302;
    }

    function changeicon (){
        document.getElementById("icono").className = "fas fa-user-clock";
    }
    function changeicon1(){
        document.getElementById("icono1").className = "fas fa-user-clock";
    }
    
    function changeicon2(){
        document.getElementById("icono2").className = "fas fa-user-clock";
    }
    function changeicon3(){
        document.getElementById("icono3").className = "fas fa-user-clock";
    }
    
    function changeicon4 (){
        document.getElementById("icono4").className = "fas fa-user-clock";
    }

    let click = 'si';

    function MostrarNotificaciones (){
        if (click == 'si'){
            document.getElementById('notificacion').style.display='block';
            document.getElementById('campana').style.color='rgba(132, 75, 132, 1)';
            campana
            return   click = 'no';
        }
        if (click == 'no'){
            document.getElementById('notificacion').style.display='none';
            document.getElementById('campana').style.color='white';
            return click = 'si';
        }
        
    }

    function Publicar (){
        document.getElementById('Publicacion-ahora').style.display='block';
        document.getElementById("placeholder").value = "Escribe una publicación...";
        // document.getElementById('notificacion').style.marginTop='-101%';
    }

    let ver1 = 'si';

    function  VerComentario1 (){
        if (ver1 == 'si'){
            document.getElementById('Ver-comentario1').style.display='block';
            return   ver1 = 'no';
        }
        if (ver1 == 'no'){
            document.getElementById('Ver-comentario1').style.display='none';
            return ver1 = 'si';
        }
    }

    let ver2 = 'si';
    function  VerComentario2 (){
        if (ver2 == 'si'){
            document.getElementById('Ver-comentario2').style.display='block';
            return   ver2 = 'no';
        }
        if (ver2 == 'no'){
            document.getElementById('Ver-comentario2').style.display='none';
            return ver2 = 'si';
        }
    }

    let ver3 = 'si';
    function  VerComentario3 (){
        if (ver3 == 'si'){
            document.getElementById('Ver-comentario3').style.display='block';
            return   ver3 = 'no';
        }
        if (ver3 == 'no'){
            document.getElementById('Ver-comentario3').style.display='none';
            return ver3 = 'si';
        }
    }

    let ver4 = 'si';
    function  VerComentario4 (){
        if (ver4 == 'si'){
            document.getElementById('Ver-comentario4').style.display='block';
            return   ver4 = 'no';
        }
        if (ver4 == 'no'){
            document.getElementById('Ver-comentario4').style.display='none';
            return ver4 = 'si';
        }
    }

    let ver5 = 'si';
    function  VerComentario5 (){
        if (ver5 == 'si'){
            document.getElementById('Ver-comentario5').style.display='block';
            return   ver5 = 'no';
        }
        if (ver5 == 'no'){
            document.getElementById('Ver-comentario5').style.display='none';
            return ver5 = 'si';
        }
    }

    function AgregarComentario2(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('comentario-nuevo2').style.display='block';
            }
        });
    }
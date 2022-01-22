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
        document.getElementById("placeholder").value = "Escribe una publicaci�n...";
        // document.getElementById('notificacion').style.marginTop='-101%';
    }
    function PublicarMovile() {
        document.getElementById('publi-nueva-mobile').style.display='block';
        document.getElementById("input-movile").value = "Escribe una publicaci�n...";
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

    function AgregarComentario1(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('comentario-nuevo1').style.display='flex';
                document.getElementById("input-comentario").value = "Agregar un comentario...";
                document.getElementById("input-comentario").placeholder = "Agregar un comentario...";
                document.getElementById('Ver-comentario1').style.display='block';
            return   ver1 = 'no';
            }
        });
    }

    function AgregarComentario2(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('comentario-nuevo2').style.display='flex';
                document.getElementById("input-comentario2").value = "Agregar un comentario...";
                document.getElementById("input-comentario2").placeholder = "Agregar un comentario...";
                document.getElementById('Ver-comentario2').style.display='block';
            return   ver2 = 'no';
            }
        });
    }

    function AgregarComentario3(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('comentario-nuevo3').style.display='flex';
                document.getElementById("input-comentario3").value = "Agregar un comentario...";
                document.getElementById("input-comentario3").placeholder = "Agregar un comentario...";
                document.getElementById('Ver-comentario3').style.display='block';
            return   ver3 = 'no';
            }
        });
    }

    function AgregarComentario4(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('comentario-nuevo4').style.display='flex';
                document.getElementById("input-comentario4").value = "Agregar un comentario...";
                document.getElementById("input-comentario4").placeholder = "Agregar un comentario...";
                document.getElementById('Ver-comentario4').style.display='block';
            return   ver4 = 'no';
            }
        });
    }

    function AgregarComentario5(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('comentario-nuevo5').style.display='flex';
                document.getElementById("input-comentario5").value = "Agregar un comentario...";
                document.getElementById("input-comentario5").placeholder = "Agregar un comentario...";
                document.getElementById('Ver-comentario5').style.display='block';
            return   ver5 = 'no';
            }
        });
    }

    function like1m() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
            document.getElementById("P1M").innerHTML = span + 11;
        }
    function like2m() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
        document.getElementById("P2M").innerHTML = span + 16;
            }

    function like3m() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
        document.getElementById("P3M").innerHTML = span + 200;
                    }
    function like4m() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
        document.getElementById("P4M").innerHTML = span + 301;
                                    }
    function like5m() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
        document.getElementById("P5M").innerHTML = span + 6;
                                                                    }
    function like6m() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
        document.getElementById("P6M").innerHTML = span + 18;  
    }
    function like7m() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
        document.getElementById("P7M").innerHTML = span + 19;   
    }
    let verm1 = 'si';
    function  VerComentarioM1 (){
        if (verm1 == 'si'){
            document.getElementById('Comentario-movile1').style.display='block';
            return   verm1 = 'no';
        }
        if (verm1 == 'no'){
            document.getElementById('Comentario-movile1').style.display='none';
            return verm1 = 'si';
        }
    }
    let verm2= 'si';
    function  VerComentarioM2 (){
        if (verm2 == 'si'){
            document.getElementById('Comentario-movile2').style.display='block';
            return   verm2 = 'no';
        }
        if (verm2 == 'no'){
            document.getElementById('Comentario-movile2').style.display='none';
            return verm2 = 'si';
        }
    }
    let verm3= 'si';
    function  VerComentarioM3 (){
        if (verm3 == 'si'){
            document.getElementById('Comentario-movile3').style.display='block';
            return   verm3 = 'no';
        }
        if (verm3 == 'no'){
            document.getElementById('Comentario-movile3').style.display='none';
            return verm3 = 'si';
        }
    }
    let verm4= 'si';
    function  VerComentarioM4 (){
        if (verm4 == 'si'){
            document.getElementById('Comentario-movile4').style.display='block';
            return   verm4 = 'no';
        }
        if (verm4 == 'no'){
            document.getElementById('Comentario-movile4').style.display='none';
            return verm4= 'si';
        }
    }
    let verm5= 'si';
    function  VerComentarioM5 (){
        if (verm5 == 'si'){
            document.getElementById('Comentario-movile5').style.display='block';
            return   verm5 = 'no';
        }
        if (verm5 == 'no'){
            document.getElementById('Comentario-movile5').style.display='none';
            return verm5= 'si';
        }
    }
    let verm6= 'si';
    function  VerComentarioM6 (){
        if (verm6== 'si'){
            document.getElementById('Comentario-movile6').style.display='block';
            return   verm6 = 'no';
        }
        if (verm6== 'no'){
            document.getElementById('Comentario-movile6').style.display='none';
            return verm6= 'si';
        }
    }

    let verm7= 'si';
    function  VerComentarioM7 (){
        if (verm7== 'si'){
            document.getElementById('Comentario-movile7').style.display='block';
            return   verm7 = 'no';
        }
        if (verm7== 'no'){
            document.getElementById('Comentario-movile7').style.display='none';
            return verm7= 'si';
        }
    }
   
    function Comentar1(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('Comentario-nuevo-movile1').style.display='flex';
                document.getElementById("input-comentario-nuevo").value = "Agregar un comentario...";
                document.getElementById("input-comentario-nuevo").placeholder = "Agregar un comentario...";
                document.getElementById('Comentario-movile1').style.display='block';
            return   verm1 = 'no';
            }
        });
    }
    function Comentar2(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('Comentario-nuevo-movile2').style.display='flex';
                document.getElementById("input-comentario-nuevo2").value = "Agregar un comentario...";
                document.getElementById("input-comentario-nuevo2").placeholder = "Agregar un comentario...";
                document.getElementById('Comentario-movile2').style.display='block';
            return   verm2= 'no';
            }
        });
    }
    function Comentar3(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('Comentario-nuevo-movile3').style.display='flex';
                document.getElementById("input-comentario-nuevo3").value = "Agregar un comentario...";
                document.getElementById("input-comentario-nuevo3").placeholder = "Agregar un comentario...";
                document.getElementById('Comentario-movile3').style.display='block';
            return   verm3= 'no';
            }
        });
    }
    function Comentar4(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('Comentario-nuevo-movile4').style.display='flex';
                document.getElementById("input-comentario-nuevo4").value = "Agregar un comentario...";
                document.getElementById("input-comentario-nuevo4").placeholder = "Agregar un comentario...";
                document.getElementById('Comentario-movile4').style.display='block';
            return   verm4= 'no';
            }
        });
    }
    function Comentar5(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('Comentario-nuevo-movile5').style.display='flex';
                document.getElementById("input-comentario-nuevo5").value = "Agregar un comentario...";
                document.getElementById("input-comentario-nuevo5").placeholder = "Agregar un comentario...";
                document.getElementById('Comentario-movile5').style.display='block';
            return   verm5= 'no';
            }
        });
    }
    function Comentar6(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('Comentario-nuevo-movile6').style.display='flex';
                document.getElementById("input-comentario-nuevo6").value = "Agregar un comentario...";
                document.getElementById("input-comentario-nuevo6").placeholder = "Agregar un comentario...";
                document.getElementById('Comentario-movile6').style.display='block';
            return   verm6= 'no';
            }
        });
    }
    function Comentar7(){
        document.addEventListener('keypress', function keypress(e){
            if (e.keyCode == '13'){
                document.getElementById('Comentario-nuevo-movile7').style.display='flex';
                document.getElementById("input-comentario-nuevo7").value = "Agregar un comentario...";
                document.getElementById("input-comentario-nuevo7").placeholder = "Agregar un comentario...";
                document.getElementById('Comentario-movile7').style.display='block';
            return   verm7= 'no';
            }
        });
    }
    function changeiconMobile (){
        document.getElementById("icono-mobile1").className = "fas fa-user-clock";
    }
    function changeiconMobile1(){
        document.getElementById("icono-mobile2").className = "fas fa-user-clock";
    }
    function changeiconMobile2(){
        document.getElementById("icono-mobile3").className = "fas fa-user-clock";
    }
    function changeiconMobile3(){
        document.getElementById("icono-mobile4").className = "fas fa-user-clock";
    }
    function changeiconMobile4(){
        document.getElementById("icono-mobile5").className = "fas fa-user-clock";
    }
    function changeiconMobile5(){
        document.getElementById("icono-mobile6").className = "fas fa-user-clock";
    }
    function changeiconMobile6(){
        document.getElementById("icono-mobile7").className = "fas fa-user-clock";
    }
    function changeiconMobile7(){
        document.getElementById("icono-mobile8").className = "fas fa-user-clock";
    }
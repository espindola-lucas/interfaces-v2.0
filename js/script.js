function like1() {
    let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
        document.getElementById("P1").innerHTML =   span   +  665 ;
    
    }
    
    function like2() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
            document.getElementById("P2").innerHTML =   span   +  11 ;
    }
    
    function like3() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
           document.getElementById("P3").innerHTML =   span   +  3 ;
    }
    
    function like4() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
           document.getElementById("P4").innerHTML =   span   +  91 ;
    }
    
    function like5() {
        let span = "<span  style='color:red' id='like' class='fas fa-heart'></span> "
           document.getElementById("P5").innerHTML =   span   +  302 ;
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
            console.log('hola');
            document.getElementById('notificacion').style.display='none';
            document.getElementById('campana').style.color='white';
            return click = 'si';
        }
        
    }

    
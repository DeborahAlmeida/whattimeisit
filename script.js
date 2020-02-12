function carregar (){
    var msg = document.getElementById("mensagem")
    var img = document.getElementById("img")
    var data = new Date()
    var min = new Date()
    var minute = min.getMinutes()
    var hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora}h e ${minute} minutos `
    if (hora >= 0 && hora < 12){
        // BOM DIA 
        img.src = "IMAGES/img_dia.jpg"
        document.body.style.background = "rgb(220,185,119)"
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = "IMAGES/img_tarde.jpg"
        document.body.style.background = "rgb(203, 126, 98)"
    } else {
        //BOA NOITE 
        img.src = "IMAGES/img_noite.jpg"
        document.body.style.background = "rgb(57,69,79)"
    }
}
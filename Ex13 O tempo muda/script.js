function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    /*Mudar a imagem dependo da hora*/
    if (hora >= 5 && hora < 12) {
        //Bom dia
        foto.src = 'img/fotomanhaSRC.jpg'
        document.body.style.background = '#F4A460'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        foto.src = "img/fototardeSRC.jpg"
        document.body.style.background = '#A0522D'
    } else {
        //Boa noite
        foto.src = 'img/fotonoiteSRC.jpg'
        document.body.style.background = '#696969'
    }
}

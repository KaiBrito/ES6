function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var result = document.getElementById('result')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.getElementById('imagem')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.src = 'img/baby-boy.jpg'
            } else if (idade < 24) {
                //Jovem
                img.src = 'img/young-boy.jpg'
            } else if (idade < 50) {
                //Adulto
                img.src = 'img/adult-man.jpg'
            } else {
                //Idoso
                img.src = 'img/elderly-man.jpg'
            }
        } else {
            genero = 'Mulher'
            if (idade < 10) {
                //Criança
                img.src = 'img/baby-girl.jpg'
            } else if (idade < 20) {
                //Jovem
                img.src = 'img/young-girl.jpg'
            } else if (idade < 50) {
                //Adulto
                img.src = 'img/adult-girl.jpg'
            } else {
                //Idoso
                img.src = 'img/elderly-girl.jpg'
            }
        }

        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(img)
    }
}
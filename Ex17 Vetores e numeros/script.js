let TabNum = document.getElementById('TabNum')
let num = document.getElementById('txtnum')
let result = document.getElementById('result')
let ArrayNum = []

// Descobre se é um número valido
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Descobre se é o número está no array
function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() { 
    // Verificando os números antes de adicionar
    if (isNumero(num.value) && !inLista(num.value, ArrayNum)) {
        // Criando e adicionando ao array
        ArrayNum.push(Number(num.value))
        // Adicionado os itens ao select
        let item = window.document.createElement('option')
        item.text = `Valor ${txtnum.value} adicionado.`
        TabNum.appendChild(item)
    } else {
        window.alert('[ERRO] Valor ínvalido ou já encontrado na lista')
    }
}

function Finalizar() {
    if (ArrayNum.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let maior = ArrayNum[0]
        let menor = ArrayNum[0]
        let soma = 0
        let media = 0

        for (let i in ArrayNum) {
            // Descobrindo o maior número
            if (ArrayNum[i] > maior) {
                maior = ArrayNum[i]
            }
            // Descobrindo o menor número
            if (ArrayNum[i] < menor) {
                menor = ArrayNum[i]
            }
            // Fazendo a soma
            soma += ArrayNum[i]
            // Preparando a váriavel pra média
            media++
        }

        result.innerHTML = ''
        result.innerHTML += `Ao todo, temos ${ArrayNum.length} números cadastrados.<br>`
        result.innerHTML += `O maior valor informado foi ${maior}.<br>`
        result.innerHTML += `O menor valor informado foi ${menor}.<br>`
        result.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        result.innerHTML += `A média dos valores digitados é ${soma/media}.<br>`
    }
}

function Limpar() {
    TabNum.innerHTML = ''
    ArrayNum.length = 0
    result.innerHTML = ''
}
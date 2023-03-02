function Contar() {
    let txtini = window.document.getElementById('txtini')
    let txtfim = window.document.getElementById('txtfim')
    let txtpasso = window.document.getElementById('txtpasso')
    let result = window.document.getElementById('result')

    // Verifica se os valores iniciais e finais são validos
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        window.alert('[ERRO] Algum valor foi dado como invalido! Tente novamente.')
        result.innerHTML = 'Ops, não foi dessa vez!'
    } else {

        // Pegar o valor inteiro da string
        let ini = Number(txtini.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        // Começa a contagem
        result.innerHTML = 'Contando: '
        // Verificando o valor do "passo"
        if (passo == 0) {
            window.alert('Seu passo era invalido, então ele foi alterado para 1')
            passo = 1
        }
        if (ini < fim) {
            // Contagem crescente
            for (let i = ini; i <= fim; i += passo) {
                result.innerHTML += ` ${i} \u{1F449}`
            }
        } else {
            // Contagem decrescente 
            for (let i = ini; i >= fim; i -= passo) {
                result.innerHTML += ` ${i} \u{1F449}`
            }
        }
        result.innerHTML += ` \u{1F3C1}`
    }  
}
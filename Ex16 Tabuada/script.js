function GerarTabuada() {
    let txtnum = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('tabuada')

    // Verifica se o número é valido
    if (txtnum.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        let num = Number(txtnum.value)
        let c = 1
        // Limpa a tabela do select
        tab.innerHTML = '' 
        while (c <= 10) {
            // Cria um novo item no select
            let item = window.document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}

function contar(){
    var tinicio = document.getElementById('txtinicio')
    var tfim = document.getElementById('txtfim')
    var tpasso = document.getElementById('txtpasso')
    var inicio = Number(tinicio.value)
    var fim = Number(tfim.value)
    var passo = Number(tpasso.value)
    var res = document.querySelector('div#res')
    for(c = inicio; c <= fim; c =+ passo){
        res.innerHTML = `${c}`
    }
}
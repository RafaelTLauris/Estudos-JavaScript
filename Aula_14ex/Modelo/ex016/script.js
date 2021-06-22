function Contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pass = document.getElementById('txtpass')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('Verifique os números para contagem e tente novamente!')
        res.innerHTML = 'Impossível Contar'
    }
    else{
        res.innerHTML = 'Contando: <br>'

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO: 1')
            p = 1
        }
//Contagem crescente
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
//Contagem regressiva
        else{
            for(var c = i; c >= f; c-= p)
            res.innerHTML += ` ${c} \u{1F449}`
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}
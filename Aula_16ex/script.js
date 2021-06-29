var num = document.getElementById('txtn')
var lista = document.getElementById('seltab')
var res = document.getElementById('res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }

}

function Adicionar(){
    if(isNumero(num.value) && inLista(num.value, valores)){

    }
    else{
        window.alert('Número inválido ou já está na lista!')
    }
}
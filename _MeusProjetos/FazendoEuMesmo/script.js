function Tabuada(){
var nume = document.getElementById('txtn')
var tabu = document.getElementById('sele')

    if(nume.value.length == 0){
        window.alert('Por favor digite novamente um número')
    }
    else{

        var n = Number(nume.value)
        tabu.innerHTML = ''

        for(var c = 1; c <= 10 ; c++){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tabu${c}`
            tabu.appendChild(item)

        }

    }
}
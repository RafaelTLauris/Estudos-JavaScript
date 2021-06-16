function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res= document.querySelector('div#res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique a data e tente novamente')
    }
    else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked){
            genero = 'Homem'
            if(idade >=0  && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else if (fSex[1].checked){
            genero = 'Mulher'
            if(idade >=0  && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.innerHTML = `seu sla ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
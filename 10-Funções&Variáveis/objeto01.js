//let amigo = {nome: 'Enzo', sexo: 'M', peso: 65.2, engordar(p)}

let amigo = {nome: 'Enzo',
sexo: 'M',
peso: 65.2,
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
if(amigo.sexo == 'M'){
    amigo.sexo = 'Masculino'
    console.log(`Meu amigo ${amigo.nome}, pesa ${amigo.peso}, e é do sexo ${amigo.sexo}`)
}
else{
    amigo.sexo = 'Feminino'
    console.log(`Meu amigo ${amigo.nome}, pesa ${amigo.peso}, e é do sexo ${amigo.sexo}`)
}
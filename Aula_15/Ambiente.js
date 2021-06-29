let num = [5,8,2,9,3]


//num.sort()  // Ordena os valores no Array (do menor para o maior)
//num.push(1) // Acrescenta mais um valor no final do Array


console.log(num)

for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('----------------------------------------------')

//JEITO MAIS SIMPLIFICADO
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)

}

console.log('----------------------------------------------')

let pos = num.indexOf(8) // Indica qual posição está o valor // Se o resultado for "-1" significa que não existe tal valor

console.log(`O valor 8 está na posição ${pos}`)


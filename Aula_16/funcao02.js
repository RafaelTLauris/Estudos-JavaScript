function soma(n1, n2){
    return n1 + n2
}

console.log(soma(2, 3))

// NaN -

function soma2(n1, n2){
    return n1 + n2
}

console.log(soma2(2))

// resolvendo o NaN      --     Deixando já pré-definido que os parâmetros receberão 0.

function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(soma(2))
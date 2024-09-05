function calculaSequencia(x) {
    if(x == 0) return 0
    if(x == 1) return 1
    return fibonacci(x - 1) + fibonacci(x - 2)
}
function pertenceSequencia(n, posicao = 0) {
    let number = calculaSequencia(posicao)
    if(number === n){
        return console.log(`O número ${n} faz parte da sequência de Fibonacci.`)
    }else if(number > n){
        return console.log(`O número ${n} não faz parte da sequência de Fibonacci.`)
    }else{
        return pertenceSequencia(n, posicao + 1)
    }
}

const entrada = 8
const entrada1 = 18
pertenceSequencia(entrada)
pertenceSequencia(entrada1)
/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de 
juros e tempo de aplicação. A primeira função retornará o montante da aplicação 
financeira sob o regime de juros simples e a segunda retornará o valor da 
aplicação sob o regime de juros compostos.
*/

/*
JUROS SIMPLES!!

Calculo: M = P * (1 + r * n)
Onde:
M é o montante final
P é o capital inicial
r é a taxa de juros (expressa como decimal, por exemplo, 5% = 0,05)
n é o número de períodos de tempo

Calculo matematico:
M = 10.000 * (1 + 0,05 * 3)
M = 10.000 * (1 + 0,15)
M = 10.000 * 1,15
M = 11.500

Passando isso como código em Js, dentro de uma função...
*/

function jurosSimples (capitalInicial, adicao, taxaDeJuros, periodoDeTempo){
    let resul1 = taxaDeJuros * periodoDeTempo
    let resul2 = resul1 + adicao
    let resulFinal = capitalInicial * resul2
    return resulFinal
}

let resultado1 = jurosSimples(10000, 1, 0.05, 3)
let resutadoFormatado1 = parseFloat(resultado1).toLocaleString('pt-BR')
console.log(resutadoFormatado1)

/*
JUROS COMPOSTOS!!

Utilizando o mesmo exemplo, só que dessa vez usando juros compostos

Calculo: M = P * (1 + r)^n
O símbolo de "^" é utilizado para representar a operação de exponenciação ou 
potenciação, indicando que um número deve ser elevado a uma potência específica. 
Assim, neste exemplo, (1 + r)^n significa que (1 + r) será multiplicado por si 
mesmo "3" vezes

Calculo matematico:
M = 10.000 * (1 + 0,05)^3
M = 10.000 * (1,05)^3
M = 10.000 * 1,157625
M = 11.576,25

Passando isso como código em Js, dentro de uma função...
*/

function jurosCompostos (capitalInicial, adicao, taxaDeJuros, periodoDeTempo){
    let resul1 = adicao + taxaDeJuros
    let resul2 = Math.pow(resul1, periodoDeTempo)
    let resulFinal = resul2 * capitalInicial
    return resulFinal
}

let resultado2 = jurosCompostos(10000, 1, 0.05, 3).toFixed(5)
const resultadoFormatado2 = parseFloat(resultado2).toLocaleString('pt-BR')
console.log(resultadoFormatado2)
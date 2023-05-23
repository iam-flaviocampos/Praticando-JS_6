# Praticando-JS_6
Calculo com juro simples e juros compostos.

Dentro do código está descrito como anotação, o exercicio que foi pedido. Logo em baixo,
os códigos que usei para resolve-lo! Fique a vontade para entrar em contato comigo para
dar sugestões e dicas!
Este e todos os outros exercícios foram tirados do curso "Web Moderno Completo com
JavaScript 2022 + Projetos" na Udemy.

Começando com o cálculo de juros simples, eu criei uma função chamada "jurosSimples" que recebe quatro parâmetros: "capitalInicial", "adicao", "taxaDeJuros" e "periodoDeTempo". Esses parâmetros representam, respectivamente, o capital inicial, o valor adicionado, a taxa de juros (expressa como um decimal) e o período de tempo.

Dentro da função, eu realizo os cálculos necessários para calcular o montante final usando a fórmula dos juros simples. Primeiro, eu multiplico a taxa de juros pelo período de tempo e armazeno o resultado na variável "resul1". Em seguida, adiciono o valor "adicao" a "resul1" e guardo o resultado na variável "resul2". Por fim, multiplico o "capitalInicial" por "resul2" para obter o montante final, que é armazenado na variável "resulFinal". Essa variável é retornada pela função.

Após a definição da função, eu chamo a função "jurosSimples" passando os valores 10000, 1, 0.05 e 3 como argumentos. O resultado retornado pela função é armazenado na variável "resultado1". Em seguida, eu formato esse resultado utilizando o método parseFloat().toLocaleString('pt-BR'), para formatá-lo como uma string no formato monetário brasileiro. Por fim, exibo o resultado formatado no console.

Agora, passando para o cálculo de juros compostos, eu criei uma nova função chamada "jurosCompostos" que também recebe quatro parâmetros: "capitalInicial", "adicao", "taxaDeJuros" e "periodoDeTempo".

Dentro da função, eu realizo os cálculos necessários para calcular o montante final usando a fórmula dos juros compostos. Primeiro, somo o valor "adicao" à taxa de juros e armazeno o resultado na variável "resul1". Em seguida, utilizo a função Math.pow() para elevar "resul1" à potência de "periodoDeTempo" e guardo o resultado na variável "resul2". Por fim, multiplico "resul2" pelo "capitalInicial" para obter o montante final, que é armazenado na variável "resulFinal". Essa variável é retornada pela função.

Após a definição da função, eu chamo a função "jurosCompostos" passando os valores 10000, 1, 0.05 e 3 como argumentos. O resultado retornado pela função é armazenado na variável "resultado2". Em seguida, eu utilizo o método toFixed(5) para limitar o resultado a 5 casas decimais após a vírgula. Em seguida, formato o resultado como uma string no formato monetário brasileiro utilizando o método parseFloat().toLocaleString('pt-BR'). Por fim, exibo o resultado formatado no console.

Dessa forma, o código calcula o montante final tanto para juros simples como para juros compostos, e exibe os resultados no console.

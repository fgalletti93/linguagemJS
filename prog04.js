let accessGranted;
let age = 14;

/*if (age >= 18) {
    accessGranted = true;
} else
    accessGranted = false;*/

// o operador ? permite que criemos expressões com condições embutidas, sem a necessidade da estrutura condição completa do if

accessGranted = (age >= 18) ? true : false;
console.log(accessGranted)

//é comum combinar várias estruturas if para testarmos diversas possibilidades de um só vez. 
//ESTRUTURA CONDICIONAL ENCADEADA
let score = 89,
    presence = .35;

if (score >= 60) {
    if (presence >= 0.75)
        console.log("aprovado");
    else
        console.log("reprovado por frequência");
}
else
    console.log("reprovado");


//DECLARAÇÃO SWITCH
//permite o teste de vários valores de variáveis ou expressões
let a = 5,
    b = 3,
    operator = '+';

switch (operator) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log('invalid operator')
}


//DECLARAÇÃO DE REPETIÇÃO
// repetir a execução de determinado conjunto de instruções. Com while, o bloco será executado se e enquanto a condição for verdadeira

let i = 0;
while (i < 3) {
    console.log('counting');
    i++
}
console.log('fim');


let j;
for (j = 0; j < 5; j++) {
    if (j % 2 == 0)
        console.log(j)
}

let f;
for (f = 10; f > 0; f--) {
    if (f % 2 == 0)
        console.log(f)
}
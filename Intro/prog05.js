function message(name) {
    console.log(`Olá ${name}!`);
}

message('Janette');

let result;
function sum(a, b) {
    result = (a + b)
    return (a + b);
}

console.log(1, result);
console.log(2, sum(3, 7));
console.log(3, result);


function multiply() {
    return arguments[0] * arguments[1];
}
console.log(4, multiply(1, 3));


// sempre manter em mente o escopo do variavel e a ordem de execução

let firstName = 'Josival'
function newMessage(firstName) {
    console.log('Olá ' + firstName)
}
newMessage(firstName)
newMessage()
newMessage('Ana')

//expressão de função: uma função pode ser considerada uma expressão e, assim, ser atribuída a uma variável ou usada como parâmetros de outras funções

let soma = function (a, b) { // ← função atribuida a um variavel
    return a + b;
}

let soma2 = soma;

console.log(soma(3, 4));
console.log(soma2(3, 4));

//

let somar = function (a, b) { // ← função atribuida a um variavel
    return a + b;
}

let subtrai = function (a, b) { // ← função atribuida a um variavel
    return a - b;
}

let multiplicar = function (a, b) { // ← função atribuida a um variavel
    return a * b;
}

let dividir = function (a, b) { // ← função atribuida a um variavel
    return a / b;
}

function executa(fn, a, b) { // ← funçã virar um parametro dentro de outra função
    return fn(a, b)
}

let resultado = executa(multiplicar, 15, 5)
console.log(resultado)

//expressão de função nomeada: para que possa usar o nome dela outras vezes em outros pontos

//arrow functions: uma função seta é apenas uma forma simplificada de declaraçõ de funções que retornam valores

let soma = (a,b) => a+b; // ← igual escrever, let soma = function (a, b) {return a + b;}
// vale para quando tem parametro e valor de retorno


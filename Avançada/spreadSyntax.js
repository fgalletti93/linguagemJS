
let obj1 = { nome: 'Jose Couves', idade: 25 };
let obj2 = obj1;
let clone1 = { ...obj1 };
obj1.nome = 'Maria Souza';
console.log(clone1);
console.log(obj2);


let mat = { matricula: 1234, curso: 'Algebra' };
let aluno = { ...obj1, ...mat };
console.log(aluno);


function soma() {
    let valores = [...arguments];
    return valores.reduce(
        function (total, i) {
            return total += i;
        }
    );
}
console.log(soma(1, 2, 3, 4));

let nomes = ['Jose', 'Couve'];
let [prenome, sobrenome] = nomes;
console.log(sobrenome)
console.log(prenome)

let nomeCompleto = 'Francesca Galletti'
let pessoa = {};
[pessoa.prenome, pessoa.sobrenome] = nomeCompleto.split(' ')
console.log(pessoa)

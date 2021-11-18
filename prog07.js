/*
Objetos são estruturas similares aos vetores. No entanto, ao invés dos valores serem associados a uma posição no conjunto, eles são identificados por meio de um nome
*/

// A declaração de um objeto é feita por uma ´literal´ de objeto (uma sequência de caracteres com os dados do objeto)

/*
"LITERAL" é um valor que você escreve literalmente no seu script, pode ser atribuindo a uma variável, ou passando com argumento de uma função, ou até escrever solto no seu script, sem atribuir ou setar nada, o que importa é que se escreve exatamente o que será o valor (claro que tendo certas situações como "escapes" e outros detalhes).
*/

let user = {
    name: 'Jess',
    age: 18,
    sex: 'male'
};
if ('age' in user) {
    console.log(true)
}
console.log(user.sex);


let music = new Object;
console.log(music);

music.name = 'Junkhead';
music.artist = 'Alice in Chains';

//podemos acrescentar propriedades a objetos vazios, ou que já tenham outras propriedades

music.genre = 'Rock'
music.album = 'Dirt'
console.log(music)

//clonagem de objeto
let topHit = {};
for (let chave in music) {
    topHit[chave] = music[chave];
}

topHit.name = 'Idle Worship';
topHit.artist = 'Paramore';
topHit.album = '';

console.log(topHit)

//CRIAR uma função que retorna um objeto:
function createNewUser(name, age, sex, description) {
    return {
        name: name,
        age: age,
        sex: sex,
        description: description,
        ofAge: function () {
            return this.age >= 18;
        }
    };
}

// FUNÇÃO CONSTRUTORA
function Client(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.ofAge = function() {
        return this.age >= 18;
    }
}


let cat = createNewUser('Reginald', 5, 'male', 'cat, not human');
let otherCat = createNewUser('Estrela', 6, 'female', 'also a cat');

console.log(cat);
console.log(cat.ofAge());
console.log(otherCat)
console.log(otherCat.ofAge());


//CLASSES
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    maiorIdade() {
        return this.idade >= 18
    }
}

let joao = new Usuario('Joao', 37)
console.log(joao)
console.log(joao.maiorIdade())

//JAVASCRIPT É ORIENTADO A OBJETOS, NÃO CLASSES
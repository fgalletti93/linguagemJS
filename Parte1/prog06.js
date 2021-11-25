let fruit = ['apple', 'banana', 'organge'];
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])

fruit[2] = 'pear' //substition
console.log(fruit)

fruit[3] = 'lemon' //addition
console.log(fruit)

fruit[fruit.length] = 'blueberry'; //addition without place number
console.log(fruit)

fruit[7] = 'pineapple' //não há controle interno para que o acréscimo de novos elementos seja feito de forma organizada
console.log(fruit)
// [ 'apple', 'banana', 'pear', 'lemon', <1 empty item>, 'pineapple' ]

fruit.length = 2;
console.log(fruit)


//Vetores vazios/ empy array
// quando precisamos apenas declarar um vetor, ainda sem acrescentarmos valores a eles, podemos usar uma dessas duas formas
let frutas = ['laranja', 'maça', 'banana', 'limão'];

let comp = function(a,b) {
    if (a>b) return -1;
    else if (a<b) return 1;
    else return 0; 
};

frutas.sort(comp)
console.log(frutas)

frutas.pop()
console.log(frutas)

frutas.push('mertilho')
console.log(frutas)

frutas.shift()
console.log(frutas)

frutas.unshift('maça')
console.log(frutas)

console.log(frutas.join(', '))


let array = ['Frankie', 28, false, [1, 2, 3]]
console.log(array)


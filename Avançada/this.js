// hoisting (içamento)


let a = 1;
const b = 2;
var c = 3;
this.d = 4;

let pessoa = {
    nome: 'Marcos',
    fn: function() {
        console.log(this);
    },
};

pessoa.fn();



function Person(n) {
    this.name = n;
    this.fnc = function () {
        console.log(this)
    }; 
};

let person = new Person('Fran');
person.fnc();



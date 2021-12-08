let form = {
    x: 10,
    y: 15
};

/*let rectangle = {
    width: 100,
    height: 50
};*/
//rectangle.__proto__ = form;

let rectangle = Object.create(form);
rectangle.width = 100;
rectangle.height = 50;

form.color = 'blue';

console.log(form);
console.log(rectangle);
console.log(rectangle.color)

/**************************/

function Forma(x, y) {
    this.x = x;
    this.y = y;
};

Forma.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
};

function Cor(c) {
    this.cor = c;
};

function Retanglo(x, y, l, a, n) {
    Forma.call(this, x, y);
    Cor.call(this, n)
    this.largura = l;
    this.altura = a;
};

Retanglo.prototype = Object.create(Forma.prototype);
Retanglo.prototype.constructor = Retanglo;

let f1 = new Forma(30, 40);
let r1 = new Retanglo(10, 15, 28, 90, 'Yellow');


f1.move(15, 15);
r1.move(13, 14);
console.log(f1)
console.log(r1)



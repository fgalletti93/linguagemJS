let v;
v = 'JavaScript';
console.log(1, v, typeof v);

v = 31;
console.log(2, v, typeof v);

v = 25904325760394n
console.log(3, v, typeof v)
//BigInt usado em algumas operações especiais, como as de criptografia. Nem todosos navegadores oferecem suporte

let nome1 = "Joana" // => Forma mais simples
let nome2 = 'Joana' // => Forma para combinar HTML e JS
let image = '<img src="foto.gif" />'


let nome3 = `Joana` // => Forma de template string
let image2 = 
    `<p>
        <img src="foto.gif" />
    <p>`;

let message = `Ola, ${v}`
console.log(4, message);


let a = 3, b = 4;
console.log(
    `A soma de ${a} mais ${b} é igual a ${a+b}`
);

v = null;
console.log(5, v, typeof v)

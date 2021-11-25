let n = +"12";
console.log(1, n, typeof n);

n = 12 + "";
console.log(2, n, typeof n);

let a = 3;
console.log(3, a-- * 2, a ); //pre e pos increment/decremento

//concatenação de string, junção de duas strings em uma nova
let name = 'Jose';
let lastName = 'Pereira';
let fullName = name + ' ' + lastName;
console.log(4, fullName)

//coerção: os resultados de uma expressão em quer números estão entre aspas (strings) serão diferentes de acordo com a combinação de operandos e operadores
// atenção na ordem de precedência

let g = "5" + 2; // 52 <= lembrando que o resultado será uma string
let x = 5 + "2" + 2; // 522 <= 
let y = +(5 + "2") + 2; // 54 <= vira 52 e continua como string dentro das parenteses, vira numero com o simbolo + e soma com 2

//comparação de strings: considera a ordem das letras no sistema Unicode. valor binário. 
//quando usamos tipos diferentes, será feita uma coerção antes da comparação 


let firstName = "Cherokee Bill";
if (firstName != " ") {
    console.log(`Seu nome é ${firstName}`)
} else {
    console.log('Seu nome não foi definido')
}

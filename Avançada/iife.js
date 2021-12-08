+(function (nome) {
    console.log(`Ola, ${nome}`)
})('Ana');

let $ = (function () {
    let contadores = [];

    function Contador(i) {
        if (contadores[i] === undefined) {
            contadores[i] = 0;
        };
        this.incrementa = function () {
            contadores[i]++;
            return this
        };
        this.decrementa = function () {
            contadores[i]--;
            return this
        };
        this.valor = function () {
            return contadores[i];
        }
    }

    return function (i) {
        return new Contador(i);

    }
})();

let j = $(3);
j.incrementa().incrementa().incrementa().incrementa();
console.log(1, j.valor());
j.incrementa();
console.log(1, j.valor());

$(0).decrementa();
console.log(2, $(0).valor());




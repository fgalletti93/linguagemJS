
    function criaContador() {
        let n = 0;
        function altera(v) {
           n+=v 
        };
        return {
            incrementa: function () {
                altera(1);
            },
            decrementa: function () {
                altera(-1);
            },
            valor: function () {
                return n;
            },
        };
    }

    let contrador1 = criaContador();
    contrador1.incrementa();
    contrador1.incrementa();
    contrador1.incrementa();
    contrador1.incrementa();
    conta.innerHTML = contrador1.valor()


    function digaOla(idioma) {
        return function (nome) {
            switch (idioma) {
                case 'es': closure.innerHTML = `Hola ${nome}`
                    break;
                case 'en': closure.innerHTML = `Hello ${nome}`
                    break;
                default: closure.innerHTML = `Ola ${nome}`
                    break;
            }
        }
    }

    let ola = digaOla('en');
    ola('Jackie Chan')


onload = () => {
    let numero = 10;
    fnMetade(numero).then(
        (resp) => console.log(`A metade de ${numero} é ${resp}`),
        (erro) => console.log(erro)
    );


    function fnMetade(n) {

        return new Promise(function (resolve, reject) {
            if (n % 2 == 0) resolve(n / 2);
            else reject('O numero não é par')
        })
    }


    // carregamento de dados JSON 
    /*function carga(n) {
        fetch('https://reqres.in/api/users/' + n)
            .then((resp) => resp.json())
            .then((obj) => fetch(obj.data.avatar))
            .then(resp => resp.blob())
            .then(b => {
                imagem.src = URL.createObjectURL(b)
            })
            .catch((e) => console.log(e));
    }

    function carregaImagem(avatar) {
        fetch(avatar)
            .then(resp => resp.blob())
            .then(b => {imagem.src = URL.createObjectURL(b) })
            .catch((e) => console.log(e));
    }


    output.innerHTML = `
        <p>
            <input id="idUser" type="number" value="1" />
            <button id="btn">Ver avatar</button>
        </p>
        <p>
            <img id="imagem" />
        </p>
    `

    btn.onclick = () => carga(idUser.value);
    carga(1); */


    //ASYNC AWAIT

    let number = 25;
    let fn = fnMetade(number);
    fn.then(
        (resp) => console.log(`A metade de ${number} é ${resp}`),
        (erro) => console.log(erro)
    );

    async function fnMetade(n) {
        if (n % 2 == 0) return n / 2;
        else throw new Error('Número não é par');
    }


    async function carga(n) {
        let resp1 = await fetch('https://reqres.in/api/users/' + n);
        let user = await resp1.json();
        let resp2 = await fetch(user.data.avatar);
        let avatar = await resp2.blob();
        console.log(avatar)
        imagem.src = URL.createObjectURL(avatar);
    }

    output.innerHTML = `
    <p>
        <input id="idUser" type="number" value="1" />
        <button id="btn">Ver avatar</button>
    </p>
    <p>
        <img id="imagem" />
    </p>
    `

    btn.onclick = () => {
        carga(idUser.value)
        .then((resp) => console.log(resp))
        .catch((erro) => console.log(erro))
    };



}

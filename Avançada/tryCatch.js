onload = () => {
    let a;
    try {
        a = x;
    } catch (error) {
        output.innerHTML = `The value of A could not be calculated, ${error.message}`
    }


    let strUsuario = '{"nome": "Marclkfjda, senha": "1234"}';
    try {
        usuario = JSON.parse(strUsuario);
        result.innerHTML = `Nome: ${usuario.nome}<br/>` + `Senha: ${usuario.senha}`;
    } catch (error) {
        result.innerHTML = 'Não foi possível carregar o usuário'
    }

    let j = 30;
    try {
        if (j < 0)
            throw new Error("The value of the variable cannot be negative");
        throwEr.innerHTML = `j = ${j}`;

    } catch (error) {
        throwEr.innerHTML = error.message;
    } finally {
        console.log('fim')
    }
}
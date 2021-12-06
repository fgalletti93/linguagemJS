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


    let obj1 = { nome: 'Jose Couves', idade: 25 };
    let obj2 = obj1;
    let clone1 = { ...obj1 };
    obj1.nome = 'Maria Souza';
    console.log(clone1);
    console.log(obj2);


    let mat = { matricula: 1234, curso: 'Algebra' };
    let aluno = { ...obj1, ...mat };
    console.log(aluno);


    function soma() {
        let valores = [...arguments];
        return valores.reduce(
            function (total, i) {
                return total += i;
            }
        );
    }
    console.log(soma(1, 2, 3, 4));

    let nomes = ['Jose', 'Couve'];
    let [prenome, sobrenome] = nomes;
    console.log(sobrenome)
    console.log(prenome)

    let nomeCompleto = 'Francesca Galletti'
    let pessoa = {};
    [pessoa.prenome, pessoa.sobrenome] = nomeCompleto.split(' ')
    console.log(pessoa)


    //getters & setters

    let employee = {
        firstName: 'Jackson',
        lastName: 'Michael',
        salary: 17000,
        birthdate: new Date(1993, 3, 3), 
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        get age() {
            let year = (new Date()).getFullYear();
            return year - this.birthdate.getFullYear()
        },
        set fullName(nc) {
            [this.firstName, this.lastName] = nc.split(' ');
        },
        set newSalary(v) {
            if (v < this.salary)
                throw new Error('New salary cannot be of lesser value than before')
            else
                this.salary = v
        },
    };

    employee.fullName = 'Jessica Rabbit';
    console.log(employee);
    console.log(employee.age);
    
    employee.newSalary = 3200;

    
}

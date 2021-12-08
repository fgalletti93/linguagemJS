
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

employee.newSalary = 32000;


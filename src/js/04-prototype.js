var Person = function(_name, _age) {
    var name = _name.toString();
    var age = parseInt(_age);

    this.setName = function (_name) {
        name = _name.toString();
    }
    this.setAge = function (_age) {
        age = parseInt(_age);
    }

    this.getName = function() {
        return name;
    }

    this.getAge = function() {
        return age;
    }
}

var matheus = new Person('Matheus', 18);
var joao = new Person('Joao', 21);

// matheus.initialize(); // Uncaught error
// joao.initialize(); // Uncaught error

matheus.initialize = function() {
    console.log('My name is ' + this.getName());
};

matheus.initialize(); // My name is Matheus
// joao.initialize(); // Uncaught error

Person.prototype.initialize = function() {
    console.log('Init function for ' + this.getName());
};

var marcos = new Person('Marcos', 19);
var lucas = new Person('Lucas', 20);

matheus.initialize(); // My name is Matheus
marcos.initialize(); // Init functino for Marcos
lucas.initialize(); // Init function for Lucas
joao.initialize(); // Init function for Joao

// __proto__ e usado quando quer se definir um comportamento padrão para uma função da classe do objeto, mas não se sabe a classe.
lucas.__proto__.initialize = function () {
    console.log(this.getName() + ' has ' + this.getAge() + ' years old');
};

matheus.initialize(); // My name is Matheus
marcos.initialize(); // Marcos has 19 years old
lucas.initialize(); // Lucas has 20 years old
joao.initialize(); // Joao has 21 years old
var Person = function(name) {
    var hello = Person.hello + ' ' + name + '!';

    this.sayHello = function() {
        console.log(hello);
    };
}

Person.hello = 'Hello';

Person.sayHello = function() {
    console.log(Person.hello + ' World!');
}

var marcos = new Person('Marcos');

marcos.sayHello(); // Hello Marcos!
Person.sayHello(); // Hello World!
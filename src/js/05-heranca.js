function Person(_name) {
    var name = _name;

    this.setName = function(_name) {
        name = _name;
    };

    this.getName = function() {
        return name;
    };
}

Person.prototype.sayHello = function() {
    console.log('Hello World from ' + this.getName());
};

function Employee(_name, _salary) {
    var salary = _salary;

    Person.call(this, _name);

    this.setSalary = function(_salary) {
        salary = _salary;
    };

    this.getSalary = function() {
        return salary;
    };
}
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.work = function() {
    console.log('Work was done by ' + this.getName());
};

var marcos = new Employee('Marcos', 1300);

console.log(marcos);

console.log(marcos.getName());
console.log(marcos.getSalary());

marcos.sayHello();
marcos.work();

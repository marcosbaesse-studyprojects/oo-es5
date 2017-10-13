var Person1 = function() {
    var name;
    var age;

    this.setName = function (_name) {
        name = _name;
    }
    this.setAge = function (_age) {
        age = _age;
    }

    this.getName = function() {
        return name;
    }

    this.getAge = function() {
        return age;
    }

}

var Person2 = function(_name, _age) {
    var name = _name;
    var age = _age;

    this.setName = function (_name) {
        name = _name;
    }
    this.setAge = function (_age) {
        age = _age;
    }

    this.getName = function() {
        return name;
    }

    this.getAge = function() {
        return age;
    }
}

// para Person1, os atributos só podem ser definidos após a instânciação do objeto
var matheus = new Person1();
matheus.setName('Matheus');
matheus.setAge(18);

// Para Person2, os atributos podem ser deifinidos já na instânciação do objeto
var marcos = new Person2('Marcos', 19);

console.log(matheus.getName());
console.log(marcos.getName());
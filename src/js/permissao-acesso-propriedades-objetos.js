function Person1() {
    var name;
}

function Person2() {
    var name;

    this.setName = function(name) {
        this.name = name;
    };

    this.getName = function() {
        return this.name;
    }
}

console.log('Person1');
var marcos = new Person1();
marcos.name = 'Marcos';
console.log(marcos.name); // Marcos

console.log('\n\nPerson2');
marcos = new Person2();
marcos.setName('Marcos');
console.log(marcos.getName()); // Marcos
console.log(marcos.name); // undefined
marcos.name = 'Baésse'; // 
console.log(marcos.getName()); // Marcos
console.log(marcos.name); // Baésse

// Foi definido a propriedade name em dois scopos diferentes.
// Um no escopo da Clojure: marcos.setName('Marcos');
// Outro no escopo do Objeto: marcos.name = 'Baésse'

// basicamente o this.name representa uma propriedade pública
// já o var name representa uma propriedade privada — que só pode ser acessada dentro do escopo da função
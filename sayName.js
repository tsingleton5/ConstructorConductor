//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }


//Now create three instances of Person with data you make up

  //code here
  var john = new Person('John', 34);
  var sally = new Person('Sally', 89);
  var natalie = new Person('Natalie', 25);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function () {
    alert(this.name);
  }

// john.sayName(); will alert John
// sally.sayName(); will alert Sally
// natalie.sayName(); will alert Natalie


// console.log(Person);
//if you console.log Person you will see it with
//name and age, but not with the prototype sayName

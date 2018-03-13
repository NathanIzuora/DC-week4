function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  
  Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
  };

  var person1 = new Person("Sonny","Sonny@gmail.com", "8543459922");
  var person2 = new Person("Jordan","Jordan@gmail.com", "9783459342");

  var sonnygreet = console.log(person1.greet(person2))
  var jordangreet = console.log(person2.greet(person1))
  console.log(jordangreet);
  console.log(person1);

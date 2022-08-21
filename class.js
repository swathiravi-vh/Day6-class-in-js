//write a class person hold all the details

function Person() {
    this.fname ="";
    this.lname ="";
}

let person1 = new Person();
person1.fname = "swathi";
person1.lname = "ravi";

console.log(person1.fname+ "   " +  person1.lname);

let person2 = new Person();
person2.fname = "Hemil";
person2.lname = "vishnu";

console.log(person2.fname +"  "+ person2.lname); 

//write a class to calculate uber price.

class UberPrice {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;
    }
  }
  
  let uber = new UberPrice(10);
  console.log(uber.getPrice());


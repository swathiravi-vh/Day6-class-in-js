//day 6
//3.Write a “person” class to hold all the details.

class Person{
constructor(name,age,email){
    this.name=name
    this.age=age
    this.email=email

}
getname() {
    return "name: "+ this.name+","+
    " age: "+this.age+","+
     " email: "+ this.email    
}
}
var a=new Person("stive",23,"gg12@gmail.com")
console.log(a.getname())
//4.write a class to calculate the uber price.

/*5.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
*/
class movie
{
    

    constructor(title,studio,rating)
    { 
       
        this.title=title
        this.studio=studio
        if(rating){
         this.rating=rating
        }
        else{
            this.rating="PG"
        }

        

    }
    getpg(arr)
    {
          var res=arr.filter((ele)=>ele.rating==="PG")
          return res
          }
    }
   



var a=new movie("predator","7screen studio","PG13")
var a1=new movie("Casino" ,"Eon ","PG13")
var a2=new movie("rock","7screen studio","PG")
var a3=new movie("caster","7screen studio")

var arr=[a,a1,a2,a3]
console.log(a.getpg(arr))
var a4=new movie("Casino Royale","Eon Productions","PG13")
console.log(a4)



//......................................
//b)uml digram
class Circle{
    constructor(radious,color)
    {   this.pi=3.142
        this.radious=radious
        this.color=color

    }
    
    
    
    getarea()
    {
        //var pi=3.1421
        

         return this.pi*this.radious*this.radious

    }
    getcirme()
    {
        //var pi=3.1421
           return 2*this.pi*this.radious
    }

}
var c=new Circle(1.0,"red")
console.log(c.getarea())
console.log(c.getcirme())
//////////////////////////////////////////////////////
//4.write a class to calculate the uber price.
class uber{
    constructor(dis,waitingcharge){
        this.onekm=14.7
        this.waiting=10
        this.dis=dis
        this.waitingcharge=waitingcharge
        //

    }
    getcal(){
        if(this.dis==0){
            return "zero charge"
        }
        else if(this.dis!=0 && this.waitingcharge>=0){
            return  (this.dis*this.onekm)+(this.waiting*this.waitingcharge)
        }
        
        else{
           return "trip cancel"
        }
    }

}
var u=new uber(2,10)
var u1=new uber(0,0)
var v2=new uber()
console.log(u.getcal())
console.log(u1.getcal())
console.log(v2.getcal())

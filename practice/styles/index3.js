const Todos = [

  {
    id : 1,
    Value : "meeting with boss",
    Done : true,
  },
  {
    id : 2,
    Value : "play football",
    Done : true,
  },
  {
    id : 1,
    Value : "do my assignment",
    Done : false,
  },
]


const me = Todos.filter((todo) => {
  return todo.Done === true
}).map((todo) =>{
  return todo.Value;
})

console.log(me)


//constructor
/* function Human(FirstName, LastName, dob){
  this.FirstName = FirstName,
  this.LastName = LastName,
  this.dob = new Date(dob),
  this.FullYear = () =>{
    return this.dob.getFullYear()
  }
} */


//instantiate

/* const person = new Human ( "Solomon" , "Adache", "1998")
const person1 = new Human ( "Faith", "Adache", "3-6-2000")

console.log(person1.FirstName , person.LastName)
console.log(person1.dob)

console.log(person1.FullYear())*/


class Parson {

  constructor(firstName, lastName, dob){
    this.firstName = firstName,
    this.lastName = lastName,
    this.dob = new Date(dob)

  }

  fullYear() {
    return this.dob.getFullYear()
  }
  birthYear() {
    return `${this.firstName} ${this.lastName}`
  }
}

const per1 = new Parson("Solomon" , "Adache", "3-5-2000")

console.log(per1.fullYear())
console.log(per1.birthYear())


























var num = 5;

var num_2 = 8;

var value = num + num_2

console.log(value)


var num_1;

num_1 = 25;

let fig = (<number>num_1);

console.log(fig)


enum myVal {first, second, third, forth}

console.log(`${myVal.first} :  ${myVal.forth}`)


const addNum = (num_1 : number | string, num_2 : number | string) => {
  let result;
  if( typeof num_1 === "number" && typeof num_2 === "number"){
      result = num_1 + num_2
  }
  else {
     result = num_1.toString() + num_2.toString()
  }

  return result ;
  
  
}



const NumResult = addNum(20 , 70) 

console.log(NumResult)

const AlphaResult = addNum("Solomon ", " Adache")

console.log(AlphaResult)


var number1 = 8;
let number2 = 500;
const result = addNum(number1, number2)

console.log(result)



const ADMIN = 0

const Person  = {
  firstName : "Solomon",
  lastName : "Adache",
  age : 20,
  Hobbies : ["singing", "dancing" , "sleeping"],
  role : ADMIN

}


const per = Person.firstName

Person.Hobbies.forEach(function (hobby) {
  console.log(hobby)
  
});

console.log(Person.role)

const numba = 35;


function addVal(no_1 : number, no_2 : number){
  return no_1 + no_2
}


function Pint_R( re_val : number){
  return `Result : ${re_val}`
}

const f_Result = Pint_R(addVal(30,20))
console.log(f_Result)


function GenerateError (message:string , code: number){

  throw{message : message ,  errorCode : code}
}


GenerateError("An error occurred", 500);
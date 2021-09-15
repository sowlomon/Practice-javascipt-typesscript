"use strict";
var num = 5;
var num_2 = 8;
var value = num + num_2;
console.log(value);
var num_1;
num_1 = 25;
let fig = num_1;
console.log(fig);
var myVal;
(function (myVal) {
    myVal[myVal["first"] = 0] = "first";
    myVal[myVal["second"] = 1] = "second";
    myVal[myVal["third"] = 2] = "third";
    myVal[myVal["forth"] = 3] = "forth";
})(myVal || (myVal = {}));
console.log(`${myVal.first} :  ${myVal.forth}`);
const addNum = (num_1, num_2) => {
    let result;
    if (typeof num_1 === "number" && typeof num_2 === "number") {
        result = num_1 + num_2;
    }
    else {
        result = num_1.toString() + num_2.toString();
    }
    return result;
};
const NumResult = addNum(20, 70);
console.log(NumResult);
const AlphaResult = addNum("Solomon ", " Adache");
console.log(AlphaResult);
var number1 = 8;
let number2 = 500;
const result = addNum(number1, number2);
console.log(result);
const ADMIN = 0;
const Person = {
    firstName: "Solomon",
    lastName: "Adache",
    age: 20,
    Hobbies: ["singing", "dancing", "sleeping"],
    role: ADMIN
};
const per = Person.firstName;
Person.Hobbies.forEach(function (hobby) {
    console.log(hobby);
});
console.log(Person.role);
const numba = 35;
function addVal(no_1, no_2) {
    return no_1 + no_2;
}
function Pint_R(re_val) {
    return `Result : ${re_val}`;
}
const f_Result = Pint_R(addVal(30, 20));
console.log(f_Result);
function GenerateError(message, code) {
    throw { message: message, errorCode: code };
}
GenerateError("An error occurred", 500);

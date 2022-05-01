// let firstName = prompt("enter your first name: ")
//     checkAnswer(firstName)
// let lastName = prompt("Enter your last name: ")
//     checkAnswer(lastName)
// let age = prompt("How old are you?" )
//     checkAnswer(age)
// let gender= prompt("what is your gender?")
//     checkAnswer(gender)
// alert(`fist name: ${firstName} , last name: ${lastName} , age: ${+age} , gender: ${gender}`)
//
//
// function checkAnswer(any){
//     if (any ===null || any==="") {
//         alert(`You did not fill the box.`);
//       }
//
// }
//
// document.getElementById("firstname").innerHTML = firstName
// document.getElementById("lastname").innerHTML = lastName
// document.getElementById("age").innerHTML = age
// document.getElementById("gender").innerHTML = gender

// ====================================Comperison=======================================================

// function addLo

let userString = prompt("Enter the string", "agency")

addLo(userString)

function addLo(any) {
  if (any === null || any === "") {
    alert('You did not write a string')

  } else if (any.startsWith('Lo')) {
    alert(any)
  } else if (any.startsWith('lo')) {
    alert(any)
  } else {
    alert('Lo' + userString)
  }

}

// function sum

let userNumber1 = prompt("Enter number1:", 8)
let userNumber2 = prompt("Enter number2:", 7)


tripleSum(userNumber1, userNumber2);

function tripleSum(userNumber1, userNumber2) {

  if (userNumber1 === userNumber2) {
    alert((+userNumber1 + +userNumber2) * 3)

  } else {
    alert(+userNumber1 + +userNumber2)
  }


}


// function sub
let userNumber3 = prompt("Enter number3 for subscration", 60)
subResult(userNumber3)

function subResult(any) {
  if (+userNumber3 > 19) {
    alert((+userNumber3 - 19) * 3)
  } else {
    alert(+userNumber3 - 19)
  }
}

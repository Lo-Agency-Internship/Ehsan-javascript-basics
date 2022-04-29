let firstName = prompt("enter your first name: ")
    checkAnswer(firstName)
let lastName = prompt("Enter your last name: ")
    checkAnswer(lastName)
let age = prompt("How old are you?" )
    checkAnswer(age)
let gender= prompt("what is your gender?")
    checkAnswer(gender)
alert(`fist name: ${firstName} , last name: ${lastName} , age: ${+age} , gender: ${gender}`)


function checkAnswer(any){
    if (any ===null || any==="") {
        alert(`You did not fill the box.`);
      }
    
}

document.getElementById("firstname").innerHTML = firstName
document.getElementById("lastname").innerHTML = lastName
document.getElementById("age").innerHTML = age
document.getElementById("gender").innerHTML = gender

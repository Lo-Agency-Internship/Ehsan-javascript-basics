let userNumber1= prompt("Enter the first number",10)
let userNumber2= prompt("Enter the second number",100)
// ============Function calling========================
rand(userNumber1,userNumber2)


//==========================Function generate random between two numbers===================

function rand(userNumber1,userNumber2)
{
    if (+userNumber1 < +userNumber2)
      {
        alert(Math.floor(Math.random() * +userNumber2) + +userNumber1)
      }
  else if (+userNumber1 > +userNumber2)
      {
        alert(Math.floor(Math.random() * +userNumber1) + +userNumber2)
      }
  else if (+userNumber1 === +userNumber2)
      {
        alert(+userNumber1)
      }
}
// =========================binary to decimal section==============

let binary = prompt("Enter a binary number","1001010")
//===========function convert binary to decimal==========
bin2dec(binary)

function bin2dec(any)
  {
    alert(parseInt(binary, 2));
  }

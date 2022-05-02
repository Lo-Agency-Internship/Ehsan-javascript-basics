const booleanTrue = true

function logicalGateBuffer(booleanTrue) {
  return booleanTrue
}


function logicalGateNot() {
  return !booleanTrue
}

function logicalGateAnd(a, b) {
  if (a====true && b === true) {
    return true
  } else {
    return false
  }
}

function logicalgateNand(a, b) {
  if (a===true && b === true) {
    return false
  } else {
    return true
  }
}

function logicalgateOr(a, b) {
  if (a === true || b === true) {
    return true
  } else {
    return false
  }
}

function logicalgateNor(a, b) {
  if (a === false || b === false) {
    return true
  } else {
    return false
  }
}

function logicalgateXor(a, b) {
  if (a === false && b === false) {
    return false
  } else if (a === true && b === true) {
    return false
  } else {
    return true
  }

}

function logicalgateXnor(a, b)
if (a === false && b === false) {
  return true
} else if (a === true && b === true) {
  return true
} else {
  return false
}
}



//====================================== Start of Loops task====================================================
let userInput = prompt('Enter the number factorial')
function factorialI(n){
  let pt =1
for (let i = n; i > 0; i--) {
  pt = pt * i
}
return pt

}
alert(factorialI(userInput))

// factorial recursive
function factorialR(n) {

    // if number => 0
    if (n === 0) {
        return 1;
    }

    // if number => positive
    else {
        return n * factorialR(n - 1);
    }
    
}


// if number => non-negative
if (userInput > 0) {
    let result = factorialR(userInput);
  alert(`The factorial recurive of is ${result}`);
}
//====================================== End of Loops task====================================================

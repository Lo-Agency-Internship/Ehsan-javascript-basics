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
    
    
    //====================================== End of Loops task====================================================
    
    
    //====================================== Start of Function task====================================================
    
    function randomNumbers(start, end) {
  return Math.floor(Math.random() * (start - end + 1)) + end;
}

array = [];
for (let index = 0; index < 5; index++) {
  array.push(randomNumbers(15, 50));
}
console.log(array);

function customFilter(arr, f) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    if (f(arr[index])) {
      result.push(arr[index]);
    }
  }

  return result;
}

console.log(
  customFilter(array, function (x) {
    return x > 30;
  })
);

// =========test customFilter=======

const arrs = [1, 2, 3];
const newArr1 = customFilter(arrs, function (x) {
  return x > 2;
});
console.log("==== test customFilter ====");
console.log(newArr1); // [3]

function costumMap(arr, f) {
  const resultMap = [];
  for (let index = 0; index < arr.length; index++) {
    resultMap.push(f(arr[index]));
  }
  return resultMap;
}
let qwe = costumMap(array, function (x) {
  return x * 2;
});
console.log(qwe);

//=======test customMap===

const arr2 = [1, 2, 3];
const newArr2 = costumMap(arr2, function (x) {
  return x * 2;
});
console.log(" ==== test customMap ====");
console.log(newArr2); // [2, 4, 6]

function costumReduce(arr, f) {
  let accumalator = 0;
  for (let index = 0; index < arr.length; index++) {
    accumalator += f(arr[index]);
  }
  return accumalator;
}
console.log(
  costumReduce(array, function (x) {
    return x;
  })
);

// ====test customRedus===========
const arr3 = [1, 2, 3];
const result1 = costumReduce(arr3, function (x) {
  return x;
});
console.log("====test customReduse ====");
console.log(result1); // 6

    
    //====================================== End of Loops task====================================================
  alert(`The factorial recurive of is ${result}`);
}
//====================================== End of Loops task====================================================

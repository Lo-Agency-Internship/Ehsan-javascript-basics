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

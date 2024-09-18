const maxOfTwoNumber = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}
console.log('Exercise 1 result', maxOfTwoNumber(3, 9))

const isAdult = (age) => {
  if (age >= 18) {
    return 'Adult'
  } else {
    return 'Below'
  }
}
console.log('Exercise 2 result', isAdult(21))

const isCharAVowel = (letter) => {
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'o' ||
    letter === 'u' ||
    letter === 'i'
  ) {
    return true
  } else {
    return false
  }
}
console.log('Exercise 3 Result:', isCharAVowel('a'))

const generateEmail = (name, dom) => {
  return name + '@' + dom
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

const greetUser = (name, day) => {
  return 'Good' + day + ' ' + name
}
console.log('Exercise 5 Result:', greetUser('Sam', 'morning'))

const maxOfThree = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return a
    } else if (b > c) {
      return b
    } else {
      return c
    }
  } else if (b > c) {
    return b
  } else {
    return c
  }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))

const calculateTip = (num1, num2) => {
  return Math.round((num1 + num2) * (14 / 100))
}
console.log('Exercise 7 Result:', calculateTip(50, 20))

const convertTemperature = (tem, x) => {
  if (x.toUpperCase() === 'C') {
    return tem * 2.8 + ' F'
  } else if (x.toUpperCase() === 'F') {
    return tem + ' ' + x.toUpperCase()
  } else {
    return 'Error Temp unit'
  }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'c'))

const basicCalculator = (x, y, func) => {
  if (func.toLowerCase() === 'add') {
    return x + y
  } else if (func.toLowerCase() === 'subtract') {
    return x - y
  } else if (func.toLowerCase() === 'multiply') {
    return x * y
  } else if (func.toLowerCase() === 'divide') {
    return x / y
  } else {
    return 'please chose opration'
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))

const calculateGrade = (x) => {
  if (x >= 90) {
    return 'A'
  } else if (x >= 80) {
    return 'B'
  } else if (x >= 70) {
    return 'C'
  } else if (x >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}
console.log('Exercise 10 Result:', calculateGrade(85))

const createUsername = (fname, lname) => {
  let fn1 = fname.length
  let ln1 = lname.length
  let fn2 = fname.substring(0, 3)
  let ln2 = lname.substring(0, 3)
  let sum = fn1 + ln1
  return fn2 + ln2 + sum
}
console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'))

const numArgs = (...arguments) => {
  return arguments.length
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4))

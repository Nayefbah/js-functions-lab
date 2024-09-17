const maxOfTwoNumber = (x, y) => {
  if (x >= y) {
    return x
  } else {
    return y
  }
}
console.log('Exercise 1 result', maxOfTwoNumber(3, 9))

function isAdult(age) {
  if (age >= 18) {
    return (isAdult = 'Adult')
  } else {
    return (isAdult = 'Below')
  }
}
console.log('Exercise 2 result', isAdult(21))

function isCharAVowel(letter) {
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'o' ||
    letter === 'u' ||
    letter === 'i'
  ) {
    return (isCharAVowel = true)
  } else {
    return (isCharAVowel = false)
  }
}
console.log('Exercise 3 Result:', isCharAVowel('a'))

function generateEmail(name, dom) {
  return (generateEmail = name + '@' + dom)
}
console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

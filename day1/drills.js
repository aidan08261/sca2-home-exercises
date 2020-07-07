const assert = require("assert")

// Feel free to look things up online!

const reverse = function(str) {
  // TODO - write a function which reverses the string
  let tempChar
  let newStr = ""
  for(i=0; i<str.length; i++){
    tempChar = str.substr(str.length-1-i,1)
    newStr = newStr + tempChar
  }
  return newStr
}


const factorial = function(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! = 5 * 4 * 3 * 2 * 1 = 120 
  let temp = 1
  if(num>0){
    for(i=1; i<= num; i++){
      temp = i*temp} 
      return temp
  } else if (num == 0) {
      return "1"
  } else {
      return "-1"
    }
}

const announceDate = function() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  let currentDate = new Date()
  let day = currentDate.getDate()
  let month = currentDate.getMonth() + 1
  let year = currentDate.getFullYear()
  let hour = currentDate.getHours()
  let min = currentDate.getMinutes()
  //If statements to set month
  if(month == 1){
    month = "January"
  } else if (month == 2) {
    month = "February"
  } else if (month == 3) {
    month = "March"
  } else if (month == 4) {
    month = "April"
  } else if (month == 5) {
    month = "May"
  } else if (month == 6) {
    month = "June"
  } else if (month == 7) {
    month = "July"
  } else if (month == 8) {
    month = "August"
  } else if (month == 9) {
    month = "September"
  } else if (month == 10) {
    month = "October"
  } else if (month == 11) {
    month = "November"
  } else {
    month = "December"
  }
  //If statements to set suffix of day
  let suffix 
  if(day == 1){
    suffix = "st"
  } else if (day == 2) {
    suffix = "nd"
  } else {
    suffix = "th"
  }
  let date = "Today's date is " + month + " " + day + suffix + ", " + year + ". " + "It is " + hour + ":" + min 
  return date
}

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let tempChar
  let newStr = ""
  for(i=0; i<num; i++){
    tempChar = str.substr(str.length-num+i,1)
    newStr = newStr + tempChar
  }
  for(i=0; i<str.length-num;i++){
    newStr = newStr + str.substr(i,1)
  }
  return newStr
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  let arr = []
  let arrStr = ""
  let count = -1
  for(i=0; i<str.length; i++){
    if(str.substr(i,1) != " "){
      arrStr = arrStr + str.substr(i,1)
    } else {
      count++
      arr[count] = arrStr
      arrStr = ""
    }
    if(i == str.length - 1){
      count++
      arr[count] = arrStr
    }
  }
  return arr
}

const uniqueOnes = function(ary) {
 // TODO - write a function which returns the inputted array without duplicate elements
  let temp
  let newAry = []
  for(i=0; i<ary.length; i++) {
    temp = ary[i]
    let count = 0
    for(j=0; j<ary.length; j++){
      if(temp == ary[j]){
        count++
      } 
    }
    if (count == 1){
      newAry.push(ary[i])
    }
  }
  return newAry
}


const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]] 
  let tempArr = []
  if(arr1.length != arr2.length){
    return "-1"
  } else {
     for(i=0; i<arr1.length; i++){
       tempArr[i] = [arr1[i], arr2[i]]
     }
     return tempArr

  }
}

const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = []
  let arr2 = []
  for(i=0; i<arr.length; i++){
    for(j=0; j<2; j++){
      if(arr[i][j] % 2 == 1){
        arr1.push(arr[i][j])
      } else {
        arr2.push(arr[i][j])
      }
    }
    }
  return [arr1,arr2]
}

// Write tests here:



assert(1 < 2)
assert(1 + 2 == 3)
assert([2, 3][0] === 2)
// assert(reverse("3df") === "fd3")
console.log(announceDate())
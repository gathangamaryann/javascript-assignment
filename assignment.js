let num = 0
for (num = 0; num <= 100; num++) {
  if (num % 3 == 0 && num % 5 != 0) {
    console.log("fuzz")
  } else if (num % 5 == 0 && num % 3 != 0) {
    console.log("Buzz")
  } else if (num % 3 == 0 && num % 5 == 0) {
    console.log("FuzzBUzz")
  }
}

// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
let number = 0
let sum = 0
for (number = 0; number <= 1000; number++) {
  if (number % 3 == 0 || number % 5 == 0) {
    sum += number
  }
}
console.log(sum)
// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output 0 is even"
//                 "1 is odd"
//                 "2 is even"

let numbers = 0
let digit = 0
for (numbers = 0; numbers <= 20; numbers++) {
  if (numbers % 2 == 0) {
    console.log(`${numbers} is even`)
  } else {
    console.log(`${numbers} is odd`)
  }
}
// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

let list = [-2, 4, -5, 6, 0]
let sorted = list.sort()
let size = sorted.length
console.log(sorted[size - 1])

// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

let num1 = 10
let num2 = 40
if (num1 > num2) {
  console.log(`${num1} is the largest among the two numbers ${num1} ${num2}`)
} else {
  console.log(
    `${num2} is the largest among the two numbers ${num1} and ${num2}`
  )
}

// 6.Write a JavaScript program to find leap years from 2000 to 2022

let start = 2000
let stop = 2022

for (num = start; num <= stop; num++) {
  if (num % 4 == 0) {
    {
      console.log(`${num} is a leap year`)
    }
  }
} 
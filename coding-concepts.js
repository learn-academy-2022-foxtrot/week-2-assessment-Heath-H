// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Foxtrot 2022"
// console.log(cohort.split(""))

// a) Your answer: This will split the string of "Foxtrot 2022" into individual letters as strings "F" "o" "x" "t" so on and so forth 
// b) Verify and explain: I was correct
// the output was: ['F', 'o', 'x', 't','r', 'o', 't', ' ', '2', '0', '2', '2'] because .split creates an array of strings 

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
 
//console.log(greeter("LEARN Student"))

// // a) Your answer: 'Hello, LEARN Student' because LEARN Student 
// // b) Verify and explain: undefined.. this is because name is not defined and the function doesnt have a return line, but this isn't very clear to me

// // --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// // a) Your answer: this will return an array with each element in the array multiplied by two [8, 10, 12, 14, 16] 
// // b) Verify and explain: my answer was correct, this is because we used the .map to iterate over each element. The word <number> is the type of value that is in the array. <number *2> is saying that we are multiplying each value by 2.

// // --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// // a) Your answer: [11, 13, 15]
// // b) Verify and explain: I was correct. similarly to question 3, we are using .filter, another method, that will filter through the array of onlyOdds. Then, only the number in the array that DO have a remainder when divided by 2 are displayed. ( if you wanted the even numbers you would use % 2 === 0)

// // --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
//  }
// console.log(myCodingSkills.languages[0])

// // a) Your answer: "Javascript"
// // b) Verify and explain: I was correct. the above console.log is calling for the first index in the array given for the key <languages>

// // --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name,
//     this.cohort = "Foxtrot",
//     this.year = 2022
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// // a) Your answer: student: 'George', cohort: 'Foxtrot', year: 2022

// // b) Verify and explain: I was correct! const learnStudent = new Learn("George") was creating a new constructor, 

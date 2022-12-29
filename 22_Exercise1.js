// Exercise 1: Guess the number
// Prize Amount: Rs 500 Amazon voucher
// let number = 0 // Generate random number here
// let chances = 0
// Keep asking for the number until the correct number is guessed
// Increment the chances variable

// Eventually after the game is over, display the (100 - Number of chances) and the actual number 

let number = Math.floor((Math.random()*100)+1);//genrate num between 1 to 100
let chances = 0;//initial value of chances taken to guess a number 
let guess;//variable to store the number to be input from user to be guessed

console.log("This is a guessing game and you have to enter a number and if it matches eith the number genrated by computer the you win.....\n")

guess = prompt("Enter a number between 1 and 100")
++chances//to incr the number of chances taken 

do{
    guess = Number.parseInt(guess)

    if(guess > number){
        console.log("Number entered is greter")
        guess = prompt("Enter again!!")
        guess = Number.parseInt(guess)
        ++chances //to incr the number of chances taken 
        continue
    }else if(guess < number){
        console.log("Number entered is smaller")
        guess = prompt("Enter again!!")
        guess = Number.parseInt(guess)
        ++chances //to incr the number of chances taken 
        continue
    }
}while (guess != number) {//break the loop if number entered is equal to the number genrated

    let score = 100 - chances //to store the score of your game
    console.log("\n Congratulation \n The number genrated was", number +" and your guesses it right \n Your final score is", score)
    
}
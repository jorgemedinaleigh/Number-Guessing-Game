// Number Guessing Game

const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guess;
let running = true;

while(running)
{
    guess = window.prompt("Guess a number between " + minNumber + " and " + maxNumber);
    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert("Please enter a valid number");
    }
    else if(guess < minNumber || guess > maxNumber)
    {
        window.alert("Please enter a number between " + minNumber + " and " + maxNumber);
    }
    else
    {
        attempts++;
        if(guess < answer)
        {
            window.alert("Too low! Try again");
        }
        else if(guess > answer)
        {
            window.alert("Too high! Try again");
        }
        else
        {
            window.alert("Correct! The answer is: " + answer + "\n It took  " + attempts + " attempts");
            running = false;
        }
    }
}

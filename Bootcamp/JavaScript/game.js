//Create secret number
var secretNumber = 4;

// Ask user for guess
var guess = 0;
var correct = false;
// Check guess

while (!correct)
{
    guess = Number(prompt("Guess a number"));

    if (guess === secretNumber)
    {
        alert("You got it right!");
        correct = true;
    }
    else if (guess > secretNumber)
    {
        alert("Your guess is too high!");
    }
    else
    {
        alert("Your guess is too low!");
    }
}
# Rock Paper Scissors

## Overview
We set out to build a simple implementation of rock paper scissors that was tested.
We will be using vanilla JavaScript and Jasmine.

### Stretch Goals
* Take user input via a front end.
* Convert the game into rock paper scissors lizard spock by expanding the logic

## Plans & Pseudocode
### Backend game logic
```
answers = ['rock', 'paper', 'scissors']
c = 0
u = 0
// indexes: 0 loses to 1, 1 loses to 2, 2 loses to 0

// randomise a computer choice
computerChoice() {
  c = random number within range of array - 1
}

userChoice(input) {
  check if input is within array
  u = input
}

// main game logic
find index in the array for u
find index in the array for c

// compare u and c and return the winner
if u == 2 && c == 0 return c
else if u == 0 && c == 2 return u
else if u > c return u
else return c
```
backend game logic
rock paper scissors MVP first

array of possible answer
['rock', 'paper', 'scissors']

indexes:
0 loses to 1, 1 loses to 2, 2 loses to 0

U r 0
C p 1

randomiseC(){
  C = random number within range of array - 1
}

handleUser(input) {
  check if within array
  set U to input
}

find index for user
find index for comp
compare
  if U == 2 && C == 0 return C
  if U == 0 && C == 2 return U
  if U > C return U
  else return C

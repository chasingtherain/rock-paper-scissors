# rock-paper-scissors
a classic game built from scratch using vanilla JS

Objective:
- player will choose rock, scissors or paper (case-insensitive)
- computer will randomly choose rock, scissors or paper (case-insensitive)
- program will compare player's and cpu's choice
- if: 
    scissor against rock
    rock against scissors
    paper against rock
- if:
    input is same, draw

Pseudocode
- request user to input a choice
- once user has selected, game starts and program can compare the selection
- once compared, inform user of the outcome

function list:
- playerSelection()
    - validation
    - apply regex to user's input
==> returns player's selection

- computerPlay()
==> computer will select, rock, paper or scissors

- gameStart(playerSelection, computerSelection)
==> returns game outcome


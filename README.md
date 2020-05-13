<img src="https://github.com/CrugBarat/my_files/blob/master/quizza/quizza1.png" width="300"> <img src="https://github.com/CrugBarat/my_files/blob/master/quizza/quizza2.png" width="300"> <img src="https://github.com/CrugBarat/my_files/blob/master/quizza/quizza6.jpeg" width="300"> <img src="https://github.com/CrugBarat/my_files/blob/master/quizza/quizza3.png" width="300"> <img src="https://github.com/CrugBarat/my_files/blob/master/quizza/quizza4.png" width="300"> <img src="https://github.com/CrugBarat/my_files/blob/master/quizza/quizza5.png" width="300">


# QuizzA

A full stack Trivia browser board game built using:

**Programming Language**: JavaScript

**Front-end Web Framework**: Vue

**Back-end Web Framework**: Express

**Db**: MongoDb

**API Client**: Insomnia

**Markup/Styling**: HTML5/CSS3

The app has 3 board game types with each allowing a maximum of 4 players. The board games are turn based with each player having the ability to roll a dice, move position on the board and answer a question. The questions are sourced from a HTTP REST API. The app also boasts a Hall of Fame page, which stores a player's name with their high score. This data is stored locally, using MongoDb. The app was completed in a week.

This was a group exercise, completed with two other devs. It was tasked to us by CodeClan, Glasgow where we studied towards a PDA Level 8 in Professional Software Development. The exercise brief can be found below.

---

# Game Rules

**Classic**

Based on the Trivial Pursuit board game, each player must correctly answer questions from the following six categories:

- Sport
- Science & Nature
- Geography
- Animals
- General Knowledge
- History

Each category has a corresponding colour and each tile on the board, prompts a question from a specific category. When a player answers a question correctly, they collect a token from that question's category. First player to collect all 6 wins.

**Seek**

A novel game designed by us.

Each player must race to the end of the board, while avoiding point deduction traps. Players can collect points by answering questions correctly or landing on bonus tiles, which allocate points. The game is concluded when a player lands on the finishing line and answers a question correctly. The winner has the most points regardless of their board position. Watch out for the cheeky drill sarge.

**Mental**

A novel game designed by us.

A tongue-in-cheek board game, which uses Glasgow slang as prompts. As the name suggests, the game is mental with random point allocations and deductions, random board positioning and lots of flashing tiles. The game is un-winnable.... well not quite as a player can be declared a winner by collecting 666 points.

(WARNING: The 'Mental' game board contains flashing/strobing tiles, which may adversely effect photosensitive users. Please do not play this game type if you feel you are at risk.)

---

# Brief

Create a browser game based on an existing card or dice game. Model and test the game logic and then display it in the browser for a user to interact with.

Write your own MVP with some specific goals to be achieved based on the game you choose to model.

You might use persistence to keep track of the state of the game or track scores/wins. Other extended features will depend on the game you choose.

**MVP**

A user should be able to:

- Roll the dice
- Select category based on the result of the dice
- Answer question (questions provided by REST API)
- If answered correctly, rolls again, otherwise ends turn
- When answered correctly, category is pinned under the user’s name
- Win game by collecting 4 correctly answered categories

**Extensions**

- User should be able to add name
- Dynamic game board
- Navigate board in both directions
- Styling and animation.

**Advanced Extensions**

- Create additional boards
- Add Hall of Fame feature

---

# Setup

- Download/Clone files

- If required, download and install [Node](https://nodejs.org/en/)

- In each of the client and server directories, in Terminal:

```
npm install
```

- In client directory, in Terminal:

```
npm run serve
```

- In server directory, in Terminal:

```
npm run server:dev
```

- Click the link below to open project in browser

[LocalHost](http://localhost:8080/): http://localhost:8080/

---

# Acknowledgements

Group project built with:

- [Francesco](https://github.com/Ciccillo73)
- [Crug](https://github.com/CrugBarat)

API used:

- [Open Trivia](https://opentdb.com/api_config.php)

Assets:

- [iconsdb](https://www.iconsdb.com/)
- [Flaticon](https://www.flaticon.com/free-icons/drill)
- [Clipart Email](https://www.clipart.email/)

Special Thanks:

- Anthony Bothe for proving the starting code for our 3D dice
- Chris Courses for the tutorial on HTML5/Canvas
- Andreas Nylin for his awesome pure CSS skull
- Jess from CodeClan Cohort E24 - your roll maps helped us understand game board logic

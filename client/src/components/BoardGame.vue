<template lang="html">
  <div>
    <div class="page-container">
      <div class="playing-area">

        <div class="questions-container">
          <questions v-if="selectedCategory.length > 0 && randomQuestion" :randomQuestion="randomQuestion"></questions>
        </div>
<!-- at the click of the mouse it create the click event, and gives back the id of the cell we clicked -->
        <div class="game-board-container">
          <div class="game-board">
            <div id="a1" class="tile" v-on:click="checkActive($event)"></div>
            <div id="a2" class="tile" v-on:click="checkActive($event)"></div>
            <div id="a3" class="tile" v-on:click="checkActive($event)"></div>
            <div id="a4" class="tile" v-on:click="checkActive($event)"></div>
            <div id="a5" class="tile" v-on:click="checkActive($event)"></div>
            <div id="a6" class="tile" v-on:click="checkActive($event)"></div>
            <div id="a7" class="tile" v-on:click="checkActive($event)"></div>
            <div id="b1" class="tile" v-on:click="checkActive($event)"></div>
            <div id="b4" class="tile" v-on:click="checkActive($event)"></div>
            <div id="b7" class="tile" v-on:click="checkActive($event)"></div>
            <div id="c1" class="tile" v-on:click="checkActive($event)"></div>
            <div id="c4" class="tile" v-on:click="checkActive($event)"></div>
            <div id="c7" class="tile" v-on:click="checkActive($event)"></div>
            <div id="d1" class="tile" v-on:click="checkActive($event)"></div>
            <div id="d2" class="tile" v-on:click="checkActive($event)"></div>
            <div id="d3" class="tile" v-on:click="checkActive($event)"></div>
            <div id="d4" class="tile" v-on:click="checkActive($event)"></div>
            <div id="d5" class="tile" v-on:click="checkActive($event)"></div>
            <div id="d6" class="tile" v-on:click="checkActive($event)"></div>
            <div id="d7" class="tile" v-on:click="checkActive($event)"></div>
            <div id="e1" class="tile" v-on:click="checkActive($event)"></div>
            <div id="e4" class="tile" v-on:click="checkActive($event)"></div>
            <div id="e7" class="tile" v-on:click="checkActive($event)"></div>
            <div id="f1" class="tile" v-on:click="checkActive($event)"></div>
            <div id="f4" class="tile" v-on:click="checkActive($event)"></div>
            <div id="f7" class="tile" v-on:click="checkActive($event)"></div>
            <div id="g1" class="tile" v-on:click="checkActive($event)"></div>
            <div id="g2" class="tile" v-on:click="checkActive($event)"></div>
            <div id="g3" class="tile" v-on:click="checkActive($event)"></div>
            <div id="g4" class="tile" v-on:click="checkActive($event)"></div>
            <div id="g5" class="tile" v-on:click="checkActive($event)"></div>
            <div id="g6" class="tile" v-on:click="checkActive($event)"></div>
            <div id="g7" class="tile" v-on:click="checkActive($event)"></div>

            <div class="board-content-top-left">
              <div class="dice-container">
                <input class="dice" type="image" :src="getDiceFace()" v-on:click="randomDice()" v-if="players[0].name && players[1].name"></input>
              </div>
            </div>

            <div class="board-content-top-right"></div>
            <div class="board-content-bottom-right"></div>
            <div class="board-content-bottom-left"></div>

            <div id="player1" class="player1" v-if="players[0].name"></div>
            <div id="player2" class="player2" v-if="players[1].name"></div>
            <div id="player3" class="player3" v-if="players[2].name"></div>
            <div id="player4" class="player4" v-if="players[3].name"></div>

          </div>
        </div>

        <div class="players-container">
          <p>PLAYERS</p>
          <div class="player1-deets">
            <p v-if="players[0].name && players[1].name">Player 1: {{players[0].name}}</p>
            <p v-if="players[0].name && players[1].name">Collected: {{players[0].score}}</p>
          </div>
          <div class="player2-deets">
            <p v-if="players[0].name && players[1].name">Player 2: {{players[1].name}}</p>
            <p v-if="players[0].name && players[1].name">Collected: {{players[1].score}}</p>
          </div>
          <div class="player3-deets">
            <p v-if="players[2].name">Player 3: {{players[2].name}}</p>
            <p v-if="players[2].name">Collected: {{players[2].score}}</p>
          </div>
          <div class="player4-deets">
            <p v-if="players[3].name">Player 4: {{players[1].name}}</p>
            <p v-if="players[3].name">Collected: {{players[1].score}}</p>
          </div>
        </div>

        <div class="player-prompt">
          <p v-if="players[0].name && players[1].name">YOUR TURN - {{activePlayer(players).name.toUpperCase()}}</p>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

  import {eventBus} from '../main.js';
  import Questions from "@/components/Questions.vue";
  import {TileObjects} from '@/config/TileObjects.js';

  export default {
    name: 'board-game',
    props:['newPlayers'],
    data() {
      return {
        dice: [1,2,3,4,5,6],
        diceResult: 6,
        moveOptions: null,
        categories: {
            sport: [],
            geography: [],
            general_knowledge: [],
            history: [],
            animal: [],
            science_and_nature: []
        },
        gamePlayers:[],
        players: [
            {
              alias: "player1",
              name: '',
              score: [],
              winStreak: 0,
              active: false,
              currentPosition: 'd4'
            },
            {
              alias: "player2",
              name: '',
              score: [],
              winStreak: 0,
              active: false,
              currentPosition: 'd4'
            },
            {
              alias: "player3",
              name: '',
              score: [],
              winStreak: 0,
              active: false,
              currentPosition: 'd4'
            },
            {
              alias: "player4",
              name: '',
              score: [],
              winStreak: 0,
              active: false,
              currentPosition: 'd4'
            }
        ],
        selectedCategory: [], //will be filled when the token will end up to a piece of the board
        answeredQuestions: [], //all the question showed will end up here to avoid duplicates
        randomQuestion: null, //when the dice will be throwed it will be filled by the event
        categoriesAndId: [
          ['sport', 21],
          ['geography', 22],
          ['general_knowledge', 9],
          ['history', 23],
          ['animal', 27],
          ['science_and_nature', 17]
        ]
      }
    },

    components: {
      "questions": Questions,

    },
    methods: {
      randomDice() {
        this.diceResult = this.dice[Math.floor(Math.random() * 6)];
        this.showMoveOptions();
        this.disableTheDice();

      },
      getDiceFace() {
        return require('@/assets/dice/' + this.diceResult + '.png');
      },
      // gives u the options where the player could move on the board
      getMoveOptions() {//dice is
        const res = 'roll' + this.diceResult; //roll3
        //trova lindex della posizione attuale del giocatore d4
        const indexOfActivePlayer = this.findIndexOfPlayer(this.activePlayer(this.gamePlayers))
        const index = TileObjects.map(x => x.id).indexOf(this.gamePlayers[indexOfActivePlayer].currentPosition);
        this.moveOptions = TileObjects[index][res]// takes all the possible future position for roll 3
        return this.moveOptions;
      },
      // shows the possible position from the array and gets them colored in red
      showMoveOptions() {
        for (let option of this.getMoveOptions()) {
          const moveOption = document.querySelector(`#${option}`);
          moveOption.style.color = 'red';
        }
      },
      //make the blocks black again
      resetMoveOptions() {
        for (let option of this.moveOptions) {
          const moveOption = document.querySelector(`#${option}`);
          moveOption.style.color = 'black';
        }
        this.moveOptions = null;
      },
      //brings the raw position for the css
      getNewRowPosition(event) {//click on d1
        const divID = event.currentTarget.id;//d1
        const index = TileObjects.map(x => x.id).indexOf(divID); //12
        return TileObjects[index]['row']; //4
      },
      //brings the column position for the css
      getNewColPosition(event) {//d1
        const divID = event.currentTarget.id;//d1
        const index = TileObjects.map(x => x.id).indexOf(divID);//12
        return TileObjects[index]['column'];//1
      },
      movePlayer(event) {
        const activePlayer = document.querySelector(`#${this.activePlayer(this.gamePlayers).alias}`);
        activePlayer.style.cssText = `grid-row-start: ${this.getNewRowPosition(event)};
                                      grid-column-start: ${this.getNewColPosition(event)};`//row 4 colomn 1
        const index = this.findIndexOfPlayer(this.activePlayer(this.gamePlayers))
        this.gamePlayers[index].currentPosition = event.currentTarget.id;//assign the position we clicked on the player d1
        //Needs to load the category of the grid
        this.selectGridCategory();
        this.resetMoveOptions();
        this.randomQuest();
      },
      selectGridCategory(){//Find index of the actual player position
        const indexOfActivePlayer = this.findIndexOfPlayer(this.activePlayer(this.gamePlayers))
        const index = TileObjects.map(x => x.id).indexOf(this.gamePlayers[indexOfActivePlayer].currentPosition);
        //Put in selected category the category of the grid
        const category = TileObjects[index].category
        this.selectedCategory = this.categories[category]
      },
      checkActive(event) { //event posizione pedina d4
        for (let option of this.getMoveOptions()) {
          //if the position is the same as the one where the token is
          if (option === event.currentTarget.id) {
            return this.movePlayer(event)
          }
        }
      },// Find the Dice class and disable the click event
      disableTheDice(){
        const dice = document.querySelector(".dice")
        dice.style.pointerEvents = 'none';
      },//Find the Dice class and re-enable the click event
      enableTheDice(){
        const dice = document.querySelector(".dice")
        dice.style.pointerEvents = 'auto';
      },
      filteredPlayers() {
        const playersWithName = this.players.filter((player) => {
          return player.name !== '' });
        this.gamePlayers = playersWithName;
      },
      updateNames(){
        this.players[0].name = this.newPlayers[0];
        this.players[1].name = this.newPlayers[1];
        this.players[2].name = this.newPlayers[2];
        this.players[3].name = this.newPlayers[3];
        this.filteredPlayers();
        this.gamePlayers[0].active = true;
      }
,
    //Create a random question from the selected Category
    //will be invoked when the token end up to a piece of the board
    getRandomQuestion(category){
      return category[Math.floor(Math.random() * category.length)]
    },
      randomQuest() {
        // this.loadRandomForSelected(this.categoriesAndId);
        const query = this.getRandomQuestion(this.selectedCategory);
        const options = query.incorrect_answers.map(answer => answer);
        options.push(query.correct_answer);
        if (!this.answeredQuestions.includes(query.question)) {
            this.randomQuestion = {
              options: options,
              question: query.question,
              correct_answer: query.correct_answer,
              category: query.category
            } //so we can push it to the player wins
          this.answeredQuestions.push(this.randomQuestion.question);
        } else if (this.answeredQuestions.length === 100) {
          this.loadAllCategories(this.categoriesAndId)
        } else {
            this.randomQuest();
        }
      },
      // fetch a category
      loadCategory(category, category_id) {
        const url = `https://opentdb.com/api.php?amount=50&category=${category_id}&type=multiple`;
        fetch(url).then(response => response.json())
        .then(data => this.categories[category] = data.results)
      },
      // fetches all the categories
      loadAllCategories(categoryArray) {
        categoryArray.map(element => this.loadCategory(element[0], element[1]));
      },
      //JUST FOR TESTING PURPOSE
      // loadRandomForSelected(categoryArray) {
      //   const index = Math.floor(Math.random() * 6);
      //   const catId = categoryArray[index][1];
      //   const url = `https://opentdb.com/api.php?amount=50&category=${catId}&type=multiple`;
      //   fetch(url).then(response => response.json())
      //   .then(data => this.selectedCategory = data.results)
      // },
      //find active player
      activePlayer(players) {
        const activePlayer = players.find(player => player.active === true);
        return activePlayer;
      },



      //add won categories
      addWonCategory(player, question, arrayOfplayers) {
        const index = this.findIndexOfPlayer(player);
        if (!arrayOfplayers[index].score.includes(question)) {
            arrayOfplayers[index].score.push(question);
        }
      },
      //find index of player
      findIndexOfPlayer(player) {
        const index = this.gamePlayers.indexOf(player);
        return index;
      },
      //find me the index of the active player, and change it's acrive to false,
      //and based on the lenght of the array add one to the player index or start from 0 and turn it to active true
      switchActivePlayer(player, players) {
        const index = this.findIndexOfPlayer(player);
        players[index].active = false;
        if (index < (players.length - 1)) {
            players[(index + 1)].active = true;
          } else {
              players[0].active = true
          }
      },// Check if the Player reaches the win target
      checkWinCondition(activePlayer){
        if(activePlayer.score.length === 6){
          return true  //The game finish here
        }
      }
      },
      mounted() {
        //JUST FOR TESTING
        // this.loadRandomForSelected(this.categoriesAndId);

        this.loadAllCategories(this.categoriesAndId);
        //put the players name in this.players, and then filters them
        this.updateNames();

        //Check if the clicked answer is right if yes should update the score
        eventBus.$on('selected-option', (option) => {
          const playerActive = this.activePlayer(this.gamePlayers);
          const question = this.randomQuestion;

          if (option === question.correct_answer) {
            alert("well done");
            this.addWonCategory(playerActive, question.category, this.gamePlayers);
            if(this.checkWinCondition(playerActive)){
              alert("You won")
              this.disableTheDice()
              this.randomQuestion = null
              } else {
            this.randomQuestion = null;
            alert("Throw the dice again"); //create a new question in either cases
              this.enableTheDice();}
          } else {
            alert("boooo");
            this.switchActivePlayer(playerActive, this.gamePlayers);
            this.randomQuestion = null;
            this.enableTheDice();
          }
        });

        //takes the name from the form

     }
   }
</script>

<style lang="css" scoped>
  .page-container {
    border-style: solid;
    display: block;
    text-align: center;
    margin-top: 70px;
    width: 100%;
  }

  .playing-area {
    border-style: solid;
    display: inline-block;
    width: 90%;
  }

  .questions-container {
    border-style: solid;
    border-color: red;
    float: left;
    width: 29%;
    height: 565px;
    margin-right: 0.5%;
  }

  .players-container {
    border-style: solid;
    border-color: red;
    float: left;
    width: 29%;
    height: 565px;
    margin-left: 0.55%;
  }

  .player-prompt {
    border-style: solid;
    float: left;
    height: 40px;
    width: 100%;
    text-align: center;
  }

  .game-board-container {
    width: 40%;
    float: left;
  }

  .game-board {
    border-style: solid;
    display: inline-grid;
    position: relative;
  }

  .tile {
    border-style: solid;
    box-sizing: border-box;
    width: 80px;
    height: 80px;
  }

  .tile:hover {
    cursor: pointer;
    color: blue;
  }

  /* RIGHT Y COL */
  #a7, #b7, #c7, #d7, #e7, #f7, #g7 {
    grid-column-start: 7;
  }

  /* BOTTOM X ROW */
  #g1, #g2, #g3, #g4, #g5, #g6, #g7 {
    grid-row-start: 7;
  }

  /* LEFT Y COL */
  #a1, #b1, #c1, #d1, #e1, #f1, #g1 {
    grid-column-start: 1;
  }

  #f1 {
    grid-row-start: 6;
  }

  #e1 {
    grid-row-start: 5;
  }

  #d1 {
    grid-row-start: 4;
  }

  #c1 {
    grid-row-start: 3;
  }

  #b1 {
    grid-row-start: 2;
  }
  /* LEFT Y COL END */

  /* CROSS SECTION X */
  #d1, #d2, #d3, #d4, #d5, #d6, #d7  {
    grid-row-start: 4;
  }

  #d4{
    grid-column-start: 4;
  }

  /* CROSS SECTION Y */
  #a4, #b4, #c4, #d4, #e4, #f4, #g4   {
    grid-column-start: 4;
  }

  .board-content-top-left {
    border-style: solid;
    width: 160px;
    height: 160px;
    z-index: 2;
    position: absolute;
    margin: 80px;
  }

  .board-content-top-right {
    border-style: solid;
    width: 160px;
    height: 160px;
    z-index: 2;
    position: absolute;
    margin: 80px;
    right: 0;
  }

  .board-content-bottom-right {
    border-style: solid;
    width: 160px;
    height: 160px;
    z-index: 2;
    position: absolute;
    margin: 80px;
    bottom: 0;
    right: 0;
  }

  .board-content-bottom-left {
    border-style: solid;
    width: 160px;
    height: 160px;
    z-index: 2;
    position: absolute;
    margin: 80px;
    bottom: 0;
  }

  .dice-container {
    margin-top: 40px;
  }

  .dice {
    width: 80px;
    height: 80px;
  }

  input:focus {
    outline: none;
  }

  .player1 {
    border-style: solid;
    border-radius: 50%;
    background-color: purple;
    width: 25px;
    height: 25px;
    margin: 5px;
    z-index: 2;
    position: absolute;
    grid-row-start: 4;
    grid-column-start: 4;
  }

  .player2 {
    border-style: solid;
    border-radius: 50%;
    background-color: blue;
    width: 25px;
    height: 25px;
    margin: 5px;
    margin-left: 40px;
    margin-top: 40px;
    z-index: 2;
    position: absolute;
    grid-row-start: 4;
    grid-column-start: 4;
  }

  .player3 {
    border-style: solid;
    border-radius: 50%;
    background-color: red;
    width: 25px;
    height: 25px;
    margin: 5px;
    margin-top: 40px;
    z-index: 2;
    position: absolute;
    grid-row-start: 4;
    grid-column-start: 4;
  }

  .player4 {
    border-style: solid;
    border-radius: 50%;
    background-color: orange;
    width: 25px;
    height: 25px;
    margin: 5px;
    margin-left: 40px;
    z-index: 2;
    position: absolute;
    grid-row-start: 4;
    grid-column-start: 4;
  }
</style>

<style>
  /* body{
    overflow: hidden;
  } */
</style>

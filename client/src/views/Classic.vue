<template lang="html">
    <div id="classic" class="page-container">
      <div class="game-board">
        <div id="a1" class="sport" v-on:click="checkActive($event)"></div>
        <div id="a2" class="geography" v-on:click="checkActive($event)"></div>
        <div id="a3" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="a4" class="history" v-on:click="checkActive($event)"></div>
        <div id="a5" class="animal" v-on:click="checkActive($event)"></div>
        <div id="a6" class="science" v-on:click="checkActive($event)"></div>
        <div id="a7" class="geography" v-on:click="checkActive($event)"></div>
        <div id="a8" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="a9" class="history" v-on:click="checkActive($event)"></div>
        <div id="a10" class="animal" v-on:click="checkActive($event)"></div>
        <div id="a11" class="science" v-on:click="checkActive($event)"></div>
        <div id="a12" class="geography" v-on:click="checkActive($event)"></div>
        <div id="a13" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="a14" class="history" v-on:click="checkActive($event)"></div>
        <div id="a15" class="animal" v-on:click="checkActive($event)"></div>
        <div id="a16" class="science" v-on:click="checkActive($event)"></div>
        <div id="a17" class="sport" v-on:click="checkActive($event)"></div>
        <div id="b1" class="animal" v-on:click="checkActive($event)"></div>
        <div id="b9" class="science" v-on:click="checkActive($event)"></div>
        <div id="b17" class="animal" v-on:click="checkActive($event)"></div>
        <div id="c1" class="history" v-on:click="checkActive($event)"></div>
        <div id="c9" class="animal" v-on:click="checkActive($event)"></div>
        <div id="c17" class="history" v-on:click="checkActive($event)"></div>
        <div id="d1" class="geography" v-on:click="checkActive($event)"></div>
        <div id="d9" class="geography" v-on:click="checkActive($event)"></div>
        <div id="d17" class="geography" v-on:click="checkActive($event)"></div>
        <div id="e1" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="e9" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="e17" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="f1" class="science" v-on:click="checkActive($event)"></div>
        <div id="f2" class="geography" v-on:click="checkActive($event)"></div>
        <div id="f3" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="f4" class="history" v-on:click="checkActive($event)"></div>
        <div id="f5" class="animal" v-on:click="checkActive($event)"></div>
        <div id="f6" class="science" v-on:click="checkActive($event)"></div>
        <div id="f7" class="geography" v-on:click="checkActive($event)"></div>
        <div id="f8" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="f9" class="history" v-on:click="checkActive($event)"></div>
        <div id="f10" class="animal" v-on:click="checkActive($event)"></div>
        <div id="f11" class="science" v-on:click="checkActive($event)"></div>
        <div id="f12" class="geography" v-on:click="checkActive($event)"></div>
        <div id="f13" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="f14" class="history" v-on:click="checkActive($event)"></div>
        <div id="f15" class="animal" v-on:click="checkActive($event)"></div>
        <div id="f16" class="science" v-on:click="checkActive($event)"></div>
        <div id="f17" class="geography" v-on:click="checkActive($event)"></div>
        <div id="g1" class="animal" v-on:click="checkActive($event)"></div>
        <div id="g9" class="animal" v-on:click="checkActive($event)"></div>
        <div id="g17" class="science" v-on:click="checkActive($event)"></div>
        <div id="h1" class="history" v-on:click="checkActive($event)"></div>
        <div id="h9" class="science" v-on:click="checkActive($event)"></div>
        <div id="h17" class="history" v-on:click="checkActive($event)"></div>
        <div id="i1" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="i9" class="geography" v-on:click="checkActive($event)"></div>
        <div id="i17" class="animal" v-on:click="checkActive($event)"></div>
        <div id="j1" class="geography" v-on:click="checkActive($event)"></div>
        <div id="j9" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="j17" class="geography" v-on:click="checkActive($event)"></div>
        <div id="k1" class="sport" v-on:click="checkActive($event)"></div>
        <div id="k2" class="geography" v-on:click="checkActive($event)"></div>
        <div id="k3" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="k4" class="history" v-on:click="checkActive($event)"></div>
        <div id="k5" class="animal" v-on:click="checkActive($event)"></div>
        <div id="k6" class="science" v-on:click="checkActive($event)"></div>
        <div id="k7" class="geography" v-on:click="checkActive($event)"></div>
        <div id="k8" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="k9" class="history" v-on:click="checkActive($event)"></div>
        <div id="k10" class="animal" v-on:click="checkActive($event)"></div>
        <div id="k11" class="science" v-on:click="checkActive($event)"></div>
        <div id="k12" class="geography" v-on:click="checkActive($event)"></div>
        <div id="k13" class="general-knowledge" v-on:click="checkActive($event)"></div>
        <div id="k14" class="history" v-on:click="checkActive($event)"></div>
        <div id="k15" class="animal" v-on:click="checkActive($event)"></div>
        <div id="k16" class="science" v-on:click="checkActive($event)"></div>
        <div id="k17" class="sport" v-on:click="checkActive($event)"></div>

        <div class="board-content-top-left">
          <div class="back-button-container">
            <router-link :to="{name: 'newgame'}"> <img class="back-button" :src="back" v-on:click=""> </router-link>
          </div>

          <div class="dice-container" v-on:click="togglefullScreen()">

            <div id="cube" v-on:click="rollDice">
              <div class="front" value="1">
                <span class="dot dot1"></span>
              </div>
              <div class="back" value="2">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>
              </div>
              <div class="right" value="3">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>
                <span class="dot dot3"></span>
              </div>
              <div class="left" value="4">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>
                <span class="dot dot3"></span>
                <span class="dot dot4"></span>
              </div>
              <div class="top" value="5">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>
                <span class="dot dot3"></span>
                <span class="dot dot4"></span>
                <span class="dot dot5"></span>
              </div>
              <div class="bottom" value="6">
                <span class="dot dot1"></span>
                <span class="dot dot2"></span>
                <span class="dot dot3"></span>
                <span class="dot dot4"></span>
                <span class="dot dot5"></span>
                <span class="dot dot6"></span>
              </div>
            </div>
          </div>
        </div>

      <div class="board-content-top-right">
        <div class="question">
          <questions v-if="selectedCategory.length > 0 && randomQuestion" :randomQuestion="randomQuestion"></questions>
        </div>
      </div>

      <div class="board-content-bottom-right">
        <div class="question-result">
            <div class="category-list">
              <div class="cl-left">
                <div class="spo"></div><p class="cat-name">Sports</p>
                <div class="sci"></div><p class="cat-name">Science & Nature</p>
                <div class="geo"></div><p class="cat-name">Geography</p>
              </div>
              <div class="cl-right">
              <div class="his"></div><p class="cat-name">History</p>
              <div class="gk"></div><p class="cat-name">General Knowledge</p>
              <div class="anim"></div><p class="cat-name">Animals</p>
              </div>
            </div>
            <div class="np-name">
              <p v-if="nextPlayer">{{nextPlayer.name.toUpperCase()}}  you're up!</p>
              <p>{{questionResult}}</p>
            </div>
          </div>
        </div>

      <div class="board-content-bottom-left">
        <div class="players-container">
          <div class="heading-container">
            <p class="heading">PLAYER CARD</p>
          </div>
          <div class="player1-container">
            <img class="token-ind" :src="players[0].token">
            <p class="player-txt" v-if="players[0].name && players[1].name"> {{players[0].name.toUpperCase()}}</p>
            <div class="score-container">
              <div v-for="score in players[0].score" v-bind:class="checkScore(score)"></div>
            </div>
          </div>
          <div class="player2-container">
            <img class="token-ind" :src="players[1].token">
            <p class="player-txt" v-if="players[0].name && players[1].name"> {{players[1].name.toUpperCase()}}</p>
            <div class="score-container">
              <div v-for="score in players[1].score" v-bind:class="checkScore(score)"></div>
            </div>
          </div>
          <div v-if="players[2].name" class="player3-container">
            <img class="token-ind" :src="players[2].token">
            <p class="player-txt"> {{players[2].name.toUpperCase()}}</p>
            <div class="score-container">
              <div v-for="score in players[2].score" v-bind:class="checkScore(score)"></div>
            </div>
          </div>
          <div v-if="players[3].name" class="player4-container">
            <img class="token-ind" :src="players[3].token">
            <p class="player-txt"> {{players[3].name.toUpperCase()}}</p>
            <div class="score-container">
              <div v-for="score in players[3].score" v-bind:class="checkScore(score)"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="player1" class="player1" v-if="players[0].name"> <img class="token" :src="players[0].token"> </div>
      <div id="player2" class="player2" v-if="players[1].name"> <img class="token" :src="players[1].token"></div>
      <div id="player3" class="player3" v-if="players[2].name"> <img class="token" :src="players[2].token"></div>
      <div id="player4" class="player4" v-if="players[3].name"> <img class="token" :src="players[3].token"></div>

    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import Questions from "@/components/Questions.vue";
import {ClassicTileObjects} from '@/config/ClassicTileObjects.js';
require('@/assets/css/dice.css');
const rollDiceFunction = require('@/helpers/Dice.js');
import player1 from '@/assets/tokens/circle_red.png';
import player2 from '@/assets/tokens/circle_blue.png';
import player3 from '@/assets/tokens/circle_yellow.png';
import player4 from '@/assets/tokens/circle_green.png';
import back from '@/assets/images/back.png';

export default {
  name: 'classic',
  props: ['player1', 'player2', 'player3', 'player4'],
  components: {
    "questions": Questions,
  },
  data() {
    return {
      dice: [1, 2, 3, 4, 5, 6],
      diceResult: 6,
      moveOptions: null,
      gamePlayers: [],
      questionResult: null,
      nextPlayer: null,
      selectedOption: null,
      back: back,
      fullScreen: false,
      selectedCategory: [], //will be filled when the token will end up to a piece of the board
      answeredQuestions: [], //all the question showed will end up here to avoid duplicates
      randomQuestion: {}, //when the dice will be throwed it will be filled by the event
      categories: {
        sport: [],
        geography: [],
        general_knowledge: [],
        history: [],
        animal: [],
        science_and_nature: []
      },
      players: [ //keep it for the initial rendering
        {
          alias: "player1",
          name: '',
          score: [],
          active: false,
          currentPosition: 'f9',
          token: player1
        },
        {
          alias: "player2",
          name: '',
          score: [],
          active: false,
          currentPosition: 'f9',
          token: player2
        },
        {
          alias: "player3",
          name: '',
          score: [],
          active: false,
          currentPosition: 'f9',
          token: player3
        },
        {
          alias: "player4",
          name: '',
          score: [],
          active: false,
          currentPosition: 'f9',
          token: player4
        }
      ],
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
  methods: {
    rollDice() {
      rollDiceFunction('cube');
      this.diceResult = rollDiceFunction('cube');
      this.showMoveOptions();
      this.questionResult = null;
      this.disableTheDice();
    },
    // gives u the options where the player could move on the board
    getMoveOptions() {
      const res = 'roll' + this.diceResult;
      //find the position of the active player
      const indexOfActivePlayer = this.findIndexOfPlayer(this.activePlayer(this.gamePlayers));
      //goes in ClassicTileObjects and find the index where the id is the same as the active player index
      const index = ClassicTileObjects.map(x => x.id).indexOf(this.gamePlayers[indexOfActivePlayer].currentPosition);
      // takes all the possible future position for the result of the dice for that position
      this.moveOptions = ClassicTileObjects[index][res];
      return this.moveOptions;
    },
    // modify the css of all the possible position the token could go after the dice is rolled
    showMoveOptions() {
      for (let option of this.getMoveOptions()) {
        const moveOption = document.querySelector(`#${option}`);
        moveOption.classList.add("flashing");
      }
    },
    // modify the css of all the possible position the token could go
    resetMoveOptions() {
      for (let option of this.moveOptions) {
        const moveOption = document.querySelector(`#${option}`);
        moveOption.classList.remove('flashing');
      }
      this.moveOptions = null;
    },
    //brings the raw position for the css
    getNewRowPosition(event) { //click on d1
      const divID = event.currentTarget.id; //d1
      const index = ClassicTileObjects.map(x => x.id).indexOf(divID); //12
      return ClassicTileObjects[index]['row']; //4
    },
    //brings the column position for the css
    getNewColPosition(event) { //d1
      const divID = event.currentTarget.id; //d1
      const index = ClassicTileObjects.map(x => x.id).indexOf(divID); //12
      return ClassicTileObjects[index]['column']; //1
    },
    //find the active token html part and change the css of it
    movePlayer(event) {
      const activePlayer = document.querySelector(`#${this.activePlayer(this.gamePlayers).alias}`);
      activePlayer.style.cssText = `grid-row-start: ${this.getNewRowPosition(event)};
                                    grid-column-start: ${this.getNewColPosition(event)};`;
      //find the index of the active player
      const index = this.findIndexOfPlayer(this.activePlayer(this.gamePlayers));
      //assign the position we clicked on the player
      this.gamePlayers[index].currentPosition = event.currentTarget.id;
      //Needs to load the category of the grid
      this.selectGridCategory();
    //remove the move options
      this.resetMoveOptions();
      //get me a random question from the selected category
      this.randomQuest();
    },
    selectGridCategory() { //Find index of the actual player position
      const indexOfActivePlayer = this.findIndexOfPlayer(this.activePlayer(this.gamePlayers));
      //goes in ClassicTileObjects and find the index where the id is the same as the active player index
      const index = ClassicTileObjects.map(x => x.id).indexOf(this.gamePlayers[indexOfActivePlayer].currentPosition);
      //Put in selected category the category of the grid
      const category = ClassicTileObjects[index].category;
      //assign to our data the category from the tile
      this.selectedCategory = this.categories[category];
    },
    //moves the player where has been clicked
    checkActive(event) {
      //goes through all the possible movement u can do based on the dice
      for (let option of this.getMoveOptions()) {
        //if the position is the same as the one in the grid
        if (option === event.currentTarget.id) {
          return this.movePlayer(event);
        }
      }
    }, // Find the Dice class and disable the click event(css)
    disableTheDice() {
      const dice = document.querySelector("#cube");
      dice.style.pointerEvents = 'none';
    }, //Find the Dice class and re-enable the click event(css)
    enableTheDice() {
      const dice = document.querySelector("#cube");
      dice.style.pointerEvents = 'auto';
    },
    //we want just the palyer with the name, so the switch logic can work
    filteredPlayers() {
      const playersWithName = this.players.filter((player) => {
        return player.name !== '';
      });
      this.gamePlayers = playersWithName;
    },
    //gets the name from the welcome form, and reassign them, then
    updateNames() {
      this.players[0].name = this.player1;
      this.players[1].name = this.player2;
      this.players[2].name = this.player3;
      this.players[3].name = this.player4;
      //give me back just the players with the name
      this.filteredPlayers();
      //set as active the first player that got name
      this.gamePlayers[0].active = true;
      //set the displaying name as the one of the active one
      this.nextPlayer = this.activePlayer(this.gamePlayers);
    },
    //Create a random question from the selected Category
    //will be invoked when the token end up to a piece of the board
    getRandomQuestion(category) {
      return category[Math.floor(Math.random() * category.length)];
    },
    randomQuest() {
      const query = this.getRandomQuestion(this.selectedCategory);
      //create an array with the incorrect answers
      const options = query.incorrect_answers.map(answer => answer);
      // add the correct to the incorrect array
      options.push(query.correct_answer);
      //check if the question has been already asked
      if (!this.answeredQuestions.includes(query.question)) {
        // if not create me the random question object
        this.randomQuestion = {
          options: options,
          question: query.question,
          correct_answer: query.correct_answer,
          category: query.category
        } //adds it to the answeredQuestion
        this.answeredQuestions.push(this.randomQuestion.question);
        //Check to prevent the crash if we finish up all the question from one category(could be higher than 100, but we r playing safe)
      } else if (this.answeredQuestions.length === 100) {
        this.loadAllCategories(this.categoriesAndId);
      } else {
        //load me another random question
        this.randomQuest();
      }
    },
    // fetch a category
    loadCategory(category, category_id) {
      const url = `https://opentdb.com/api.php?amount=50&category=${category_id}&type=multiple`;
      fetch(url).then(response => response.json())
        .then(data => this.categories[category] = data.results);
    },
    // fetches all the categories
    loadAllCategories(categoryArray) {
      categoryArray.map(element => this.loadCategory(element[0], element[1]));
    },
    //find active player
    activePlayer(players) {
      const activePlayer = players.find(player => player.active === true);
      this.nextPlayer = activePlayer;
      return activePlayer;
    },
    //add won categories, no duplicates allowed
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
        players[0].active = true;
      }
    }, // Check if the Player reaches the win target
    checkWinCondition(activePlayer) {
      if (activePlayer.score.length === 6) {
        this.nextPlayer = null;
        this.questionResult = "Congratulations - you've WON!";
        const allThePage = document.querySelector("#classic");
        allThePage.classList.add("flashing");
        this.disableTheDice();
        this.randomQuestion = null;
      } else {
        this.nextPlayer = null;
        this.randomQuestion = null;
        //create a new question in either cases
        this.enableTheDice();
      }
    },
    togglefullScreen() {
      if (this.fullScreen === false) {
        const element = document.querySelector('#classic');
        element.requestFullscreen();
        this.fullScreen = true;
      }
    },
    checkScore(score) {
      if (score === "Science & Nature") {
        return "sci-score";
      } else if (score === 'History') {
        return "his-score";
      } else if (score === 'Sports') {
        return "spo-score";
      } else if (score === 'Geography') {
        return "geo-score";
      } else if (score === 'Animals') {
        return "anim-score";
      } else if (score === 'General Knowledge') {
        return "gk-score";
      }
    },
    checkSelectedOption() {
      const playerActive = this.activePlayer(this.gamePlayers);
      const question = this.randomQuestion;

      if (this.selectedOption === question.correct_answer) {
        this.nextPlayer = null;
        this.questionResult = "Correct - roll again!";
        this.addWonCategory(playerActive, question.category, this.gamePlayers);
        this.checkWinCondition(playerActive);
      } else {
        this.nextPlayer = null;
        this.questionResult = "Boooo - better luck next time!";
        this.enableTheDice();
        this.switchActivePlayer(playerActive, this.gamePlayers);
        this.randomQuestion = null;
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
      this.selectedOption = option;
      this.checkSelectedOption();
    });
  },
  beforeDestroy() {
    eventBus.$off();
  }
}
</script>

<style lang="css" scoped>
  .page-container {
    display: block;
    text-align: center;
    width: 100vw;
    background-color: #8e9aaf;
  }

  .game-board {
    display: inline-grid;
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .sport {
    box-sizing: border-box;
    width: 90px;
    height: 89px;
    background-color: #6eeb83;
    box-shadow: 2px 2px 4px #000000;
  }

  .geography {
    box-sizing: border-box;
    width: 90px;
    height: 89px;
    background-color: #ff70a6;
    box-shadow: 2px 2px 4px #000000;
  }

  .general-knowledge {
    box-sizing: border-box;
    width: 90px;
    height: 89px;
    background-color: #907ad6;
    box-shadow: 2px 2px 4px #000000;
  }

  .history {
    box-sizing: border-box;
    width: 90px;
    height: 89px;
    background-color: #ff9770;
    box-shadow: 2px 2px 4px #000000;
  }

  .animal {
    box-sizing: border-box;
    width: 90px;
    height: 89px;
    background-color: #e9ff70;
    box-shadow: 2px 2px 4px #000000;
  }

  .science {
    box-sizing: border-box;
    width: 90px;
    height: 89px;
    background-color: #70d6ff;
    box-shadow: 2px 2px 4px #000000;
  }

  .science:hover, .animal:hover, .geography:hover, .history:hover, .general-knowledge:hover {
    cursor: pointer;
    opacity: 50%;
  }

  .grid:hover {
    cursor: pointer;
    color: blue;
  }

  .flashing {
    animation: flash 0.5s ease 5s infinite;
  }

  @keyframes flash {
    50% {
      background-color: #cad0eb;
    }
  }

  /* RIGHT Y COL */
  #a17, #b17, #c17, #d17, #e17, #f17, #g17, #h17, #i17, #j17, #k17 {
  grid-column-start: 17;
  }

  /* BOTTOM X ROW */
  #k1, #k2, #k3, #k4, #k5, #k6, #k7, #k8, #k9, #k10, #k11, #k12, #k13, #k14, #k15, #k16, #k17 {
  grid-row-start: 11;
  }

  /* LEFT Y COL */
  #a1, #b1, #c1, #e1, #f1, #g1, #h1, #i1, #j1{
  grid-column-start: 1;
  }

  #j1 {
  grid-row-start: 10;
  }

  #i1 {
  grid-row-start: 9;
  }

  #h1 {
  grid-row-start: 8;
  }

  #g1 {
  grid-row-start: 7;
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
  #f1, #f2, #f3, #f4, #f5, #f6, #f7, #f8, #f9, #f10, #f11, #f12, #f13, #f14,#f15, #f16, #f17 {
  grid-row-start: 6;
  }

  /* CROSS SECTION Y */
  #b9, #c9, #d9, #e9, #f9, #g9, #h9, #i9, #j9 {
  grid-column-start: 9;
  }

  input:focus {
    outline: none;
  }

  .player1 {
    z-index: 2;
    position: absolute;
    grid-row-start: 6;
    grid-column-start: 9;
  }
  .player2 {
    margin-top: 40px;
    z-index: 2;
    position: absolute;
    grid-row-start: 6;
    grid-column-start: 9;
  }

  .player3 {
    margin-left: 40px;
    z-index: 2;
    position: absolute;
    grid-row-start: 6;
    grid-column-start: 9;
  }

  .player4 {
    margin-left: 40px;
    margin-top: 40px;
    z-index: 2;
    position: absolute;
    grid-row-start: 6;
    grid-column-start: 9;
  }

  .token {
    height: 40px;
    margin: 5px;
  }

  .board-content-top-left {
    width: 625px;
    height: 350px;
    z-index: 2;
    position: absolute;
    margin: 90px;
  }

  .board-content-top-right {
    width: 625px;
    height: 350px;
    z-index: 2;
    position: absolute;
    margin: 90px;
    right: 0;
  }

  .board-content-bottom-right {
    width: 625px;
    height: 350px;
    z-index: 2;
    position: absolute;
    margin: 90px;
    bottom: 0;
    right: 0;
  }

  .board-content-bottom-left {
    width: 625px;
    height: 350px;
    z-index: 2;
    position: absolute;
    margin: 90px;
    bottom: 0;
  }

  .question {
    margin-top: 20px;
    width: 80%;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    color: white;
  }

  .question-result {
    width: 80%;
    font-size: 40px;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    color: white;
    text-shadow: 2px 2px 4px #000000;
  }

  .players-container {
    width: 80%;
    font-size: 25px;
    text-align: left;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    color: white;
    text-shadow: 1px 1px 2px #000000;
    box-shadow: 2px 2px 4px #000000;
    border-style: solid;
    background-color: white;
    margin-top: 20px;
  }

  .heading-container {
    border-style: solid;
    text-align: center;
    background-color: #8e9aaf;
    height: 50px;
  }

  .heading {
    color: white;
    font-size: 30px;
    margin-top: 5px;
    font-family: 'Russo One', sans-serif;
  }

  .token-ind {
    height: 30px;
    margin: 5px;
    float: left;
  }

  .player1-container {
    color: white;
    background-color: #ff70a6;
    border-style: solid;
    margin: 10px;
    overflow: auto;
    font-family: 'Russo One', sans-serif;
  }

  .player2-container {
    background-color: #70d6ff;
    color: white;
    border-style: solid;
    margin: 10px;
    overflow: auto;
    font-family: 'Russo One', sans-serif;
  }

  .player3-container {
    background-color: #e9ff70;
    color: white;
    border-style: solid;
    margin: 10px;
    overflow: auto;
    font-family: 'Russo One', sans-serif;
  }

  .player4-container {
    background-color: #6eeb83;
    color: white;
    border-style: solid;
    margin: 10px;
    overflow: auto;
    font-family: 'Russo One', sans-serif;
  }

  .player-txt {
    width: 28%;
    float: left;
    margin-top: 7px;
    padding-left: 7px;
  }

  .score-container {
    width: 60%;
    float: left;
    margin-top: 4px;
    display: flex;
    flex-direction: row;
  }

  .anim-score {
    width: 30px;
    height: 30px;
    margin-top: 4px;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #e9ff70;
  }

  .his-score {
    width: 30px;
    height: 30px;
    margin-top: 4px;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #ff9770;
  }

  .geo-score {
    width: 30px;
    height: 30px;
    margin-top: 4px;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #ff70a6;
  }

  .sci-score {
    width: 30px;
    height: 30px;
    margin-top: 4px;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #70d6ff;
  }

  .spo-score {
    width: 30px;
    height: 30px;
    margin-top: 4px;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #6eeb83;
  }

  .gk-score {
    width: 30px;
    height: 30px;
    margin-top: 4px;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #907ad6;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .collected {
    margin-left: 15px;
  }

  .category-list {
    overflow: auto;
    margin-top: 50px;
    margin-left: 25px;
    margin-bottom: 80px;
  }

  .cl-left {
    width: 49%;
    float: left;
  }

  .cl-right {
    width: 49%;
    float: left;
  }

  .spo {
    background-color: #6eeb83;
    height: 20px;
    width: 20px;
    width: 10%;
    float: left;
    margin-right: 10px;
    margin-top: 4px;
  }

  .sci {
    background-color: #70d6ff;
    height: 20px;
    width: 20px;
    width: 10%;
    float: left;
    margin-right: 10px;
    margin-top: 4px;
  }

  .his {
    background-color: #ff9770;
    height: 20px;
    width: 20px;
    width: 10%;
    float: left;
    margin-right: 10px;
    margin-top: 4px;
  }

  .gk {
    background-color: #907ad6;
    height: 20px;
    width: 20px;
    width: 10%;
    float: left;
    margin-right: 10px;
    margin-top: 4px;
  }

  .geo {
    background-color: #ff70a6;
    height: 20px;
    width: 20px;
    width: 10%;
    float: left;
    margin-right: 10px;
    margin-top: 4px;
  }

  .anim {
    background-color: #e9ff70;
    height: 20px;
    width: 20px;
    width: 10%;
    float: left;
    margin-right: 10px;
    margin-top: 4px;
  }

  .cat-name {
    font-size: 20px;
    text-align: left;
  }

  .np-name {
    font-family: 'Russo One', sans-serif;
  }

  .back-button-container {
    width: 10%;
    float: left;
    margin: 20px;
  }

  .back-button {
    height: 60px;
  }

  .back-button:hover {
    background-color: #ff70a6;
    border-radius: 50%;
  }

  .back-button:focus {
    outline: none;
  }
</style>

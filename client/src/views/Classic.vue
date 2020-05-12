<template lang="html">
    <div id="classic" class="page-container" v-on:click="togglefullScreen()">
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
          <div class="container">

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
import fullscreen from '@/assets/images/fullscreen.png';

export default {
  name: 'classic',
  props:['player1','player2', 'player3', 'player4'],
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
      players: [ //keep it for the initial rendering
        {
          alias: "player1",
          name: '',
          score: [],
          winStreak: 0,
          active: false,
          currentPosition: 'f9',
          token: player1
        },
        {
          alias: "player2",
          name: '',
          score: [],
          winStreak: 0,
          active: false,
          currentPosition: 'f9',
          token: player2
        },
        {
          alias: "player3",
          name: '',
          score: [],
          winStreak: 0,
          active: false,
          currentPosition: 'f9',
          token: player3
        },
        {
          alias: "player4",
          name: '',
          score: [],
          winStreak: 0,
          active: false,
          currentPosition: 'f9',
          token: player4
        }
      ],
      selectedCategory: [], //will be filled when the token will end up to a piece of the board
      answeredQuestions: [], //all the question showed will end up here to avoid duplicates
      randomQuestion: {}, //when the dice will be throwed it will be filled by the event
      categoriesAndId: [
        ['sport', 21],
        ['geography', 22],
        ['general_knowledge', 9],
        ['history', 23],
        ['animal', 27],
        ['science_and_nature', 17]
      ],
      questionResult: null,
      nextPlayer: null,
      selectedOption: null,
    }
  },

  components: {
    "questions": Questions,

  },
  methods: {
    rollDice() {
      rollDiceFunction('cube')
      this.diceResult = rollDiceFunction('cube');
      this.showMoveOptions();
      this.questionResult = null;
      this.disableTheDice();
    },
    // gives u the options where the player could move on the board
    getMoveOptions() {//dice is
      const res = 'roll' + this.diceResult; //roll3
      //trova lindex della posizione attuale del giocatore f9
      const indexOfActivePlayer = this.findIndexOfPlayer(this.activePlayer(this.gamePlayers))

      const index = ClassicTileObjects.map(x => x.id).indexOf(this.gamePlayers[indexOfActivePlayer].currentPosition);
      this.moveOptions = ClassicTileObjects[index][res]// takes all the possible future position for roll 3
      return this.moveOptions;
    },
    // shows the possible position from the array and gets them colored in red
    showMoveOptions() {
      for (let option of this.getMoveOptions()) {
        const moveOption = document.querySelector(`#${option}`);
        moveOption.classList.add("flashing");
      }
    },
    //make the blocks black again
    resetMoveOptions() {
      for (let option of this.moveOptions) {
        const moveOption = document.querySelector(`#${option}`);
        moveOption.classList.remove('flashing');
      }
      this.moveOptions = null;
    },
    //brings the raw position for the css
    getNewRowPosition(event) {//click on d1
      const divID = event.currentTarget.id;//d1
      const index = ClassicTileObjects.map(x => x.id).indexOf(divID); //12
      return ClassicTileObjects[index]['row']; //4
    },
    //brings the column position for the css
    getNewColPosition(event) {//d1
      const divID = event.currentTarget.id;//d1
      const index = ClassicTileObjects.map(x => x.id).indexOf(divID);//12
      return ClassicTileObjects[index]['column'];//1
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
      const index = ClassicTileObjects.map(x => x.id).indexOf(this.gamePlayers[indexOfActivePlayer].currentPosition);
      //Put in selected category the category of the grid
      const category = ClassicTileObjects[index].category
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
      const dice = document.querySelector("#cube")
      dice.style.pointerEvents = 'none';
    },//Find the Dice class and re-enable the click event
    enableTheDice(){
      const dice = document.querySelector("#cube")
      dice.style.pointerEvents = 'auto';
    },
    //we want just the palyer with the name, so the swich logic can work
    filteredPlayers() {
      const playersWithName = this.players.filter((player) => {
        return player.name !== '' });
        this.gamePlayers = playersWithName;
      },
      updateNames(){
        this.players[0].name = this.player1;
        this.players[1].name = this.player2;
        this.players[2].name = this.player3;
        this.players[3].name = this.player4;
        this.filteredPlayers();
        this.gamePlayers[0].active = true;
        this.nextPlayer = this.activePlayer(this.gamePlayers)
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
        this.nextPlayer = activePlayer
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
            this.nextPlayer = null
            this.questionResult = "Congratulations - you've WON!"
            this.disableTheDice()
            this.randomQuestion = null
          } else {
            this.nextPlayer = null
            this.randomQuestion = null
            //create a new question in either cases
            this.enableTheDice();
          }
        },
      togglefullScreen () {
        // const element = document.querySelector('#classic');
        // element.requestFullscreen();
      },
      checkScore(score) {
        if (score === "Science & Nature") {
            return "sci-score"
        } else if (score === 'History') {
            return "his-score"
        } else if (score === 'Sports') {
            return"spo-score"
        } else if (score === 'Geography') {
            return "geo-score"
        } else if (score === 'Animals') {
            return "anim-score"
        } else if (score === 'General Knowledge') {
            return "gk-score"
        }
      },
      checkSelectedOption() {
        const playerActive = this.activePlayer(this.gamePlayers);
        const question = this.randomQuestion;
        console.log("Question Answered: ", question);
        // console.log(option);
        // console.log(question.correct_answer);

        if (this.selectedOption === question.correct_answer) {
          this.nextPlayer = null
          this.questionResult = "Correct - roll again!"
          this.addWonCategory(playerActive, question.category, this.gamePlayers);
          this.checkWinCondition(playerActive);
          } else {
            this.nextPlayer = null
            this.questionResult = "Boooo - better luck next time!"
            this.enableTheDice()
            this.switchActivePlayer(playerActive, this.gamePlayers);
            console.log("HERE", this.randomQuestion);
            this.randomQuestion = null;
            // this.enableTheDice();
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
        this.checkSelectedOption()
      });
  },
  beforeDestroy() {
    eventBus.$off()
  }
}
</script>

<style lang="css" scoped>
  .page-container {
    display: block;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color: #8e9aaf;
  }

  .game-board {
    display: inline-grid;
    position: relative;
    margin-top: 10px;
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
    width: 9%;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #e9ff70;
  }

  .his-score {
    width: 9%;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #ff9770;
  }

  .geo-score {
    width: 9%;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #ff70a6;
  }

  .sci-score {
    width: 9%;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #70d6ff;
  }

  .spo-score {
    width: 9%;
    border-style: solid;
    border-radius: 50%;
    height: 25px;
    color: black;
    float: left;
    margin-left: 10px;
    background-color: #6eeb83;
  }

  .gk-score {
    width: 9%;
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

</style>

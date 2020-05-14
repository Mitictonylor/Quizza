<template lang="html">
  <div id="mental" class="page-container">

    <div class="game-board" ref="gameBoard">
      <div id="a1" class="grid" v-on:click="checkActive($event)"></div>
      <div id="a3" class="grid" v-on:click="checkActive($event)"></div>
      <div id="a5" class="grid" v-on:click="checkActive($event)"></div>
      <div id="a7" class="grid" v-on:click="checkActive($event)"></div>
      <div id="a9" class="grid" v-on:click="checkActive($event)"></div>
      <div id="a11" class="grid" v-on:click="checkActive($event)"></div>
      <div id="a13" class="grid" v-on:click="checkActive($event)"></div>
      <div id="a15" class="grid" v-on:click="checkActive($event)"></div>
      <div id="a17" class="grid" v-on:click="checkActive($event)"></div>
      <div id="b2" class="grid" v-on:click="checkActive($event)"></div>
      <div id="b4" class="grid" v-on:click="checkActive($event)"></div>
      <div id="b6" class="grid" v-on:click="checkActive($event)"></div>
      <div id="b8" class="grid" v-on:click="checkActive($event)"></div>
      <div id="b10" class="grid" v-on:click="checkActive($event)"></div>
      <div id="b12" class="grid" v-on:click="checkActive($event)"></div>
      <div id="b14" class="grid" v-on:click="checkActive($event)"></div>
      <div id="b16" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c1" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c3" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c5" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c7" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c9" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c11" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c13" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c15" class="grid" v-on:click="checkActive($event)"></div>
      <div id="c17" class="grid" v-on:click="checkActive($event)"></div>
      <div id="d2" class="grid" v-on:click="checkActive($event)"></div>
      <div id="d4" class="grid" v-on:click="checkActive($event)"></div>
      <div id="d14" class="grid" v-on:click="checkActive($event)"></div>
      <div id="d16" class="grid" v-on:click="checkActive($event)"></div>
      <div id="e1" class="grid" v-on:click="checkActive($event)"></div>
      <div id="e3" class="grid" v-on:click="checkActive($event)"></div>
      <div id="e15" class="grid" v-on:click="checkActive($event)"></div>
      <div id="e17" class="grid" v-on:click="checkActive($event)"></div>
      <div id="f2" class="grid" v-on:click="checkActive($event)"></div>
      <div id="f4" class="grid" v-on:click="checkActive($event)"></div>
      <div id="f14" class="grid" v-on:click="checkActive($event)"></div>
      <div id="f16" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g1" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g3" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g15" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g17" class="grid" v-on:click="checkActive($event)"></div>
      <div id="h2" class="grid" v-on:click="checkActive($event)"></div>
      <div id="h4" class="grid" v-on:click="checkActive($event)"></div>
      <div id="h14" class="grid" v-on:click="checkActive($event)"></div>
      <div id="h16" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i1" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i3" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i5" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i7" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i9" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i11" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i13" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i15" class="grid" v-on:click="checkActive($event)"></div>
      <div id="i17" class="grid" v-on:click="checkActive($event)"></div>
      <div id="j2" class="grid" v-on:click="checkActive($event)"></div>
      <div id="j4" class="grid" v-on:click="checkActive($event)"></div>
      <div id="j6" class="grid" v-on:click="checkActive($event)"></div>
      <div id="j8" class="grid" v-on:click="checkActive($event)"></div>
      <div id="j10" class="grid" v-on:click="checkActive($event)"></div>
      <div id="j12" class="grid" v-on:click="checkActive($event)"></div>
      <div id="j14" class="grid" v-on:click="checkActive($event)"></div>
      <div id="j16" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k1" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k3" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k5" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k7" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k9" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k11" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k13" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k15" class="grid" v-on:click="checkActive($event)"></div>
      <div id="k17" class="grid" v-on:click="checkActive($event)"></div>

      <div id="f1" class="back-button-container">
        <router-link :to="{name: 'newgame'}"> <img class="back-button" :src="back" v-on:click=""> </router-link>
      </div>

      <div class="board-content-1">
        <div class="player1-container">
          <p class="player1-txt" v-if="players[0].name && players[1].name"> {{players[0].name.toUpperCase()}}</p>
          <div class="score-container">
            <p>SCORE: {{players[0].score}}</p>
          </div>
        </div>
        <div class="player2-container">
          <p class="player2-txt" v-if="players[0].name && players[1].name"> {{players[1].name.toUpperCase()}}</p>
          <div class="score-container">
            <p>SCORE: {{players[1].score}}</p>
          </div>
        </div>

          <div class="skull" v-on:click="randomDice(); togglefullScreen()">
            <div class="eye"></div>
            <div class="eye"></div>
            <div class="nose"></div>
          </div>
          <div class="teeth">
          <div class="tooth"></div>
          <div class="tooth"></div>
          <div class="tooth"></div>
          <div class="tooth"></div>
          </div>
          <div class="bones">
            <div class="bone">
              <div class="bone-inner"></div>
              <div class="bone-inner"></div>
            </div>
            <div class="bone">
              <div class="bone-inner"></div>
              <div class="bone-inner"></div>
            </div>
          </div>

            <div v-if="players[2].name" class="player3-container">
              <p class="player3-txt"> {{players[2].name.toUpperCase()}}</p>
              <div class="score-container">
                <p>SCORE: {{players[2].score}}</p>
              </div>
            </div>
            <div v-if="players[3].name" class="player4-container">
              <p class="player4-txt"> {{players[3].name.toUpperCase()}}</p>
              <div class="score-container">
                <p>SCORE: {{players[3].score}}</p>
              </div>
          </div>
      </div>

      <div class="board-content-2" v-if='randomQuestion'>
        <div class="question-container">
          <questions  :randomQuestion="randomQuestion"class="question"></questions>
        </div>
      </div>

      <div v-if="questionResult" class="board-content-3">
          <p class="qr-result">{{questionResult}}</p>
      </div>

      <div id="player1" class="player1" v-if="players[0].name"></div>
      <div id="player2" class="player2" v-if="players[1].name"></div>
      <div id="player3" class="player3" v-if="players[2].name"></div>
      <div id="player4" class="player4" v-if="players[3].name"></div>

    </div>
  </div>
</div>
</template>

<script>
import {MentalTileObjects} from '@/config/MentalTileObjects.js'
import Questions from "@/components/Questions.vue"
import {eventBus} from '../main.js';
require('@/assets/css/skull.css');
import back from '@/assets/images/purple_back.png';

export default {
  name: 'mental',
  components: {
    'questions': Questions
  },
  props: ['player1', 'player2', 'player3', 'player4'],
  data() {
    return {
      dice: [1,2,3,4,5,6],
      diceResult: 6,
      questionResult: "PRESS THE BIG MAD MENTAL SKULL TO START!!!!",
      answeredQuestions:[],
      randomQuestion: null,
      moveOptions: null,
      fullScreen: false,
      currentTile: 'a1',
      gamePlayers: [],
      selectedOption: null,
      back: back,
      player: {
        id: 1,
        currentPosition: 'f9'
      },
      players: [ //keep it for the initial rendering
        {
          alias: "player1",
          name: '',
          score: 0,
          active: false,
          currentPosition: 'a1',
          id: 1
        },
        {
          alias: "player2",
          name: '',
          score: 0,
          active: false,
          currentPosition: 'k17',
          id: 2
        },
        {
          alias: "player3",
          name: '',
          score: 0,
          active: false,
          currentPosition: 'a17',
          id: 3
        },
        {
          alias: "player4",
          name: '',
          score: 0,
          active: false,
          currentPosition: 'k17',
          id: 4
        }
      ],
      categoriesAndId: [
        ['sport', 21],
        ['geography', 22],
        ['general_knowledge', 9],
        ['history', 23],
        ['animal', 27],
        ['science_and_nature', 17]
      ],
      extraPoint: [
        ["c9", "k7", "c1", "e3", "k1", "i1", "a13"], //+3
        ["f2", "c5", "j4", "i9", "g17", "k5"], //+5
        ["j2", "h2", "g15", "j6", "d2", "a9"], //+9
        ["j12", "i11", "a1", "j16",  "b12"], //+17
        ["b4", "i15","k17", "c13", "j8", "c17"], //+33
        ["b4", "i15"]//+100
      ],
      arrayLoose: [
        ["k17", "c13", "j8", "c17"], //-4
        ["e15", "i5", "a17", "k11"], //-7
        ["i3", "b2", "i17", "c15"], //-13
        ["h16","a15", "c11", "g3", "a3"], //-17
        ["j10", "b16", "d14", "b14", "d16","k3", "h4", "d4"], //-25
        ["a5", "f16", "g1", "a11","e17", "k13", "c7", "i13","e1", "b10", "c3", "k9", "f4","b6", "a7", "j14", "i7", "k15","f14", "h14","b8"],
      ] //-all
    }
  },
  methods: {
    randomDice() {
      this.diceResult = this.dice[Math.floor(Math.random() * 6)];
      this.showMoveOptions();
      this.disableTheDice();
      this.questionResult = null;
    },
    showMoveOptions() {
      this.disableTheDice();
      //get a random position from the MentalTileObjects
      const randomGridTile = MentalTileObjects[Math.floor(Math.random() * 72)].id;
      //fint the position in the html and add the flashing in it's css
      const moveOption = document.querySelector(`#${randomGridTile}`);
      moveOption.classList.add("show-border");
      //assign the position to the active player
      this.activePlayer(this.gamePlayers).currentPosition = randomGridTile;
      const playerPrompt = document.querySelector(`.${this.activePlayer(this.gamePlayers).alias}` + '-txt');
      playerPrompt.classList.add("flashing");
    },
    resetMoveOptions() {
      //once the player is on the flashing tile, the tile stop flashing
      const active = this.activePlayer(this.gamePlayers).currentPosition;
      const moveOption = document.querySelector(`#${active}`);
      moveOption.classList.remove("show-border");
    },
    getNewRowPosition(event) {
    //  find the row position from MentalTileObjects of the clicked tile
      const divID = event.currentTarget.id;
      const index = MentalTileObjects.map(x => x.id).indexOf(divID);
      return MentalTileObjects[index]['row'];
    },
    getNewColPosition(event) {
        //  find the column position from MentalTileObjects of the clicked tile
      const divID = event.currentTarget.id;
      const index = MentalTileObjects.map(x => x.id).indexOf(divID);
      return MentalTileObjects[index]['column'];
    },
    checkActive(event) {
      //check if the player is on the clicked tile
      if (this.activePlayer(this.gamePlayers).currentPosition === event.currentTarget.id) {
        return this.movePlayer(event);
      }
    },
    movePlayer(event) {
      //assign the active player token and obkject the new css position
      const activePlayer = document.querySelector(`#${this.activePlayer(this.gamePlayers).alias}`);
      activePlayer.style.cssText = `grid-row-start: ${this.getNewRowPosition(event)};
                                    grid-column-start: ${this.getNewColPosition(event)};`;
      this.activePlayer(this.gamePlayers).currentPosition = event.currentTarget.id;
      this.resetMoveOptions();
      this.stealPoints(this.activePlayer(this.gamePlayers), this.gamePlayers);
      this.loosePoints(this.arrayLoose, this.activePlayer(this.gamePlayers));
      this.addPoints(this.extraPoint, this.activePlayer(this.gamePlayers));
      const randomCategoryAndId = this.getRandomCategory(this.categoriesAndId);
      //load a random question from a randomcategory
      this.loadRandomQuestion(randomCategoryAndId);
    },
    //as soon as you clik on the display the fullscreen mode is on
    togglefullScreen () {
      if (this.fullScreen === false) {
        const element = document.querySelector('#mental');
        element.requestFullscreen();
        this.fullScreen = true;
      }
    },
    //filters the player arrived from the form, and take them just the one with a name
    filteredPlayers() {
      const playersWithName = this.players.filter((player) => {
        return player.name !== '';
      });
      this.gamePlayers = playersWithName;
    },
    //find the player with their status active
    activePlayer(players) {
      const activePlayer = players.find(player => player.active === true);
      this.nextPlayer = activePlayer;
      return activePlayer;
    },
    //check if active and non active player got the same position, if yes both players lose their points
    stealPoints(activePlayer, arrayOfPlayers) {
      const deactivatedPlayers = arrayOfPlayers.filter(player => player.active === false);
      const sameCurrentPosition = deactivatedPlayers.filter(player => player.currentPosition === activePlayer.currentPosition);
      if (sameCurrentPosition.length >= 1) {
        sameCurrentPosition.forEach((player) => {
            this.questionResult = `You & ${player.name} lost aw yer points!`;
            activePlayer.score = 0;
            player.score = 0;
          });
        }
      },
      //check if the current position of the player is included in the minus list
    loosePoints(array, activePlayer) {
      if (array[0].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 4;
        this.questionResult = "NAE JOY! You lost 4 points!!!";
      } else if (array[1].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 7;
        this.questionResult = "NAE JOY! You lost 7 points!!!";
      } else if (array[2].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 13;
        this.questionResult = "NAE JOY! You lost 13 points!!!";
      } else if (array[3].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 17;
        this.questionResult = "NAE JOY! You lost 17 points!!!";
      } else if (array[4].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 25;
        this.questionResult = "NAE JOY! You lost 25 points!!!";
      } else if (array[5].includes(activePlayer.currentPosition)) {
        if (activePlayer.score > 0){
        activePlayer.score = 0;
        this.questionResult = "SAKE!!! Ye lost aw yer points!!!"
      } else {
          activePlayer.score = 0;
          this.questionResult = "JAMMY!";
       }
     }
    },
    //check if the active player position is included in the plusarray
    addPoints(array, activePlayer) {
      if (array[0].includes(activePlayer.currentPosition)) {
        activePlayer.score += 3;
        this.questionResult = "YAASSS! Ye fun 3 points!!!";
      } else if (array[1].includes(activePlayer.currentPosition)) {
        activePlayer.score += 5;
        this.questionResult = "YAASSS! Ye fun 5 points!!!";
      } else if (array[2].includes(activePlayer.currentPosition)) {
        activePlayer.score += 9;
        this.questionResult = "YAASSS! Ye fun 9 points!!!";
      } else if (array[3].includes(activePlayer.currentPosition)) {
        activePlayer.score += 17;
        this.questionResult = "YAASSS! Ye fun 17 points!!!";
      } else if (array[4].includes(activePlayer.currentPosition)) {
        activePlayer.score += 33;
        this.questionResult = "YAASSS! Ye fun 33 points!!!";
      } else if (array[5].includes(activePlayer.currentPosition)) {
        activePlayer.score += 100;
        this.questionResult = "NAE DANGER! Ye fun 100 points!!!";
      }
    },
    //we associate the props to the premade object in the data, and then we filter it and
    //we assign the first player as active, so the game can start
    updateNames() {
      this.players[0].name = this.player1;
      this.players[1].name = this.player2;
      this.players[2].name = this.player3;
      this.players[3].name = this.player4;
      this.filteredPlayers();
      this.gamePlayers[0].active = true;
      this.nextPlayer = this.activePlayer(this.gamePlayers);
    },
    //fetch the randomQuestion
    loadRandomQuestion(categoryAndID) {
      const url = `https://opentdb.com/api.php?amount=1&category=${categoryAndID[1]}&type=multiple`;
      fetch(url).then(response => response.json())
        .then(data => {
          const query = data.results[0];
          const options = query.incorrect_answers.map(answer => answer);
          options.push(query.correct_answer);
          if (!this.answeredQuestions.includes(query.question)) {
            this.randomQuestion = {
              options: options,
              question: query.question,
              correct_answer: query.correct_answer,
              category: query.category
            }
            this.answeredQuestions.push(this.randomQuestion.question);
          } else {
            this.loadRandomQuestion(this.getRandomCategory(this.categoriesAndId));
          }
        })
    },
    //get a random category from the array in the data
    getRandomCategory(categoryArray) {
      const category = categoryArray[Math.floor(Math.random() * categoryArray.length)];
      return category;
    },
    addPoint(player) {
      player.score += 1;
    },
    checkWinCondition(activePlayer) {
      if (activePlayer.score === 666) {
          this.nextPlayer = null;
          this.questionResult = "NO WAY MAN - ye've WON!";
          this.disableTheDice();
          this.randomQuestion = null;
        } else {
          this.nextPlayer = null;
          this.randomQuestion = null;
          //create a new question in either cases
          this.enableTheDice();
        }
      },
      disableTheDice() {
        const dice = document.querySelector(".skull");
        dice.style.pointerEvents = 'none';
      }, //Find the Dice class and re-enable the click event
      enableTheDice() {
        const dice = document.querySelector(".skull");
        dice.style.pointerEvents = 'auto';
      },
      //find the index(of the active player)
      findIndexOfPlayer(player) {
        const index = this.gamePlayers.indexOf(player);
        return index;
      },
      //given an active player and the array of players, find me the index of the active, and set it as false
      switchActivePlayer(player, players) {
        const index = this.findIndexOfPlayer(player);
        players[index].active = false;
        //if the index is less then the array length minus 1 find the player with
        //the index after the active one and set it as true
        if (index < (players.length - 1)) {
          players[(index + 1)].active = true;
        } else {
          //otherwise set the first player as active
          players[0].active = true;
        }
      },
      checkSelectedOption() {
        this.questionResult = null;
        const playerActive = this.activePlayer(this.gamePlayers);
        const question = this.randomQuestion;
        if (this.selectedOption === question.correct_answer) {
          this.nextPlayer = null;
          this.questionResult = "YAS! Ye got a point! Go again!";
          this.addPoint(playerActive);
          this.randomQuestion = null;
          this.enableTheDice();
        } else {
          this.nextPlayer = null;
          this.questionResult = "BOLT - WRANG ANSWER!";
          this.enableTheDice();
          this.switchActivePlayer(playerActive, this.gamePlayers);
          this.randomQuestion = null;
          const playerPrompt = document.querySelector(`.${playerActive.alias}` + '-txt');
          playerPrompt.classList.remove("flashing");
        }
      }
  },
  mounted(){
    this.updateNames();

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
  background-color: black;
}

.game-board {
  margin-top: 10px;
  display: inline-grid;
  position: relative;
}

.grid {
  border-style: solid;
  box-sizing: border-box;
  width: 90px;
  height: 89px;
  font-size: 40px;
  background-color: black;
}

.grid:hover {
  cursor: pointer;
  color: white;
}

/* ROW A */
#a1 {
  grid-row-start: 1;
  grid-column-start: 1;
}

#a3 {
  grid-row-start: 1;
  grid-column-start: 3;
}

#a5 {
  grid-row-start: 1;
  grid-column-start: 5;
}

#a7 {
  grid-row-start: 1;
  grid-column-start: 7;
}

#a9 {
  grid-row-start: 1;
  grid-column-start: 9;
}

#a11 {
  grid-row-start: 1;
  grid-column-start: 11;
}

#a13 {
  grid-row-start: 1;
  grid-column-start: 13;
}

#a15 {
  grid-row-start: 1;
  grid-column-start: 15;
}

#a17 {
  grid-row-start: 1;
  grid-column-start: 17;
}

/* ROW B */
#b2 {
  grid-row-start: 2;
  grid-column-start: 2;
}

#b4 {
  grid-row-start: 2;
  grid-column-start: 4;
}

#b6 {
  grid-row-start: 2;
  grid-column-start: 6;
}

#b8 {
  grid-row-start: 2;
  grid-column-start: 8;
}

#b10 {
  grid-row-start: 2;
  grid-column-start: 10;
}

#b12 {
  grid-row-start: 2;
  grid-column-start: 12;
}

#b14 {
  grid-row-start: 2;
  grid-column-start: 14;
}

#b16 {
  grid-row-start: 2;
  grid-column-start: 16;
}

/* ROW C */
#c1 {
  grid-row-start: 3;
  grid-column-start: 1;
}

#c3 {
  grid-row-start: 3;
  grid-column-start: 3;
}

#c5 {
  grid-row-start: 3;
  grid-column-start: 5;
}

#c7 {
  grid-row-start: 3;
  grid-column-start: 7;
}

#c9 {
  grid-row-start: 3;
  grid-column-start: 9;
}

#c11 {
  grid-row-start: 3;
  grid-column-start: 11;
}

#c13 {
  grid-row-start: 3;
  grid-column-start: 13;
}

#c15 {
  grid-row-start: 3;
  grid-column-start: 15;
}

#c17 {
  grid-row-start: 3;
  grid-column-start: 17;
}

/* ROW D */
#d2 {
  grid-row-start: 4;
  grid-column-start: 2;
}

#d4 {
  grid-row-start: 4;
  grid-column-start: 4;
}

#d14 {
  grid-row-start: 4;
  grid-column-start: 14;
}

#d16 {
  grid-row-start: 4;
  grid-column-start: 16;
}

/* ROW E */
#e1 {
  grid-row-start: 5;
  grid-column-start: 1;
}

#e3 {
  grid-row-start: 5;
  grid-column-start: 3;
}

#e15 {
  grid-row-start: 5;
  grid-column-start: 15;
}

#e17 {
  grid-row-start: 5;
  grid-column-start: 17;
}

/* ROW F */
#f1 {
  grid-row-start: 6;
  grid-column-start: 1;
}

#f2 {
  grid-row-start: 6;
  grid-column-start: 2;
}

#f4 {
  grid-row-start: 6;
  grid-column-start: 4;
}

#f14 {
  grid-row-start: 6;
  grid-column-start: 14;
}

#f16 {
  grid-row-start: 6;
  grid-column-start: 16;
}

/* ROW G */
#g1 {
  grid-row-start: 7;
  grid-column-start: 1;
}

#g3 {
  grid-row-start: 7;
  grid-column-start: 3;
}

#g15 {
  grid-row-start: 7;
  grid-column-start: 15;
}

#g17 {
  grid-row-start: 7;
  grid-column-start: 17;
}

/* ROW H */
#h2 {
  grid-row-start: 8;
  grid-column-start: 2;
}

#h4 {
  grid-row-start: 8;
  grid-column-start: 4;
}

#h14 {
  grid-row-start: 8;
  grid-column-start: 14;
}

#h16 {
  grid-row-start: 8;
  grid-column-start: 16;
}


/* ROW I */
#i1 {
  grid-row-start: 9;
  grid-column-start: 1;
}

#i3 {
  grid-row-start: 9;
  grid-column-start: 3;
}

#i5 {
  grid-row-start: 9;
  grid-column-start: 5;
}

#i7 {
  grid-row-start: 9;
  grid-column-start: 7;
}

#i9 {
  grid-row-start: 9;
  grid-column-start: 9;
}

#i11 {
  grid-row-start: 9;
  grid-column-start: 11;
}

#i13 {
  grid-row-start: 9;
  grid-column-start: 13;
}

#i15 {
  grid-row-start: 9;
  grid-column-start: 15;
}

#i17 {
  grid-row-start: 9;
  grid-column-start: 17;
}

/* ROW J */
#j2 {
  grid-row-start: 10;
  grid-column-start: 2;
}

#j4 {
  grid-row-start: 10;
  grid-column-start: 4;
}

#j6 {
  grid-row-start: 10;
  grid-column-start: 6;
}

#j8 {
  grid-row-start: 10;
  grid-column-start: 8;
}

#j10 {
  grid-row-start: 10;
  grid-column-start: 10;
}

#j12 {
  grid-row-start: 10;
  grid-column-start: 12;
}

#j14 {
  grid-row-start: 10;
  grid-column-start: 14;
}

#j16 {
  grid-row-start: 10;
  grid-column-start: 16;
}

/* ROW K */
#k1 {
  grid-row-start: 11;
  grid-column-start: 1;
}

#k3 {
  grid-row-start: 11;
  grid-column-start: 3;
}

#k5 {
  grid-row-start: 11;
  grid-column-start: 5;
}

#k7 {
  grid-row-start: 11;
  grid-column-start: 7;
}

#k9 {
  grid-row-start: 11;
  grid-column-start: 9;
}

#k11 {
  grid-row-start: 11;
  grid-column-start: 11;
}

#k13 {
  grid-row-start: 11;
  grid-column-start: 13;
}

#k15 {
  grid-row-start: 11;
  grid-column-start: 15;
}

#k17 {
  grid-row-start: 11;
  grid-column-start: 17;
}

.dice-container {
  display: inline-block;
  text-align: center;
}

.dice {
  width: 50px;
  height: 50px;
  margin: 20px;
}

input:focus {
  outline: none;
}

.player1 {
  margin-top: 5px;
  margin-left: 5px;
  z-index: 2;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
  border: solid;
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #ff70a6;
}

.player2 {
  margin-top: 40px;
  margin-left: 5px;
  z-index: 2;
  position: absolute;
  grid-row-start: 11;
  grid-column-start: 17;
  border: solid;
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #70d6ff;
}

.player3 {
  margin-left: 40px;
  margin-top: 5px;
  z-index: 2;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 17;
  border: solid;
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #6eeb83;
}

.player4 {
  margin-left: 40px;
  margin-top: 40px;
  z-index: 2;
  position: absolute;
  grid-row-start: 11;
  grid-column-start: 1;
  border: solid;
  color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #907ad6;
}

.token {
  height: 40px;
  margin: 5px;
}

.token-id {
  height: 20px;
  float: left;
  margin: 10px;
}

.board-content-1 {
  width: 810px;
  height: 445px;
  z-index: 2;
  position: absolute;
  margin-top: 267px;
  margin-left: 360px;
}

.player1-container {
  width: 300px;
  margin-top: 20px;
  float: left;
  color: white;
  font-family: 'Russo One', sans-serif;
  text-shadow: 2px 2px 4px #000000;
}

.player2-container {
  width: 300px;
  float: left;
  color: white;
  font-family: 'Russo One', sans-serif;
  text-shadow: 2px 2px 4px #000000;
  margin-top: 20px;
  margin-left: 200px;
}

.player3-container {
  width: 300px;
  float: left;
  color: white;
  font-family: 'Russo One', sans-serif;
  text-shadow: 2px 2px 4px #000000;
  margin-top: 60px;
}

.player4-container {
  width: 300px;
  float: left;
  color: white;
  font-family: 'Russo One', sans-serif;
  text-shadow: 2px 2px 4px #000000;
  margin-top: 60px;
  margin-left: 200px;
}

.show-border {
  border: solid 10px;
  color: white;
}

.player1-txt {
  font-size: 45px;
  color: #ff70a6;
}

.player2-txt {
  font-size: 45px;
  color: #70d6ff;
}

.player3-txt {
  font-size: 45px;
  color: #6eeb83;
}

.player4-txt {
  font-size: 45px;
  color: #907ad6;
}

.score-container {
  font-size: 30px;
}

.board-content-2 {
  width: 720px;
  z-index: 20;
  position: absolute;
  margin-left: 405px;
  color: white;
  border-style: solid;
}

.question-container {
  font-family: 'Open Sans', sans-serif;
  color: white;
  border: solid;
  z-index: 10;
}

.board-content-3 {
  width: 620px;
  height: 110px;
  z-index: 20;
  position: absolute;
  margin-top: 840px;
  margin-left: 450px;
  color: white;
  border: solid;
  box-shadow: 2px 2px 4px #ffffff;
  background-color: black;
  border-style: solid;
}

.qr-container {
  float: left;
  background-color: black;
  margin-top: 20px;
  box-shadow: 2px 2px 4px #000000;
}

.qr-result {
  font-family: 'Russo One', sans-serif;
  color: white;
  font-size: 40px;
}

#a1, #a13, #b8, #c3, #c15, #e1, #f4, #g17, #i3, #i15, #j10, #k5, #k17  {
  background-color: purple;
  animation: flash 0.8s linear infinite;
}

#a3, #a15, #b10, #c5, #c17, #e3, #f14, #h2, #i5, #i17, #j12, #k7 {
  background-color: green;
  animation: flash 0.6s linear infinite;
}
#a5, #a17, #b12, #c7, #d2, #e5, #f16, #h4, #i7, #j2, #j14, #k9 {
  background-color: red;
  animation: flash 0.4s linear infinite;
}
#a7, #b2, #b14, #c9, #d4, #e15, #g1, #h14, #i9, #j4, #j16, #k11 {
  background-color: blue;
  animation: flash 0.3s linear infinite;
}
#a9, #b4, #b16, #c11, #d14, #e17, #g3, #h16, #i11, #j6, #k1, #k13 {
  background-color: yellow;
  animation: flash 0.8s linear infinite;
}
#a11, #b6, #c1, #c13, #d16, #f2, #g15, #i1, #i13, #j8, #k3, #k15 {
  background-color: orange;
  animation: flash 1s linear infinite;
}

@keyframes flash {
  50% {
    opacity: 0;
    background-color: white;
  }
}

.flashing {
  animation: flashing 0.5s linear infinite;
}

@keyframes flashing {
  50% {
    color: white;
  }
}

p {
  padding: 0;
  margin: 0;
}

.back-button-container {
  width: 10%;
  float: left;
  margin-left: 15px;
  margin-top: 13px;
}

.back-button {
  height: 60px;
}

.back-button:hover {
  background-color: orange;
  border-radius: 50%;
}

.back-button:focus {
  outline: none;
}
</style>

<style media="screen">
  body {
        background-color: black;
  }
</style>

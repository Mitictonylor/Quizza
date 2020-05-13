<template lang="html">
  <div id="mental" class="page-container" v-on:click="togglefullScreen()">
    <div class="game-board" ref="gameBoard">
      <div id="a1" class="grid" v-on:click="checkActive($event)">a1</div>
      <div id="a3" class="grid" v-on:click="checkActive($event)">a3</div>
      <div id="a5" class="grid" v-on:click="checkActive($event)">a5</div>
      <div id="a7" class="grid" v-on:click="checkActive($event)">a7</div>
      <div id="a9" class="grid" v-on:click="checkActive($event)">a9</div>
      <div id="a11" class="grid" v-on:click="checkActive($event)">a11</div>
      <div id="a13" class="grid" v-on:click="checkActive($event)">a13</div>
      <div id="a15" class="grid" v-on:click="checkActive($event)">a15</div>
      <div id="a17" class="grid" v-on:click="checkActive($event)">a17</div>
      <div id="b2" class="grid" v-on:click="checkActive($event)">b2</div>
      <div id="b4" class="grid" v-on:click="checkActive($event)">b4</div>
      <div id="b6" class="grid" v-on:click="checkActive($event)">b6</div>
      <div id="b8" class="grid" v-on:click="checkActive($event)">b8</div>
      <div id="b10" class="grid" v-on:click="checkActive($event)">b10</div>
      <div id="b12" class="grid" v-on:click="checkActive($event)">b12</div>
      <div id="b14" class="grid" v-on:click="checkActive($event)">b14</div>
      <div id="b16" class="grid" v-on:click="checkActive($event)">b16</div>
      <div id="c1" class="grid" v-on:click="checkActive($event)">c1</div>
      <div id="c3" class="grid" v-on:click="checkActive($event)">c3</div>
      <div id="c5" class="grid" v-on:click="checkActive($event)">c5</div>
      <div id="c7" class="grid" v-on:click="checkActive($event)">c7</div>
      <div id="c9" class="grid" v-on:click="checkActive($event)">c9</div>
      <div id="c11" class="grid" v-on:click="checkActive($event)">c11</div>
      <div id="c13" class="grid" v-on:click="checkActive($event)">c13</div>
      <div id="c15" class="grid" v-on:click="checkActive($event)">c15</div>
      <div id="c17" class="grid" v-on:click="checkActive($event)">c17</div>
      <div id="d2" class="grid" v-on:click="checkActive($event)">d2</div>
      <div id="d4" class="grid" v-on:click="checkActive($event)">d4</div>
      <div id="d14" class="grid" v-on:click="checkActive($event)">d14</div>
      <div id="d16" class="grid" v-on:click="checkActive($event)">d16</div>
      <div id="e1" class="grid" v-on:click="checkActive($event)">e1</div>
      <div id="e3" class="grid" v-on:click="checkActive($event)">e3</div>
      <div id="e15" class="grid" v-on:click="checkActive($event)">e15</div>
      <div id="e17" class="grid" v-on:click="checkActive($event)">e17</div>
      <div id="f2" class="grid" v-on:click="checkActive($event)">f2</div>
      <div id="f4" class="grid" v-on:click="checkActive($event)">f4</div>
      <div id="f14" class="grid" v-on:click="checkActive($event)">f14</div>
      <div id="f16" class="grid" v-on:click="checkActive($event)">f16</div>
      <div id="g1" class="grid" v-on:click="checkActive($event)">g1</div>
      <div id="g3" class="grid" v-on:click="checkActive($event)">g3</div>
      <div id="g15" class="grid" v-on:click="checkActive($event)">g15</div>
      <div id="g17" class="grid" v-on:click="checkActive($event)">g17</div>
      <div id="h2" class="grid" v-on:click="checkActive($event)">h2</div>
      <div id="h4" class="grid" v-on:click="checkActive($event)">h4</div>
      <div id="h14" class="grid" v-on:click="checkActive($event)">h14</div>
      <div id="h16" class="grid" v-on:click="checkActive($event)">h16</div>
      <div id="i1" class="grid" v-on:click="checkActive($event)">i1</div>
      <div id="i3" class="grid" v-on:click="checkActive($event)">i3</div>
      <div id="i5" class="grid" v-on:click="checkActive($event)">i5</div>
      <div id="i7" class="grid" v-on:click="checkActive($event)">i7</div>
      <div id="i9" class="grid" v-on:click="checkActive($event)">i9</div>
      <div id="i11" class="grid" v-on:click="checkActive($event)">i11</div>
      <div id="i13" class="grid" v-on:click="checkActive($event)">i13</div>
      <div id="i15" class="grid" v-on:click="checkActive($event)">i15</div>
      <div id="i17" class="grid" v-on:click="checkActive($event)">i17</div>
      <div id="j2" class="grid" v-on:click="checkActive($event)">j2</div>
      <div id="j4" class="grid" v-on:click="checkActive($event)">j4</div>
      <div id="j6" class="grid" v-on:click="checkActive($event)">j6</div>
      <div id="j8" class="grid" v-on:click="checkActive($event)">j8</div>
      <div id="j10" class="grid" v-on:click="checkActive($event)">j10</div>
      <div id="j12" class="grid" v-on:click="checkActive($event)">j12</div>
      <div id="j14" class="grid" v-on:click="checkActive($event)">j14</div>
      <div id="j16" class="grid" v-on:click="checkActive($event)">j16</div>
      <div id="k1" class="grid" v-on:click="checkActive($event)">k1</div>
      <div id="k3" class="grid" v-on:click="checkActive($event)">k3</div>
      <div id="k5" class="grid" v-on:click="checkActive($event)">k5</div>
      <div id="k7" class="grid" v-on:click="checkActive($event)">k7</div>
      <div id="k9" class="grid" v-on:click="checkActive($event)">k9</div>
      <div id="k11" class="grid" v-on:click="checkActive($event)">k11</div>
      <div id="k13" class="grid" v-on:click="checkActive($event)">k13</div>
      <div id="k15" class="grid" v-on:click="checkActive($event)">k15</div>
      <div id="k17" class="grid" v-on:click="checkActive($event)">k17</div>


      <div class="board-content-1">
          <div class="skull">
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
              <!-- <div class="dice-container"> -->
          <!-- <input class="dice" type="image" :src="getDiceFace()" v-on:click="randomDice()"></input>
        </div>
            <div class="player-container">
              <img class="token-id" :src="players[0].token">
              <p class="player-txt1" v-if="players[0].name && players[1].name"> {{players[0].name.toUpperCase()}}</p>
              <div class="score-container">
                <p>SCORE: {{players[0].score}}</p>
              </div>
            </div>
            <div class="player-container">
              <img class="token-id" :src="players[1].token">
              <p class="player-txt2" v-if="players[0].name && players[1].name"> {{players[1].name.toUpperCase()}}</p>
              <div class="score-container">
                <p>SCORE: {{players[1].score}}</p>
              </div>
            </div> -->
            <!-- <div v-if="players[2].name" class="player-container">
              <img class="token-id" :src="players[2].token">
              <p class="player-txt3"> {{players[2].name.toUpperCase()}}</p>
              <div class="score-container">
                <p>SCORE: {{players[2].score}}</p>
              </div>
            </div>
            <div v-if="players[3].name" class="player-container">
              <img class="token-id" :src="players[3].token">
              <p class="player-txt4"> {{players[3].name.toUpperCase()}}</p>
              <div class="score-container">
                <p>SCORE: {{players[3].score}}</p>
              </div> -->
          </div>
      </div>

      <div class="board-content-2" v-if='randomQuestion'>
        <div class="question-container">
          <questions  :randomQuestion="randomQuestion"class="question"></questions>
        </div>
      </div>

      <div v-if="questionResult" class="board-content-3">
        <div class="general-container">
        </div>
        <div class="qr-container">
          <p class="qr-result">{{questionResult}}</p>
        </div>
      </div>

      <div id="player1" class="player1" v-if="players[0].name"> <img class="token" :src="players[0].token"> </div>
      <div id="player2" class="player2" v-if="players[1].name"> <img class="token" :src="players[1].token"></div>
      <div id="player3" class="player3" v-if="players[2].name"> <img class="token" :src="players[2].token"></div>
      <div id="player4" class="player4" v-if="players[3].name"> <img class="token" :src="players[3].token"></div>
    </div>
  </div>
</div>
</template>

<script>
import {MentalTileObjects} from '@/config/MentalTileObjects.js'
import player1 from '@/assets/tokens/circle_red.png';
import player2 from '@/assets/tokens/circle_blue.png';
import player3 from '@/assets/tokens/circle_yellow.png';
import player4 from '@/assets/tokens/circle_green.png';
import Questions from "@/components/Questions.vue"
import {eventBus} from '../main.js';
require('@/assets/css/skull.css');

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

      player: {
        id: 1,
        currentPosition: 'f9'
      },
      questionResult: null,
      answeredQuestions:[],
      randomQuestion: null,
      moveOptions: null,
      fullscreen: false,
      currentTile: 'a1',
      gamePlayers: [],
      players: [ //keep it for the initial rendering
        {
          alias: "player1",
          name: '',
          score: 0,
          active: false,
          currentPosition: 'a1',
          id: 1,
          token: player1
        },
        {
          alias: "player2",
          name: '',
          score: 0,
          active: false,
          currentPosition: 'k17',
          id: 2,
          token: player2
        },
        {
          alias: "player3",
          name: '',
          score: 0,
          active: false,
          currentPosition: 'a17',
          id: 3,
          token: player3
        },
        {
          alias: "player4",
          name: '',
          score: 0,
          active: false,
          currentPosition: 'k17',
          id: 4,
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
      ], //-all
      fullScreen: false


    }
  },
  methods: {
    randomDice() {
      this.diceResult = this.dice[Math.floor(Math.random() * 6)]
      return this.showMoveOptions()
      this.disableTheDice();
    },
    getDiceFace() {
      return require('@/assets/dice/' + this.diceResult + '.png')
    },
    showMoveOptions() {
      this.disableTheDice()
      const randomGridTile = MentalTileObjects[Math.floor(Math.random() * 72)].id
      const moveOption = document.querySelector(`#${randomGridTile}`);
      moveOption.style.color = 'red';
      this.activePlayer(this.gamePlayers).currentPosition = randomGridTile
    },
    resetMoveOptions() {
      const active = this.activePlayer(this.gamePlayers).currentPosition
      const moveOption = document.querySelector(`#${active}`);
      moveOption.style.color = 'black';
    },
    getNewRowPosition(event) {
      const divID = event.currentTarget.id;
      const index = MentalTileObjects.map(x => x.id).indexOf(divID);
      return MentalTileObjects[index]['row'];
    },
    getNewColPosition(event) {
      const divID = event.currentTarget.id;
      const index = MentalTileObjects.map(x => x.id).indexOf(divID);
      return MentalTileObjects[index]['column'];
    },
    checkActive(event) {
      if (this.activePlayer(this.gamePlayers).currentPosition === event.currentTarget.id) {
        return this.movePlayer(event)
      }
    },
    movePlayer(event) {
      const activePlayer = document.querySelector(`#${this.activePlayer(this.gamePlayers).alias}`);
      activePlayer.style.cssText = `grid-row-start: ${this.getNewRowPosition(event)};
                                    grid-column-start: ${this.getNewColPosition(event)};`
      this.activePlayer(this.gamePlayers).currentPosition = event.currentTarget.id;
      this.resetMoveOptions()
      this.stealPoints(this.activePlayer(this.gamePlayers), this.gamePlayers)
      this.loosePoints(this.arrayLoose, this.activePlayer(this.gamePlayers))
      this.addPoints(this.extraPoint, this.activePlayer(this.gamePlayers))
      const randomCategoryAndId = this.getRandomCategory(this.categoriesAndId)
      this.loadRandomQuestion(randomCategoryAndId);
;
    },
    togglefullScreen () {
      // if (this.fullScreen === false) {
      //   const element = document.querySelector('#mental');
      //   element.requestFullscreen();
      //   this.fullScreen = true;
      // }
    },
    filteredPlayers() {
      const playersWithName = this.players.filter((player) => {
        return player.name !== ''
      });
      this.gamePlayers = playersWithName;
    },
    activePlayer(players) {
      const activePlayer = players.find(player => player.active === true);
      this.nextPlayer = activePlayer
      return activePlayer;
    },
    stealPoints(activePlayer, arrayOfPlayers) {
      const deactivatedPlayers = arrayOfPlayers.filter(player => player.active === false)
      const sameCurrentPosition = deactivatedPlayers.filter(player => player.currentPosition === activePlayer.currentPosition)
      if (sameCurrentPosition.length >= 1) {
        sameCurrentPosition.forEach((player) => {
            this.questionResult = `You and ${player.name} lost all the points!`
            activePlayer.score = 0
            player.score = 0
          })
        }
      },

    loosePoints(array, activePlayer) {
      if (array[0].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 4
        this.questionResult = "PUAHAHAHAH You lost 4 point!!! PUAHAHAHAH"
      } else if (array[1].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 7
        this.questionResult = "PUAHAHAHAH You lost 7 points!!! PUAHAHAHAH"
      } else if (array[2].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 13
        this.questionResult = "PUAHAHAHAH You lost 13 points!!! PUAHAHAHAH"
      } else if (array[3].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 17
        this.questionResult = "PUAHAHAHAH You lost 17 points!!! PUAHAHAHAH"
      } else if (array[4].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 25
        this.questionResult = "PUAHAHAHAH You lost 25 points!!! PUAHAHAHAH"
      } else if (array[5].includes(activePlayer.currentPosition)) {
        if (activePlayer.score > 0){
        activePlayer.score = 0
        this.questionResult = "SHOCKING!!!You lost all your points!!! PUAHAHAHAH"}
        else {
          activePlayer.score = 0
          this.questionResult = "YOU LUCKY BUM ur debit has been removed"
        }
      }
    },
    addPoints(array, activePlayer) {
      if (array[0].includes(activePlayer.currentPosition)) {
        activePlayer.score += 3
        this.questionResult = "YAASSS! You found 3 point!!!"
      } else if (array[1].includes(activePlayer.currentPosition)) {
        activePlayer.score += 5
        this.questionResult = "YAASSS! You found 5 point!!!"
      } else if (array[2].includes(activePlayer.currentPosition)) {
        activePlayer.score += 9
        this.questionResult = "YAASSS! You found 9 point!!!"
      } else if (array[3].includes(activePlayer.currentPosition)) {
        activePlayer.score += 17
        this.questionResult = "YAASSS! You found 17 point!!!"
      } else if (array[4].includes(activePlayer.currentPosition)) {
        activePlayer.score += 33
        this.questionResult = "YAASSS! You found 33 point!!!"
      } else if (array[5].includes(activePlayer.currentPosition)) {
        activePlayer.score += 100
        this.questionResult = "OMG! You found 100 point!!!"
      }
    },

    updateNames() {
      this.players[0].name = this.player1;
      this.players[1].name = this.player2;
      this.players[2].name = this.player3;
      this.players[3].name = this.player4;
      this.filteredPlayers();
      this.gamePlayers[0].active = true;
      this.nextPlayer = this.activePlayer(this.gamePlayers)
    },
    loadRandomQuestion(categoryAndID) {
      const url = `https://opentdb.com/api.php?amount=1&category=${categoryAndID[1]}&type=multiple`;
      fetch(url).then(response => response.json())
        .then(data => {
          const query = data.results[0]
          const options = query.incorrect_answers.map(answer => answer);
          options.push(query.correct_answer);
          if (!this.answeredQuestions.includes(query.question)) {
            this.randomQuestion = {
              options: options,
              question: query.question,
              correct_answer: query.correct_answer,
              category: query.category
            }
            this.answeredQuestions.push(this.randomQuestion.question)
          } else {
            this.loadRandomQuestion(this.getRandomCategory(this.categoriesAndId));
          }
        })
    },
    getRandomCategory(categoryArray) {
      const category = categoryArray[Math.floor(Math.random() * categoryArray.length)]
      return category
    },
    addPoint(player) {
      player.score += 1
    },
    checkWinCondition(activePlayer) {
      if (activePlayer.score === 666) {
        return true //The game finish here
      }
  },
  disableTheDice() {
    const dice = document.querySelector(".dice")
    dice.style.pointerEvents = 'none';
  }, //Find the Dice class and re-enable the click event
  enableTheDice() {
    const dice = document.querySelector(".dice")
    dice.style.pointerEvents = 'auto';

  },
  findIndexOfPlayer(player) {
    const index = this.gamePlayers.indexOf(player);
    return index;
  },
  switchActivePlayer(player, players) {
    const index = this.findIndexOfPlayer(player);
    players[index].active = false;
    if (index < (players.length - 1)) {
      players[(index + 1)].active = true;
    } else {
      players[0].active = true
    }
  }
},
  mounted(){
    this.updateNames()

    eventBus.$on('selected-option', (option) => {
      this.questionResult = null;
      const playerActive = this.activePlayer(this.gamePlayers);
      const question = this.randomQuestion;

      if (option === question.correct_answer) {
        this.nextPlayer = null
        this.questionResult = "Correct! +1 point- roll again!"
        this.addPoint(playerActive);
        if (this.checkWinCondition(playerActive)) {
          this.nextPlayer = null
          this.questionResult = "Congratulations - you've WON!"
          this.disableTheDice()
          this.randomQuestion = null
        } else {
          this.nextPlayer = null
          this.randomQuestion = null;
          //create a new question in either cases
          this.enableTheDice();
        }
      } else {
        this.nextPlayer = null
        this.questionResult = "Boooo - better luck next time!"
        this.enableTheDice()
        this.switchActivePlayer(playerActive, this.gamePlayers);
        this.randomQuestion = null;

      }
    })
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
}

.grid:hover {
  cursor: pointer;
  color: blue;
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
  z-index: 2;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
}
.player2 {
  margin-top: 40px;
  z-index: 2;
  position: absolute;
  grid-row-start: 11;
  grid-column-start: 17;
}

.player3 {
  margin-left: 40px;
  z-index: 2;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 17;
}

.player4 {
  margin-left: 40px;
  margin-top: 40px;
  z-index: 2;
  position: absolute;
  grid-row-start: 11;
  grid-column-start: 1;
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

.player-container {
  width: 25%;
  float: left;
  color: white;
  font-family: 'Russo One', sans-serif;
  text-shadow: 2px 2px 4px #000000;
  margin-top: 4px;
}

P {
  font-size: 25px;
  font-weight: bold;
  color: blue;
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
  height: 350px;
  z-index: 20;
  position: absolute;
  margin-top: 620px;
  margin-left: 450px;
  color: white;
  border: solid;
  box-shadow: 8px 8px 16px #ffffff;
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
</style>

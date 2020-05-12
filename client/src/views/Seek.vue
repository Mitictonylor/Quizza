<template lang="html">
  <div id="seek" class="page-container" v-on:click="togglefullScreen()">
    <div class="game-board" ref="gameBoard">
      <div id="g1" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g2" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g3" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g4" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g5" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g6" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g7" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g8" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g9" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g10" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g11" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g12" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g13" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g14" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g15" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g16" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g17" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g18" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g19" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g20" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g21" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g22" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g23" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g24" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g25" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g26" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g27" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g28" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g29" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g30" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g31" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g32" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g33" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g34" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g35" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g36" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g37" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g38" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g39" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g40" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g41" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g42" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g43" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g44" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g45" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g46" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g47" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g48" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g49" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g50" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g51" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g52" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g53" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g54" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g55" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g56" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g57" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g58" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g59" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g60" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g61" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g62" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g63" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g64" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g65" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g66" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g67" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g68" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g69" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g70" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g71" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g72" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g73" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g74" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g75" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g76" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g77" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g78" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g79" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g80" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g81" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g82" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g83" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g84" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g85" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g86" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g87" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g88" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g89" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g90" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g91" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g92" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g93" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g94" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g95" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g96" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g97" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g98" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g99" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g100" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g101" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g102" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g103" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g104" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g105" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g106" class="grid" v-on:click="checkActive($event)"></div>
      <div id="g107" class="grid" v-on:click="checkActive($event)"></div>

      <div class="board-content-1">
        <div class="np-name">
          <p v-if="nextPlayer">{{nextPlayer.name.toUpperCase()}}  you're up!</p>
        </div>
        <div class="qr">
          <p>{{questionResult}}</p>
        </div>
        <div class="dice-container">
          <input class="dice" type="image" :src="getDiceFace()" v-on:click="randomDice()"></input>
        </div>
      </div>

      <div class="board-content-2">
        <div class="player-container">
          <img class="tank-id" :src="players[0].token">
          <p class="player-txt1" v-if="players[0].name && players[1].name"> {{players[0].name.toUpperCase()}}</p>
          <div class="score-container">
            <p>SCORE: {{players[0].score}}</p>
          </div>
        </div>
        <div class="player-container">
          <img class="tank-id" :src="players[1].token">
          <p class="player-txt2" v-if="players[0].name && players[1].name"> {{players[1].name.toUpperCase()}}</p>
          <div class="score-container">
            <p>SCORE: {{players[1].score}}</p>
          </div>
        </div>
        <div v-if="players[2].name" class="player-container">
          <img class="tank-id" :src="players[2].token">
          <p class="player-txt3"> {{players[2].name.toUpperCase()}}</p>
          <div class="score-container">
            <p>SCORE: {{players[2].score}}</p>
          </div>
        </div>
        <div v-if="players[3].name" class="player-container">
          <img class="tank-id" :src="players[3].token">
          <p class="player-txt4"> {{players[3].name.toUpperCase()}}</p>
          <div class="score-container">
            <p>SCORE: {{players[3].score}}</p>
          </div>
      </div>
      </div>

      <div class="board-content-3">
        <div class="question-container">
          <questions v-if='randomQuestion' :randomQuestion="randomQuestion"class="question"></questions>
        </div>
      </div>

      <div class="board-content-4">
      </div>

      <div class="board-content-5" v-if="questionResult">
        <p>{{questionResult}}</p>
      </div>

      <div id="player1" class="player1" v-if="players[0].name"> <img class="tank" :src="players[0].token"> </div>
      <div id="player2" class="player2" v-if="players[1].name"> <img class="tank" :src="players[1].token"></div>
      <div id="player3" class="player3" v-if="players[2].name"> <img class="tank" :src="players[2].token"></div>
      <div id="player4" class="player4" v-if="players[3].name"> <img class="tank" :src="players[3].token"></div>

    </div>
  </div>
</div>
</template>

<script>
import {SeekTileObjects} from '@/config/SeekTileObjects.js'
import Questions from "@/components/Questions.vue"
import {eventBus} from '../main.js';
import tank1 from '@/assets/tanks/tank1.png';
import tank2 from '@/assets/tanks/tank2.png';
import tank3 from '@/assets/tanks/tank3.png';
import tank4 from '@/assets/tanks/tank4.png';

export default {
  name: 'seek',
  components: {
    'questions': Questions
  },
  props: ['player1', 'player2', 'player3', 'player4'],
  data() {
    return {
      dice: [1, 2, 3, 4, 5, 6],
      diceResult: 6,
      nextPlayer: null,
      categoriesAndId: [
        ['sport', 21],
        ['geography', 22],
        ['general_knowledge', 9],
        ['history', 23],
        ['animal', 27],
        ['science_and_nature', 17]
      ],
      message:"",
      gamePlayers: [],
      players: [ //keep it for the initial rendering
        {
          alias: "player1",
          name: '',
          score: 0,
          winStreak: 0,
          active: false,
          currentPosition: 1,
          id: 1,
          token: tank1
        },
        {
          alias: "player2",
          name: '',
          score: 0,
          winStreak: 0,
          active: false,
          currentPosition: 1,
          id: 2,
          token: tank2
        },
        {
          alias: "player3",
          name: '',
          score: 0,
          winStreak: 0,
          active: false,
          currentPosition: 1,
          id: 3,
          token: tank3
        },
        {
          alias: "player4",
          name: '',
          score: 0,
          winStreak: 0,
          active: false,
          currentPosition: 1,
          id: 4,
          token: tank4
        }
      ],
      answeredQuestions: [],
      moveOption: null,
      fullscreen: false,
      randomQuestion: null,
      questionResult: null,
      arrayLoose: [
        [5, 10, 15], //-1
        [20, 25, 30], //-2
        [35, 40, 45], //-3
        [50, 55, 60, 65], //-4
        [70, 75, 80, 85], //-5
        [90, 105]
      ], //-all

      extraPoint: [
        [3, 6, 9, 12, 14, 16, 18, 21, 37, 58, 62, 68], //+1
        [4, 7, 13, 19, 23, 26, 29, 31, 39, 63, 69], //+2
        [17, 21, 33, 36, 41, 44, 76, 82, 86, 92, 103], //+3
        [49, 56, 64, 71, 106], //+4
        [74, 79, 84, 89, 104], //+5
        [91, 102]
      ],//+25
    }
  },
  methods: {
// this.dice[Math.floor(Math.random() * 6)]
  randomDice() {
      this.diceResult = 4
      this.showMoveOptions()
      this.questionResult = null;
      this.disableTheDice();
    },
    getDiceFace() {
      return require('@/assets/dice/' + this.diceResult + '.png')
    },

    stealPoints(activePlayer, arrayOfPlayers) {
      const deactivatedPlayers = arrayOfPlayers.filter(player => player.active === false)
      console.log(deactivatedPlayers)
      const checkCurrentPosition = deactivatedPlayers.filter(player => player.currentPosition === activePlayer.currentPosition)
      console.log(checkCurrentPosition);
      console.log('active player score', activePlayer.score);
      if (checkCurrentPosition.length >= 1) {
        checkCurrentPosition.forEach((player) => {
          console.log('giocatorenon attivo score prima', player.score)
          activePlayer.score += player.score;
          player.score = 0
          console.log('giocatorenon attivo score dopo', player.score)
          console.log('giocatoreAttivo score dopo', activePlayer.score)
        })
      };
    },

    loosePoints(array, activePlayer) {
      if (array[0].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 1
        this.message="BOOOOM! You lost 1 point!!! PUAHAHAHAH"
      } else if (array[1].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 2
        this.message="BOOOOM! You lost 2 point!!! PUAHAHAHAH"
      } else if (array[2].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 3
        this.message="BOOOOM! You lost 3 point!!! PUAHAHAHAH"
      } else if (array[3].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 4
        this.message="BOOOOM! You lost 4 point!!! PUAHAHAHAH"
      } else if (array[4].includes(activePlayer.currentPosition)) {
        activePlayer.score -= 5
        this.message="BOOOOM! You lost 5 point!!! PUAHAHAHAH"
      } else if (array[5].includes(activePlayer.currentPosition)) {
        activePlayer.score = 0
        this.message="BOOOOM! You lost 1 point!!! PUAHAHAHAH"
      }
    },
    AddPoints(array, activePlayer) {
      if (array[0].includes(activePlayer.currentPosition)) {
        activePlayer.score += 1
        this.message="BOOOOM! You lost 1 point!!! PUAHAHAHAH"

      } else if (array[1].includes(activePlayer.currentPosition)) {
        activePlayer.score += 2
      } else if (array[2].includes(activePlayer.currentPosition)) {
        activePlayer.score += 3
      } else if (array[3].includes(activePlayer.currentPosition)) {
        activePlayer.score += 4
      } else if (array[4].includes(activePlayer.currentPosition)) {
        activePlayer.score += 5
      } else if (array[5].includes(activePlayer.currentPosition)) {
        activePlayer.score += 25
      }
    },



    showMoveOptions() { //current position:106 + dice.result 4 =110
      let total = (this.activePlayer(this.gamePlayers).currentPosition + this.diceResult)
      if (total > 107) { //yes
        const difference = total - 107 //3   currentPosition:105 -3 g102
        const newDivID = 'g' + (107 - difference)
        const moveOption = document.querySelector(`#${newDivID}`);
        moveOption.classList.add("flashing");
        this.moveOption = newDivID
        this.activePlayer(this.gamePlayers).currentPosition = 107 - difference
      } else {
        //aggiungimi da current position a 107 ed il di piû me lo sotrrai da current poisition
        const divID = 'g' + total
        const moveOption = document.querySelector(`#${divID}`);
        moveOption.classList.add("flashing");
        this.moveOption = divID
        this.activePlayer(this.gamePlayers).currentPosition = total
      }
      total = 0
    },
    resetMoveOptions() {
      const moveOption = document.querySelector(`#${this.moveOption}`);
      moveOption.classList.remove("flashing");
      this.moveOption = null;
    },
    getNewRowPosition(event) {
      const divID = event.currentTarget.id;
      const index = SeekTileObjects.map(x => x.id).indexOf(divID);
      return SeekTileObjects[index]['row'];
    },
    getNewColPosition(event) {
      const divID = event.currentTarget.id;
      const index = SeekTileObjects.map(x => x.id).indexOf(divID);
      return SeekTileObjects[index]['column'];
    },
    checkActive(event) {
      if (this.moveOption === event.currentTarget.id) {
        return this.movePlayer(event)
      }
    },
    movePlayer(event) {
      const activePlayer = document.querySelector(`#${this.activePlayer(this.gamePlayers).alias}`);
      activePlayer.style.cssText = `grid-row-start: ${this.getNewRowPosition(event)};
                                    grid-column-start: ${this.getNewColPosition(event)};`
      const index = this.findIndexOfPlayer(this.activePlayer(this.gamePlayers))
      this.stealPoints(this.activePlayer(this.gamePlayers), this.gamePlayers)
      this.loosePoints(this.arrayLoose, this.activePlayer(this.gamePlayers))
      this.resetMoveOptions();
      const randomCategoryAndId = this.getRandomCategory(this.categoriesAndId)
      this.loadRandomQuestion(randomCategoryAndId);
    },
    togglefullScreen() {
      const element = document.querySelector('#seek');
      element.requestFullscreen();
    },
    filteredPlayers() {
      const playersWithName = this.players.filter((player) => {
        return player.name !== ''
      });
      this.gamePlayers = playersWithName;
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
    findIndexOfPlayer(player) {
      const index = this.gamePlayers.indexOf(player);
      return index;
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
    activePlayer(players) {
      const activePlayer = players.find(player => player.active === true);
      this.nextPlayer = activePlayer
      return activePlayer;
    },
    addPoint(player) {
      player.score += 1
    },

    checkWinCondition(activePlayer) {
      if (activePlayer.currentPosition === 107) {
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

  mounted() {
    this.updateNames();

    eventBus.$on('selected-option', (option) => {
      const playerActive = this.activePlayer(this.gamePlayers);
      console.log('player Active:' + playerActive.alias);
      const question = this.randomQuestion;
      console.log("Question Answered: ", question);
      // console.log(option);
      // console.log(question.correct_answer);

      if (option === question.correct_answer) {
        this.nextPlayer = null
        this.questionResult = "Correct - roll again!"
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
        console.log("HERE", playerActive);
        this.randomQuestion = null;
        // this.enableTheDice();
      }
    })
  }
}
</script>

<style lang="css" scoped>
.page-container {
  border-style: solid;
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
}

.grid {
  border-style: solid;
  box-sizing: border-box;
  width: 90px;
  height: 89px;
  font-size: 40px;
  box-shadow: 2px 2px 4px #000000;
  background-image: url('../assets/Tiles/10.png');
}

.grid:hover {
  cursor: pointer;
}

.flashing {
  animation: flash 0.5s ease infinite;
}

@keyframes flash {
  50% {
    opacity: 70%;
  }
}

/* c X ROW */
#g19, #g20, #g21, #g22, #g23, #g24, #g25, #g26, #g27, #g28, #g29, #g30, #g31, #g32, #g33, #g34, #g35 {
  grid-row: 3;
}

#g19 {
  grid-column-start: 17;
}

#g20 {
  grid-column-start: 16;
}

#g21 {
  grid-column-start: 15;
}

#g22 {
  grid-column-start: 14;
}

#g23 {
  grid-column-start: 13;
}

#g24 {
  grid-column-start: 12;
}

#g25 {
  grid-column-start: 11;
}

#g26 {
  grid-column-start: 10;
}

#g27 {
  grid-column-start: 9;
}

#g28 {
  grid-column-start: 8;
}

#g29 {
  grid-column-start: 7;
}

#g30 {
  grid-column-start: 6;
}

#g31 {
  grid-column-start: 5;
}

#g32 {
  grid-column-start: 4;
}

#g33 {
  grid-column-start: 3;
}

#g34 {
  grid-column-start: 2;
}

#g35 {
  grid-column-start: 1;
}

/* e X ROW */
#g37, #g38, #g39, #g40, #g41, #g42, #g43, #g44, #g45, #g46, #g47, #g48, #g49, #g50, #g51, #g52, #g53 {
  grid-row-start: 5;
}

/* g X ROW */
#g55, #g56, #g57, #g58, #g59, #g60, #g61, #g62, #g63, #g64, #g65, #g66, #g67, #g68, #g69, #g70, #g71 {
  grid-row-start: 7;
}

#g55 {
  grid-column-start: 17;
}

#g56 {
  grid-column-start: 16;
}

#g57 {
  grid-column-start: 15;
}

#g58 {
  grid-column-start: 14;
}

#g59 {
  grid-column-start: 13;
}

#g60 {
  grid-column-start: 12;
}

#g61 {
  grid-column-start: 11;
}

#g62 {
  grid-column-start: 10;
}

#g63 {
  grid-column-start: 9;
}

#g64 {
  grid-column-start: 8;
}

#g65 {
  grid-column-start: 7;
}

#g66 {
  grid-column-start: 6;
}

#g67 {
  grid-column-start: 5;
}

#g68 {
  grid-column-start: 4;
}

#g69 {
  grid-column-start: 3;
}

#g70 {
  grid-column-start: 2;
}

#g71 {
  grid-column-start: 1;
}

/* i X ROW */
#g73, #g74, #g75, #g76, #g77, #g78, #g79, #g80, #g81, #g82, #g83, #g84, #g85, #g86, #g87, #g88, #g89 {
  grid-row-start: 9;
}

/* BOTTOM X ROW */
#g91, #g92, #g93, #g94, #g95, #g96, #g97, #g98, #g99, #g100, #g101, #g102, #g103, #g104, #g105, #g106, #g107 {
  grid-row-start: 11;
}

#g91 {
  grid-column-start: 17;
}

#g92 {
  grid-column-start: 16;
}

#g93 {
  grid-column-start: 15;
}

#g94 {
  grid-column-start: 14;
}

#g95 {
  grid-column-start: 13;
}

#g96 {
  grid-column-start: 12;
}

#g97 {
  grid-column-start: 11;
}

#g98 {
  grid-column-start: 10;
}

#g99 {
  grid-column-start: 9;
}

#g100 {
  grid-column-start: 8;
}

#g101 {
  grid-column-start: 7;
}

#g102 {
  grid-column-start: 6;
}

#g103 {
  grid-column-start: 5;
}

#g104 {
  grid-column-start: 4;
}

#g105 {
  grid-column-start: 3;
}

#g106 {
  grid-column-start: 2;
}

#g107 {
  grid-column-start: 1;
}

/* STRAGGLERS */
#g54 {
  grid-row-start: 6;
}

#g90 {
  grid-row-start: 10;
}

/* LEFT Y COL */
#g1, #g35, #g36, #g37, #g71, #g72, #g73 {
  grid-column-start: 1;
}

#g73 {
  grid-row-start: 9;
}

#g72 {
  grid-row-start: 8;
}

#g71 {
  grid-row-start: 7;
}

#g37 {
  grid-row-start: 5;
}

#g36 {
  grid-row-start: 4;
}

#g35 {
  grid-row-start: 3;
}
/* LEFT Y COL END */

/* RIGHT Y COL */
#g17, #g18, #g19, #g53, #g54, #g55, #g89, #g90, #g91 {
  grid-column-start: 17;
}

.dice-container {
  /* margin-top: 40px; */
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
  margin-top: 20px;
  padding: 0;
}
.player2 {
  z-index: 3;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
}
.player3 {
  z-index: 4;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
  margin-left: 25px;
}
.player4 {
  z-index: 5;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
  margin-left: 25px;
  margin-top: 20px;
}

.board-content-1 {
  width: 1430px;
  height: 81px;
  z-index: 2;
  position: absolute;
  margin-top: 89px;
}
.board-content-2 {
  width: 1430px;
  height: 81px;
  z-index: 2;
  position: absolute;
  margin-top: 267px;
  margin-left: 90px;
}

.board-content-3 {
  width: 1430px;
  height: 81px;
  z-index: 2;
  position: absolute;
  margin-top: 380px;
}

.board-content-4 {
  width: 1430px;
  height: 81px;
  z-index: 2;
  position: absolute;
  margin-top: 623px;
  margin-left: 90px;
}

.board-content-5 {
  width: 1430px;
  height: 81px;
  z-index: 2;
  position: absolute;
  margin-top: 801px;
}

P {
  padding: 0;
  margin: 0;
}

#seek {
  background-image: url('../assets/images/grass.jpg');
  background-position: center;
  background-size: cover;
}

.tank {
  width: 80px;
}

.tank-id {
  width: 60px;
  float: left;
  margin: 10px;
}

.player-container {
  width: 25%;
  float: left;
  color: white;
  font-family: 'Russo One', sans-serif;
  text-shadow: 2px 2px 4px #000000;
}

.player-txt1 {
  float: left;
  font-size: 35PX;
  margin-top: 20px;
  color: #ff70a6;
}

.player-txt2 {
  float: left;
  font-size: 35PX;
  margin-top: 20px;
  color: #70d6ff;
}

.player-txt3 {
  float: left;
  font-size: 35px;
  margin-top: 20px;
  color: #6eeb83;
}

.player-txt4 {
  float: left;
  font-size: 35px;
  margin-top: 20px;
  color: #907ad6;
}

.score-container {
  float: left;
  margin-left: 20px;
  font-size: 20px;
  margin-top: 25px;
}

.question-container {
  width: 50%;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  color: white;
}

.np-name {
  float: left;
  font-family: 'Russo One', sans-serif;
  font-size: 35px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  margin-top: 20px;
  width: 30%;
}

.qr {
  float: left;
  font-family: 'Russo One', sans-serif;
  font-size: 35px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  margin-top: 20px;
  width: 40%;
}



</style>

<template lang="html">
  <div>
    <div class="page-container">
      <div class="game-board-container">
        <div class="game-board">
          <div id="a1" class="tile"></div>
          <div id="a2" class="tile"></div>
          <div id="a3" class="tile"></div>
          <div id="a4" class="tile"></div>
          <div id="a5" class="tile"></div>
          <div id="a6" class="tile"></div>
          <div id="a7" class="tile"></div>
          <div id="b1" class="tile"></div>
          <div id="b4" class="tile"></div>
          <div id="b7" class="tile"></div>
          <div id="c1" class="tile"></div>
          <div id="c4" class="tile"></div>
          <div id="c7" class="tile"></div>
          <div id="d1" class="tile"></div>
          <div id="d2" class="tile"></div>
          <div id="d3" class="tile"></div>
          <div id="d4" class="tile"></div>
          <div id="d5" class="tile"></div>
          <div id="d6" class="tile"></div>
          <div id="d7" class="tile"></div>
          <div id="e1" class="tile"></div>
          <div id="e4" class="tile"></div>
          <div id="e7" class="tile"></div>
          <div id="f1" class="tile"></div>
          <div id="f4" class="tile"></div>
          <div id="f7" class="tile"></div>
          <div id="g1" class="tile"></div>
          <div id="g2" class="tile"></div>
          <div id="g3" class="tile"></div>
          <div id="g4" class="tile"></div>
          <div id="g5" class="tile"></div>
          <div id="g6" class="tile"></div>
          <div id="g7" class="tile"></div>

          <div class="board-content-top-left"></div>
          <div class="board-content-top-right"></div>
          <div class="board-content-bottom-right"></div>
          <div class="board-content-bottom-left"></div>

        </div>
      </div>
    </div>
    <!-- <div>
      <player-form v-if="!players[0].name && !players[1].name"></player-form>
    </div>

    <div>
      <questions v-if="selectedCategory.length > 0 && randomQuestion":randomQuestion="randomQuestion"></questions>
    </div>

    <div class="player" >
      <p v-if="players[0].name && players[1].name">{{players[0].name}} categories:{{players[0].score}} </p>
      <p v-if="players[0].name && players[1].name">{{players[1].name}} categories:{{players[1].score}} </p>
    </div>

    <div class="button">
      <button v-if="players[0].name && players[1].name" type="button" name="button" v-on:click="randomQuest">{{activePlayer(players).name}}THROW THE DICE</button>
    </div> -->

  </div>
</template>

<script>
  import PlayerForm from '@/components/PlayerForm.vue';
  import {eventBus} from '../main.js';
  import Questions from "@/components/Questions.vue";

  export default {
    name: 'board-game',
    data() {
      return {
        categories: {
          sport: [],
          geography: [],
          general_knowledge: [],
          history: [],
          animal: [],
          science_and_nature: []
        },
        players: [
        { alias: "player1",
          name: '',
          score: [],
          winStreak: 0,
          active: false },
        { alias: "player2",
          name: '',
          score: [],
          winStreak: 0,
          active: false }
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
      'player-form': PlayerForm
    },
    methods: {
    //Create a random question from the selected Category
    //will be invoked when the token end up to a piece of the board
    randomQuest() {
      this.loadRandomForSelected(this.categoriesAndId);
      const query = this.selectedCategory[Math.floor(Math.random() * this.selectedCategory.length)];
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
      } else if (this.answeredQuestions.length === 49) { //needs to change when we gonna randomize the sel cat
          this.loadSelected();
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
    loadRandomForSelected(categoryArray) {
      const index = Math.floor(Math.random() * 6);
      const catId = categoryArray[index][1];
      const url = `https://opentdb.com/api.php?amount=50&category=${catId}&type=multiple`;
      fetch(url).then(response => response.json())
      .then(data => this.selectedCategory = data.results)
    },
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
      const index = this.players.indexOf(player);
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
    }
    },
    mounted() {
      //JUST FOR TESTING
      this.loadRandomForSelected(this.categoriesAndId);

      this.loadAllCategories(this.categoriesAndId);

      //Check if the clicked answer is right if yes should update the score
      eventBus.$on('selected-option', (option) => {
        const playerActive = this.activePlayer(this.players);
        const question = this.randomQuestion;

        if (option === question.correct_answer) {
          alert("well done");
          this.addWonCategory(playerActive, question.category, this.players);
          this.randomQuestion = null;
          alert("Throw the dice again"); //create a new question in either cases
        } else {
          alert("boooo");
          this.switchActivePlayer(playerActive, this.players);
          this.randomQuestion = null;
        }
      });

      //takes the name from the form
      eventBus.$on('add-players', (players) => {
        this.players[0].name = players[0];
        this.players[1].name = players[1];
        this.players[0].active = true;
      });
     }
   }
</script>

<style lang="css" scoped>
.page-container {
  display: block;
  text-align: center;
  width: 100vw;
  height: 100vh;
}

.game-board-container {
  display: inline-block;
  width: 650px;
  height: 650px;
  margin-top: 100px;
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

.player{
  border-style: solid;
  border-color: pink;
  position: absolute;
  top: 5%;
  left: 5%;
}

button{
  position:absolute;
  top: 80%;
  left: 50%;
}
</style>

<style>
  body{
    overflow: hidden;
  }
</style>

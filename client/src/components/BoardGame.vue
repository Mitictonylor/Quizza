<template lang="html">
  <div>
    <div>

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
    </div>
  </div>

</template>

<script>
import PlayerForm from '@/components/PlayerForm.vue'
import {eventBus} from '../main.js'
import Questions from "@/components/Questions.vue"
export default {
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
      players: [{
          alias: "player1",
          name: '',
          score: [],
          winStreak: 0,
          active: false
        },
        {
          alias: "player2",
          name: '',
          score: [],
          winStreak: 0,
          active: false
        }
      ],

      score: 0,
      selectedCategory: [], //will be filled when the token will end up to a piece of the board
      answeredQuestions: [],
      randomQuestion: null,
      categoriesAndId:[['sport', 21],['geography', 22], ['general_knowledge', 9], ['history', 23], ['animal', 27], ['science_and_nature', 17]]
    }
  },
  components: {
    "questions": Questions,
    'player-form': PlayerForm
  },
  methods: {
    //will be invoked when the token end up to a piece of the board
    randomQuest: function() {
      this.loadRandomForSelected(this.categoriesAndId)
      const query = this.selectedCategory[Math.floor(Math.random() * this.selectedCategory.length)]
      const options = query.incorrect_answers.map(answer => answer)
      options.push(query.correct_answer)
      if (!this.answeredQuestions.includes(query.question)) {
        this.randomQuestion = {
          options: options,
          question: query.question,
          correct_answer: query.correct_answer,
          category: query.category
        } //so we can push it to the player wins
        this.answeredQuestions.push(this.randomQuestion.question)
      } else if (
        this.answeredQuestions.length === 49) { //needs to change when we gonna randomize the sel cat
        this.loadSelected();
      } else {
        this.randomQuest()
      }

    },


    loadCategory: function(category, category_id) {
      const url = `https://opentdb.com/api.php?amount=50&category=${category_id}&type=multiple`
      fetch(url).then(response => response.json())
        .then(data => this.categories[category] = data.results)
      console.log(`${category} loaded`);
    },

    loadAllCategories:function(categoryArray){
    categoryArray.map((element)  => {this.loadCategory(element[0],element[1])})
  },

    //JUST FOR TESTING PURPOSE
    // loadSelected: function() {
    //   const url = 'https://opentdb.com/api.php?amount=50&category=21&type=multiple'
    //   fetch(url).then(response => response.json())
    //     .then(data => this.selectedCategory = data.results)
    // },
    loadRandomForSelected: function(categoryArray){
    const index = Math.floor(Math.random() * 6)
    const catId = categoryArray[index][1]

    const url = `https://opentdb.com/api.php?amount=50&category=${catId}&type=multiple`
    fetch(url).then(response => response.json())
      .then(data => this.selectedCategory = data.results)},





    //find active player
    activePlayer: function(players) {
      const activePlayer = players.find(player => player.active === true)
      return activePlayer
    },
    //add points
    addWonCategory: function(player, question, arrayOfplayers) {
      const index = this.findIndexOfPlayer(player)
      if (!arrayOfplayers[index].score.includes(question)) {
        arrayOfplayers[index].score.push(question)
      }



    },
    //find index of player
    findIndexOfPlayer: function(player) {
      const index = this.players.indexOf(player)
      return index
    },
    //find me the index of the active player, and change it's acrive to false,
    //and based on the lenght of the array add one to the player index or start from 0 and turn it to active true
    switchActivePlayer: function(player, players) {
      const index = this.findIndexOfPlayer(player)
      console.log(index);
      console.log(players.length);
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
    // this.loadSelected();
    this.loadRandomForSelected(this.categoriesAndId)
    //
    this.loadAllCategories(this.categoriesAndId)


    //Check if the clicked answer is right if yes should update the score
    eventBus.$on('selected-option', (option) => {
      const playerActive = this.activePlayer(this.players)
      const question = this.randomQuestion

      if (option === question.correct_answer) {
        alert("well done");
        this.addWonCategory(playerActive, question.category, this.players)
        this.randomQuestion = null;
        alert("Throw the dice again"); //create a new question in either cases
      } else {
        alert("boooo")
        this.switchActivePlayer(playerActive, this.players)
        this.randomQuestion = null;
      }
    });
    //takes the name from the form
    eventBus.$on('add-players', (players) => {
      this.players[0].name = players[0];
      this.players[1].name = players[1];
      this.players[0].active = true
    })

  }

}
</script>

<style lang="css" scoped>
.player{
  border-style: solid;
  border-color: pink;
  position: absolute;
  top: 5%;
  left: 5%;
}
body{
  margin: 0;
  padding: 0;
}
button{
  position:absolute;
    top: 80%;
    left: 50%;
}
</style>

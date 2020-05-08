<template lang="html">
  <div>
    <div>

      <player-form v-if="!players[0].name && !players[1].name"></player-form>
    </div>
    <div>
    <questions v-if="selectedCategory.length > 0 && randomQuestion":randomQuestion="randomQuestion"></questions>
    </div>
    <div class="player" >
      <p v-if="players[0].name && players[1].name">{{players[0].name}} score:{{players[0].score}} win streak:{{players[0].winStreak}}</p>
      <p v-if="players[0].name && players[1].name">{{players[1].name}} score:{{players[1].score}} win streak:{{players[1].winStreak}}</p>
    </div>

    <div class="button">
    <button type="button" name="button" v-on:click="randomQuest">THROW THE DICE</button>
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

      //as soon as we click generate the player1 active will
      // became true, as soon as he is wrong, his active became false,
      // and then the player 2 active became true and can play.
      // so based on the active, the generate will work

      players:[
        {alias: "player1",
        name: '',
        score: 0,
        winStreak: 0,
        active: false
      },
      {
        alias:"player2",
        name: '',
        score: 0,
        winStreak: 0,
        active: false
      }],

      score: 0,
      selectedCategory: [], //will be filled when the token will end up to a piece of the board
      answeredQuestions: [],
      randomQuestion: null
    }
  },
  computed: {

  },

  components: {
    "questions": Questions,
    'player-form': PlayerForm
  },
  methods: {
    //will be invoked when the token end up to a piece of the board
    randomQuest: function() {
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

    //JUST FOR TESTING PURPOSE
    loadSelected: function() {
      const url = 'https://opentdb.com/api.php?amount=50&category=21&type=multiple'
      fetch(url).then(response => response.json())
        .then(data => this.selectedCategory = data.results)
    },
    //
    activePlayer: function(players) {
      const activePlayer = players.find(player => player.active === true)
      return activePlayer
    },

    addPoints: function(player) {


    }
  },
    mounted() {
      //JUST FOR TESTING
      this.loadSelected();
      //
      this.loadCategory('sport', 21);
      this.loadCategory('geography', 22);
      this.loadCategory('general_knowledge', 9);
      this.loadCategory('history', 23);
      this.loadCategory('animal', 27);
      this.loadCategory('science_and_nature', 17);

      //Check if the clicked answer is right if yes should update the score
      eventBus.$on('selected-option', (option) => {
        if (option === this.randomQuestion.correct_answer) {
          alert("well done");
          this.randomQuest(); //create a new question in either cases

          this.playerscore = this.score + 1
        } else {
          alert("boooo")
          this.randomQuest();
        }
      });
      //takes the name from the form
      eventBus.$on('add-players', (players) => {
        console.log('Hello from add playert');
        this.players[0].name = players[0];
        this.players[1].name = players[1];
      })

    }

}
</script>

<style lang="css" scoped>
.players{
  border-style: solid;
  border-color: pink
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

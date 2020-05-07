<template lang="html">
  <div class="">
    <questions v-if="selectedCategory":randomQuestion="randomQuestion"></questions>
    <p>{{score}}</p>
    <div class="button">
    <button v-if="!answeredQuestions.length"type="button" name="button" v-on:click="randomQuest">Generate</button>
    </div>
  </div>

</template>

<script>
import {eventBus} from'../main.js'
import Questions from "@/components/Questions.vue"
export default {
  data(){
    return{
      categories:{
        sport:[],
        geography:[],
        general_knowledge:[],
        history:[],
        animal:[],
        science_and_nature:[]
      },
  score: 0,
  selectedCategory: [],//will be filled when the token will end up to a piece of the board
  answeredQuestions:[],
  randomQuestion: {
        question: 'In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?',
        options: [ "1-5", "1-6", "2-6", "1-7" ],
        correct_answer: "1-7"
      }
    }
  },
  computed:{

  },

  components:{
"questions": Questions
  },
  methods:{
    //will be invoked when the token end up to a piece of the board
    randomQuest: function(){
    const query = this.selectedCategory[Math.floor(Math.random() * this.selectedCategory.length)]
    const options = query.incorrect_answers.map(answer => answer)
    options.push(query.correct_answer)
    if(!this.answeredQuestions.includes(query.question)){
      this.randomQuestion = {
      options: options,
      question: query.question,
      correct_answer: query.correct_answer,
      category: query.category} //so we can push it to the player wins
      const newObject = {};
//want the category value of random question as a key of the new object
      this.answeredQuestions.push(newObject[this.randomQuestion.category]= this.randomQuestion.question)
    }else if(
      //need review because there will be more category involved not, only one, or we could
      //just use the same 50 all over again by cleaning up answered questions
      this.answeredQuestions.length === 49){
      this.loadSelected();
    }else{
      this.randomQuest()
    }

  },
    loadCategory: function(category, category_id){
      const url = `https://opentdb.com/api.php?amount=50&category=${category_id}&type=multiple`
      fetch(url).then(response=> response.json())
      .then(data => this.categories[category] = data.results)
      console.log(`${category} loaded`);
  },

//JUST FOR TESTING PURPOSE
loadSelected: function(){
const url = 'https://opentdb.com/api.php?amount=50&category=21&type=multiple'
fetch(url).then(response=> response.json())
.then(data => this.selectedCategory = data.results)
},
//

},
mounted(){
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
  eventBus.$on('selected-option', (option) =>
  { if (option === this.randomQuestion.correct_answer){
  alert("well done");
  this.randomQuest();//create a new question in either cases
  this.score = this.score + 1

  }else{
  alert("boooo")
  this.randomQuest();
  }})

}

}
</script>

<style lang="css" scoped>
body{
  margin: 0;
  padding: 0;
}
button{
  position:absolute;
    top: 50%;
    left: 50%;
}
</style>

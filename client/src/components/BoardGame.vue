<template lang="html">
  <div class="">
    <questions v-if="selectedCategory":randomQuestion="randomQuestion"></questions>
  </div>

</template>

<script>
import Questions from "@/components/Questions.vue"
export default {
  data(){
    return{
  sport:[],
  geography:[],
  general_knowledge:[],
  history:[],
  animal:[],
  celebrity:[],
  score: 0,
  selectedCategory: [],//will be filled when the token will end up to a piece of the board
  randomQuestion: {
        question: 'In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?',
        options: [ "1-5", "1-6", "2-6", "1-7" ],
        correct_answer: "1-7"
      }
    }
  },
  computed:{
    //will be invoked when the token end up to a piece of the board
    // randomQuest: function(){
    // const query = this.selectedCategory[Math.floor(Math.random() * this.selectedCategory.length)]
    // const options = query.incorrect_answers.map(answer => answer)
    // options.push(query.correct_answer)
    // this.randomQuestion = {
    // options: options,
    // question: query,
    // correct_answer: query.correct_answer}
    // }
  },

  components:{
"questions": Questions
  },
  methods:{

  //   loadCategory: function(category, category_id){
  //     const url = `https://opentdb.com/api.php?amount=50&category=${category_id}&type=multiple`
  //     fetch(url).then(response=> response.json())
  //     .then(data => this.categories[category] = data.results)
  // },

    loadSport: function(){
      const url = 'https://opentdb.com/api.php?amount=50&category=21&type=multiple'
      fetch(url).then(response=> response.json())
      .then(data => this.sport = data.results)
  },

  loadGeograpy: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=22&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.geography = data.results)
},
loadGeneralKnowledge: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=9&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.general_knowledge = data.results)
},
loadHistory: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=23&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.history = data.results)
},
loadAnimal: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=27&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.animal = data.results)
},
loadCelebrity: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=27&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.celebrity = data.results)
},
//JUST FOR TESTING PURPOSE
loadSelected: function(){
const url = 'https://opentdb.com/api.php?amount=50&category=21&type=multiple'
fetch(url).then(response=> response.json())
.then(data => this.selectedCategory = data.results)
},


},



mounted(){
  //JUST FOR TESTING
  this.loadSelected()
  //
  this.loadSport()
  this.loadGeograpy()
  this.loadGeneralKnowledge()
  this.loadHistory()
  this.loadAnimal()
  this.loadCelebrity()
  // this.loadCategory('sport', 21);
  // this.loadCategory('geography', 22);
  // this.loadCategory('general_knowledge', 9);
  // this.loadCategory('history', 23);
  // this.loadCategory('animal', 27);
  // this.loadCategory('celebrity', 26);
}

}
</script>

<style lang="css" scoped>
</style>

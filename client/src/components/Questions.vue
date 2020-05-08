<template lang="html">
<div class="">
  <div class="question-wrapper">
    <h1 v-html="randomQuestion.question" class="question">{{randomQuestion.question}}</h1>
    </div>
    <div class="list-container">
      <answer class='list' v-for="(option, index) in shuffle(randomQuestion.options)" :key='index' :option="option"></answer>

  </div>
</div>

</template>

<script>
import {eventBus} from '../main.js'
import Option from './Option.vue'
export default {
  name: 'Question',
  props: ['randomQuestion'],

  components: {
    'answer': Option

  },
  mounted() {


  },

  methods: {

    //randomize the position of the item in an array,
    //so the correct answer won't be alwasy at the same position
    shuffle: function(arra1) {
      let ctr = arra1.length
      let temp
      let index

      // While there are elements in the array
      while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
      }
      return arra1;
    },
  }
}
</script>

<style lang="css" scoped>
.question{
  font-family: 'Permanent Marker', cursive;
  border-style: solid;
  border-color: yellow
}
.question-wrapper{
  border-style: solid;
  border-color: red;
  width: 100;
  margin:0;
  padding: 0;

}
.list-container {
  border-color: black;
  border-style: solid;
  display: block;
  text-align: center;
  margin:0;
  padding: 0;

}

.list {
  border-color: purple;
  border-style: solid;
  margin:0;
  padding: 0;
  width: 100%;
  display: inline-block;
}
</style>

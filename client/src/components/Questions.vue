<template lang="html">
<div class="">
  <div class="question">
    <h1>{{randomQuestion.question}}</h1>
    <answer v-for="(option, index) in shuffle(randomQuestion.options)" :key='index' :option="option"></answer>
  </div>
</div>

</template>

<script>
import {eventBus} from'../main.js'
import Option from './Option.vue'
export default {
  name: 'Question',
  props: ['randomQuestion'],

  components:{
    'answer': Option

  },
  mounted(){
    eventBus.$on('selected-option', (option) =>
    { if (option === this.randomQuestion.correct_answer){
    alert("well done")
    }else{
    alert("boooo")
    }})

},

  methods:{
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
</style>

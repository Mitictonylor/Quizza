<template lang="html">
  <div class="">
    <div class="question-container" v-bind:class="checkCategory()">
      <p v-html="randomQuestion.question" class="question">{{randomQuestion.question}}</p>
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
      checkCategory() {
        if (this.randomQuestion.category === "Science & Nature") {
            return "science"
        } else if (this.randomQuestion.category === 'History') {
            return "history"
        } else if (this.randomQuestion.category === 'Sports') {
            return"sport"
        } else if (this.randomQuestion.category === 'Geography') {
            return "geography"
        } else if (this.randomQuestion.category === 'Animals') {
            return "animal"
        } else {
          return "general-knowledge"
        }
      }
    }
  }
</script>

<style lang="css" scoped>
.question-container {
  border-style: solid;
  -webkit-animation: fadeIn 2s;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.question {
  font-size: 25px;
  text-shadow: 2px 2px 2px #000000
}

.sport {
  background-color: #6eeb83;
  box-shadow: 2px 2px 4px #000000;
}

.geography {
  background-color: #ff70a6;
  box-shadow: 2px 2px 4px #000000;
}

.general-knowledge {
  background-color: #907ad6;
  box-shadow: 2px 2px 4px #000000;
}

.history {
  background-color: #ff9770;
  box-shadow: 2px 2px 4px #000000;
}

.animal {
  background-color: #e9ff70;
  box-shadow: 2px 2px 4px #000000;
}

.science {
  background-color: #70d6ff;
  box-shadow: 2px 2px 4px #000000;
}

p {
  margin: 4;
  padding: 0;
}
</style>

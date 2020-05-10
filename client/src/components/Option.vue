<template lang="html">
  <div class = 'options-container'>
    <li v-html="option" class="options" v-on:click="checkOption">{{option}}</li>
  </div>
</template>

<script>
  import {eventBus} from '../main.js';

  export default {
    name: "Option",
    props: ['option'],
    methods: {
      //create an event bus based on the clicked option, and
      // brings them to Boardgame to check if is the right answer
      checkOption() {
        eventBus.$emit('selected-option', this.option);
      }
    }
  }
</script>

<style lang="css" scoped>
.options{
  width: 90%;
  display: inline-block;
  font-family: 'Luckiest Guy', cursive;
  font-size: 20px;
  float: center;
  margin: 5px;
}
</style>

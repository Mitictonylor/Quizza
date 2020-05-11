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
  li {
    list-style: none;
    background-color: white;
    color: black;
    font-size: 22px;
  }

  li:hover {
    background-color: #8e9aaf;
    color: white;
  }

  .options-container {
    border: dotted 1px;
    color: black;
  }
</style>

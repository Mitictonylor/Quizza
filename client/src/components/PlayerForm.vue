<template lang="html">
  <div class="form-container">
    <form class="form" v-on:submit.prevent="addPlayers">
      <div class="player1">
        <label for="player1">Player1:</label>
        <input type="text" v-model="player1" placeholder="Insert name" required/>
      </div>
      <div class="player2">
        <label for="player2">Player2</label>
        <input type="text" v-model="player2" placeholder="Insert name" required/>
      </div>
        <input type="submit"   value="SUBMIT">
    </form>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: 'playerForm',
  data() {
    return {
      player1: '',//fills those from the input
      player2: ''
    }
  },
  methods: {
    // create an event bus when the submit has been clicked. Brings the player name to BoardGame
    addPlayers: function() {
      eventBus.$emit('add-players', [this.player1, this.player2])
    }
  }
}
</script>

<style lang="css" scoped>
</style>

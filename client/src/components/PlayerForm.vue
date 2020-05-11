<template lang="html">
  <div class="">


    <form class="form">
      <div class="player1">
        <label for="player1">Player 1: </label>
        <input type="text" v-model="player1" placeholder="Insert name" required/>
      </div>
      <div class="player2">
        <label for="player2">Player 2: </label>
        <input type="text" v-model="player2" placeholder="Insert name" required/>
      </div>
      <div class="player3">
        <label for="player3">Player 3: </label>
        <input type="text" v-model="player3" placeholder="Insert name"/>
      </div>
      <div class="player4">
        <label for="player4">Player 4: </label>
        <input type="text" v-model="player4" placeholder="Insert name"/>
      </div>
    </form>
    <nav v-if="player1 && player2">
      <router-link :to="{name: 'classic', params:{player1, player2, player3, player4}}">Classic</router-link>
      <router-link :to="{name: 'seek', params:{player1, player2, player3, player4}}"> SEEK </router-link>
      <router-link :to="{name: 'mental', params:{player1, player2, player3, player4}}"> MENTAL </router-link>
    </nav>
    </div>
</template>

<script>
  import {eventBus} from '../main.js';

  export default {
    name: 'playerForm',
    data() {
      return {
        player1: '',//fills those from the input
        player2: '',
        player3: '',
        player4: '',
      }
    },
  }
</script>

<style lang="css" scoped>
</style>

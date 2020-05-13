<template lang="html">
  <div class="">
    <form class="form">
      <div class="player">
        <label class="player1" for="player1">Player 1 </label>
        <input class="player1" type="text" v-model="player1" placeholder="Enter name (max 7 chars)" maxlength="7" required/>
      </div>
      <div class="player">
        <label class="player2" for="player2">Player 2 </label>
        <input class="player2" type="text" v-model="player2" maxlength="7" required/>
      </div>
      <div class="player">
        <label class="player3" for="player3">Player 3 </label>
        <input class="player3" type="text" v-model="player3" maxlength="7" />
      </div>
      <div class="player">
        <label class="player4" for="player4">Player 4 </label>
        <input class="player4" type="text" v-model="player4" maxlength="7" />
      </div>
    </form>
    <nav class="nav" v-if="player1 && player2">
      <div class="select-container">
        <p class="select">SELECT A GAME</p>
      </div>
      <div class="game-container">
          <router-link :to="{name: 'classic', params:{player1, player2, player3, player4}}"> <img class="game" :src="classic"> </router-link>
      </div>
      <div class="game-container">
          <router-link :to="{name: 'seek', params:{player1, player2, player3, player4}}"> <img class="game" :src="seek"> </router-link>
      </div>
      <div class="game-container">
          <router-link :to="{name: 'warning', params:{player1, player2, player3, player4}}"> <img class="mental-game" :src="mental"></router-link>
      </div>
    </nav>
    </div>
</template>

<script>
  import {eventBus} from '../main.js';
  import classic from '@/assets/images/classic.png';
  import seek from '@/assets/images/seek.png';
  import mental from '@/assets/images/mental.png';

  export default {
    name: 'playerForm',
    data() {
      return {
        player1: '',//fills those from the input
        player2: '',
        player3: '',
        player4: '',
        classic: classic,
        seek: seek,
        mental: mental
      }
    },
  }
</script>

<style lang="css" scoped>
.form {
  font-size: 25px;
  font-family: 'Russo One', sans-serif;
}

.player {
  margin: 15px;
}

input {
  background-color: #8e9aaf;
  text-align: center;
  font-size: 25px;
  height: 30px;
  width: 40%;
  border-radius: 4%;
  box-shadow: 2px 2px 4px #000000;
  font-family: 'Open Sans', sans-serif;
}

input:focus {
  outline-color: #907ad6;
}

input::placeholder {
  color: white;
  text-shadow: none;
  font-size: 20px;
}

input.player1 {
  color: #ff70a6;
  text-shadow: 1px 1px 2px #000000;
}

.player1{
  color: #ff70a6;
  text-shadow: 1px 1px 2px #000000;
  font-weight: 700;
}

input.player2 {
  color: #70d6ff;
  text-shadow: 1px 1px 2px #000000;
}

.player2{
  color: #70d6ff;
  text-shadow: 1px 1px 2px #000000;
  font-weight: 700;
}

input.player3 {
  color: #e9ff70;
  text-shadow: 1px 1px 2px #000000;
}

.player3 {
  color: #e9ff70;
  text-shadow: 1px 1px 2px #000000;
  font-weight: 700;
}

input.player4 {
  color: #6eeb83;
  text-shadow: 1px 1px 2px #000000;
}

.player4 {
  color: #6eeb83;
  text-shadow: 1px 1px 2px #000000;
  font-weight: 700;
}

.nav {
  margin-top: 25px;
  overflow: auto;
  display: inline-block;
  width: 100%;
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

.game-container {
  margin: 5px;
  width: 32%;
  float: left;
}

.game:focus {
  outline-color: #907ad6;
}

.game {
  width: 200px;
}

.game:hover {
  opacity: 70%;
}

.mental-game:focus {
  outline-color: #907ad6;
}

.mental-game {
  width: 200px;
  animation: flash 0.5s linear infinite;
}


@keyframes flash {
  50% {
    opacity: 50%;
  }
}

.mental-game:hover {
  opacity: 70%;
}

.select-container {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.select {
  font-size: 25px;
  font-family: 'Open Sans', sans-serif;
}

p {
  padding: 0;
  margin: 0;
}
</style>

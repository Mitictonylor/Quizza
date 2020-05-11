<template lang="html">
  <div id="mental" class="page-container" v-on:click="togglefullScreen()">
    <div class="game-board" ref="gameBoard">
      <div id="a1" class="grid" v-on:click="checkActive($event)">a1</div>
      <div id="a3" class="grid" v-on:click="checkActive($event)">a3</div>
      <div id="a5" class="grid" v-on:click="checkActive($event)">a5</div>
      <div id="a7" class="grid" v-on:click="checkActive($event)">a7</div>
      <div id="a9" class="grid" v-on:click="checkActive($event)">a9</div>
      <div id="a11" class="grid" v-on:click="checkActive($event)">a11</div>
      <div id="a13" class="grid" v-on:click="checkActive($event)">a13</div>
      <div id="a15" class="grid" v-on:click="checkActive($event)">a15</div>
      <div id="a17" class="grid" v-on:click="checkActive($event)">a17</div>
      <div id="b2" class="grid" v-on:click="checkActive($event)">b2</div>
      <div id="b4" class="grid" v-on:click="checkActive($event)">b4</div>
      <div id="b6" class="grid" v-on:click="checkActive($event)">b6</div>
      <div id="b8" class="grid" v-on:click="checkActive($event)">b8</div>
      <div id="b10" class="grid" v-on:click="checkActive($event)">b10</div>
      <div id="b12" class="grid" v-on:click="checkActive($event)">b12</div>
      <div id="b14" class="grid" v-on:click="checkActive($event)">b14</div>
      <div id="b16" class="grid" v-on:click="checkActive($event)">b16</div>
      <div id="c1" class="grid" v-on:click="checkActive($event)">c1</div>
      <div id="c3" class="grid" v-on:click="checkActive($event)">c3</div>
      <div id="c5" class="grid" v-on:click="checkActive($event)">c5</div>
      <div id="c7" class="grid" v-on:click="checkActive($event)">c7</div>
      <div id="c9" class="grid" v-on:click="checkActive($event)">c9</div>
      <div id="c11" class="grid" v-on:click="checkActive($event)">c11</div>
      <div id="c13" class="grid" v-on:click="checkActive($event)">c13</div>
      <div id="c15" class="grid" v-on:click="checkActive($event)">c15</div>
      <div id="c17" class="grid" v-on:click="checkActive($event)">c17</div>
      <div id="d2" class="grid" v-on:click="checkActive($event)">d2</div>
      <div id="d4" class="grid" v-on:click="checkActive($event)">d4</div>
      <div id="d14" class="grid" v-on:click="checkActive($event)">d14</div>
      <div id="d16" class="grid" v-on:click="checkActive($event)">d16</div>
      <div id="e1" class="grid" v-on:click="checkActive($event)">e1</div>
      <div id="e3" class="grid" v-on:click="checkActive($event)">e3</div>
      <div id="e15" class="grid" v-on:click="checkActive($event)">e15</div>
      <div id="e17" class="grid" v-on:click="checkActive($event)">e17</div>
      <div id="f2" class="grid" v-on:click="checkActive($event)">f2</div>
      <div id="f4" class="grid" v-on:click="checkActive($event)">f4</div>
      <div id="f14" class="grid" v-on:click="checkActive($event)">f14</div>
      <div id="f16" class="grid" v-on:click="checkActive($event)">f16</div>
      <div id="g1" class="grid" v-on:click="checkActive($event)">g1</div>
      <div id="g3" class="grid" v-on:click="checkActive($event)">g3</div>
      <div id="g15" class="grid" v-on:click="checkActive($event)">g15</div>
      <div id="g17" class="grid" v-on:click="checkActive($event)">g17</div>
      <div id="h2" class="grid" v-on:click="checkActive($event)">h2</div>
      <div id="h4" class="grid" v-on:click="checkActive($event)">h4</div>
      <div id="h14" class="grid" v-on:click="checkActive($event)">h14</div>
      <div id="h16" class="grid" v-on:click="checkActive($event)">h16</div>
      <div id="i1" class="grid" v-on:click="checkActive($event)">i1</div>
      <div id="i3" class="grid" v-on:click="checkActive($event)">i3</div>
      <div id="i5" class="grid" v-on:click="checkActive($event)">i5</div>
      <div id="i7" class="grid" v-on:click="checkActive($event)">i7</div>
      <div id="i9" class="grid" v-on:click="checkActive($event)">i9</div>
      <div id="i11" class="grid" v-on:click="checkActive($event)">i11</div>
      <div id="i13" class="grid" v-on:click="checkActive($event)">i13</div>
      <div id="i15" class="grid" v-on:click="checkActive($event)">i15</div>
      <div id="i17" class="grid" v-on:click="checkActive($event)">i17</div>
      <div id="j2" class="grid" v-on:click="checkActive($event)">j2</div>
      <div id="j4" class="grid" v-on:click="checkActive($event)">j4</div>
      <div id="j6" class="grid" v-on:click="checkActive($event)">j6</div>
      <div id="j8" class="grid" v-on:click="checkActive($event)">j8</div>
      <div id="j10" class="grid" v-on:click="checkActive($event)">j10</div>
      <div id="j12" class="grid" v-on:click="checkActive($event)">j12</div>
      <div id="j14" class="grid" v-on:click="checkActive($event)">j14</div>
      <div id="j16" class="grid" v-on:click="checkActive($event)">j16</div>
      <div id="k1" class="grid" v-on:click="checkActive($event)">k1</div>
      <div id="k3" class="grid" v-on:click="checkActive($event)">k3</div>
      <div id="k5" class="grid" v-on:click="checkActive($event)">k5</div>
      <div id="k7" class="grid" v-on:click="checkActive($event)">k7</div>
      <div id="k9" class="grid" v-on:click="checkActive($event)">k9</div>
      <div id="k11" class="grid" v-on:click="checkActive($event)">k11</div>
      <div id="k13" class="grid" v-on:click="checkActive($event)">k13</div>
      <div id="k15" class="grid" v-on:click="checkActive($event)">k15</div>
      <div id="k17" class="grid" v-on:click="checkActive($event)">k17</div>

      <div class="board-content-1">
        <div class="dice-container">
          <input class="dice" type="image" :src="getDiceFace()" v-on:click="randomDice()"></input>
        </div>
        CONTENT
        QUESTIONS
      </div>


      <div id="player1" class="player1"></div>
      <div id="player2" class="player2"></div>
      <div id="player3" class="player3"></div>
      <div id="player4" class="player4"></div>

    </div>
  </div>
</div>
</template>

<script>
import {MentalTileObjects} from '@/config/MentalTileObjects.js'

export default {
  name: 'mental',
  data() {
    return {
      dice: [1,2,3,4,5,6],
      diceResult: 6,
      questions: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      player: {
        id: 1,
        currentPosition: 'f9'
      },
      moveOptions: null,
      fullscreen: false,
      currentTile: 'a1'
    }
  },
  methods: {
    randomDice() {
      this.diceResult = this.dice[Math.floor(Math.random() * 6)]
      return this.showMoveOptions();
    },
    getDiceFace() {
      return require('@/assets/dice/' + this.diceResult + '.png')
    },
    showMoveOptions() {
      const randomGridTile = MentalTileObjects[Math.floor(Math.random() * 72)].id
      const moveOption = document.querySelector(`#${randomGridTile}`);
      moveOption.style.color = 'red';
      this.currentTile = randomGridTile
    },
    resetMoveOptions() {
      const moveOption = document.querySelector(`#${this.currentTile}`);
      moveOption.style.color = 'black';
      this.currentTile = null;
    },
    getNewRowPosition(event) {
      const divID = event.currentTarget.id;
      const index = MentalTileObjects.map(x => x.id).indexOf(divID);
      return MentalTileObjects[index]['row'];
    },
    getNewColPosition(event) {
      const divID = event.currentTarget.id;
      const index = MentalTileObjects.map(x => x.id).indexOf(divID);
      return MentalTileObjects[index]['column'];
    },
    checkActive(event) {
      if (this.currentTile === event.currentTarget.id) {
        return this.movePlayer(event)
      }
    },
    movePlayer(event) {
      const activePlayer = document.querySelector('#player1');
      activePlayer.style.cssText = `grid-row-start: ${this.getNewRowPosition(event)};
      grid-column-start: ${this.getNewColPosition(event)};`
      this.player.currentPosition = event.currentTarget.id;
      this.resetMoveOptions();
    },
    togglefullScreen () {
      const element = document.querySelector('#mental');
      element.requestFullscreen();
    },
  }
}
</script>

<style lang="css" scoped>
.page-container {
  border-style: solid;
  display: block;
  text-align: center;
  width: 100vw;
  background-color: #8e9aaf;
}

.game-board {

  display: inline-grid;
  position: relative;
}

.grid {
  border-style: solid;
  box-sizing: border-box;
  width: 90px;
  height: 89px;
  font-size: 40px;
}

.grid:hover {
  cursor: pointer;
  color: blue;
}

/* ROW A */
#a1 {
  grid-row-start: 1;
  grid-column-start: 1;
}

#a3 {
  grid-row-start: 1;
  grid-column-start: 3;
}

#a5 {
  grid-row-start: 1;
  grid-column-start: 5;
}

#a7 {
  grid-row-start: 1;
  grid-column-start: 7;
}

#a9 {
  grid-row-start: 1;
  grid-column-start: 9;
}

#a11 {
  grid-row-start: 1;
  grid-column-start: 11;
}

#a13 {
  grid-row-start: 1;
  grid-column-start: 13;
}

#a15 {
  grid-row-start: 1;
  grid-column-start: 15;
}

#a17 {
  grid-row-start: 1;
  grid-column-start: 17;
}

/* ROW B */
#b2 {
  grid-row-start: 2;
  grid-column-start: 2;
}

#b4 {
  grid-row-start: 2;
  grid-column-start: 4;
}

#b6 {
  grid-row-start: 2;
  grid-column-start: 6;
}

#b8 {
  grid-row-start: 2;
  grid-column-start: 8;
}

#b10 {
  grid-row-start: 2;
  grid-column-start: 10;
}

#b12 {
  grid-row-start: 2;
  grid-column-start: 12;
}

#b14 {
  grid-row-start: 2;
  grid-column-start: 14;
}

#b16 {
  grid-row-start: 2;
  grid-column-start: 16;
}

/* ROW C */
#c1 {
  grid-row-start: 3;
  grid-column-start: 1;
}

#c3 {
  grid-row-start: 3;
  grid-column-start: 3;
}

#c5 {
  grid-row-start: 3;
  grid-column-start: 5;
}

#c7 {
  grid-row-start: 3;
  grid-column-start: 7;
}

#c9 {
  grid-row-start: 3;
  grid-column-start: 9;
}

#c11 {
  grid-row-start: 3;
  grid-column-start: 11;
}

#c13 {
  grid-row-start: 3;
  grid-column-start: 13;
}

#c15 {
  grid-row-start: 3;
  grid-column-start: 15;
}

#c17 {
  grid-row-start: 3;
  grid-column-start: 17;
}

/* ROW D */
#d2 {
  grid-row-start: 4;
  grid-column-start: 2;
}

#d4 {
  grid-row-start: 4;
  grid-column-start: 4;
}

#d14 {
  grid-row-start: 4;
  grid-column-start: 14;
}

#d16 {
  grid-row-start: 4;
  grid-column-start: 16;
}

/* ROW E */
#e1 {
  grid-row-start: 5;
  grid-column-start: 1;
}

#e3 {
  grid-row-start: 5;
  grid-column-start: 3;
}

#e15 {
  grid-row-start: 5;
  grid-column-start: 15;
}

#e17 {
  grid-row-start: 5;
  grid-column-start: 17;
}

/* ROW F */
#f2 {
  grid-row-start: 6;
  grid-column-start: 2;
}

#f4 {
  grid-row-start: 6;
  grid-column-start: 4;
}

#f14 {
  grid-row-start: 6;
  grid-column-start: 14;
}

#f16 {
  grid-row-start: 6;
  grid-column-start: 16;
}

/* ROW G */
#g1 {
  grid-row-start: 7;
  grid-column-start: 1;
}

#g3 {
  grid-row-start: 7;
  grid-column-start: 3;
}

#g15 {
  grid-row-start: 7;
  grid-column-start: 15;
}

#g17 {
  grid-row-start: 7;
  grid-column-start: 17;
}

/* ROW H */
#h2 {
  grid-row-start: 8;
  grid-column-start: 2;
}

#h4 {
  grid-row-start: 8;
  grid-column-start: 4;
}

#h14 {
  grid-row-start: 8;
  grid-column-start: 14;
}

#h16 {
  grid-row-start: 8;
  grid-column-start: 16;
}


/* ROW I */
#i1 {
  grid-row-start: 9;
  grid-column-start: 1;
}

#i3 {
  grid-row-start: 9;
  grid-column-start: 3;
}

#i5 {
  grid-row-start: 9;
  grid-column-start: 5;
}

#i7 {
  grid-row-start: 9;
  grid-column-start: 7;
}

#i9 {
  grid-row-start: 9;
  grid-column-start: 9;
}

#i11 {
  grid-row-start: 9;
  grid-column-start: 11;
}

#i13 {
  grid-row-start: 9;
  grid-column-start: 13;
}

#i15 {
  grid-row-start: 9;
  grid-column-start: 15;
}

#i17 {
  grid-row-start: 9;
  grid-column-start: 17;
}

/* ROW J */
#j2 {
  grid-row-start: 10;
  grid-column-start: 2;
}

#j4 {
  grid-row-start: 10;
  grid-column-start: 4;
}

#j6 {
  grid-row-start: 10;
  grid-column-start: 6;
}

#j8 {
  grid-row-start: 10;
  grid-column-start: 8;
}

#j10 {
  grid-row-start: 10;
  grid-column-start: 10;
}

#j12 {
  grid-row-start: 10;
  grid-column-start: 12;
}

#j14 {
  grid-row-start: 10;
  grid-column-start: 14;
}

#j16 {
  grid-row-start: 10;
  grid-column-start: 16;
}

/* ROW K */
#k1 {
  grid-row-start: 11;
  grid-column-start: 1;
}

#k3 {
  grid-row-start: 11;
  grid-column-start: 3;
}

#k5 {
  grid-row-start: 11;
  grid-column-start: 5;
}

#k7 {
  grid-row-start: 11;
  grid-column-start: 7;
}

#k9 {
  grid-row-start: 11;
  grid-column-start: 9;
}

#k11 {
  grid-row-start: 11;
  grid-column-start: 11;
}

#k13 {
  grid-row-start: 11;
  grid-column-start: 13;
}

#k15 {
  grid-row-start: 11;
  grid-column-start: 15;
}

#k17 {
  grid-row-start: 11;
  grid-column-start: 17;
}


.dice-container {
  display: inline-block;
  text-align: center;
}

.dice {
  width: 50px;
  height: 50px;
  margin: 20px;
}

input:focus {
  outline: none;
}

.player1 {
  border-style: solid;
  border-radius: 50%;
  background-color: purple;
  width: 25px;
  height: 25px;
  margin: 5px;
  z-index: 2;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
}

.player2 {
  border-style: solid;
  border-radius: 50%;
  background-color: red;
  width: 25px;
  height: 25px;
  margin: 5px;
  margin-top: 40px;
  z-index: 2;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
}

.player3 {
  border-style: solid;
  border-radius: 50%;
  background-color: orange;
  width: 25px;
  height: 25px;
  margin: 5px;
  margin-left: 40px;
  z-index: 2;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
}

.player4 {
  border-style: solid;
  border-radius: 50%;
  background-color: blue;
  width: 25px;
  height: 25px;
  margin: 5px;
  margin-left: 40px;
  margin-top: 40px;
  z-index: 2;
  position: absolute;
  grid-row-start: 1;
  grid-column-start: 1;
}

.board-content-1 {
  width: 810px;
  height: 445px;
  z-index: 2;
  position: absolute;
  margin-top: 267px;
  margin-left: 360px;
}

P {
  font-size: 25px;
  font-weight: bold;
  color: blue;
}
</style>

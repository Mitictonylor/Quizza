<template lang="html">
    <div class="page-container">
      <div class="game-board-container">
        <div class="game-board" ref="gameBoard">
          <div id="g1" class="grid" v-on:click="checkActive($event)">1</div>
          <div id="g2" class="grid" v-on:click="checkActive($event)">2</div>
          <div id="g3" class="grid" v-on:click="checkActive($event)">3</div>
          <div id="g4" class="grid" v-on:click="checkActive($event)">4</div>
          <div id="g5" class="grid" v-on:click="checkActive($event)">5</div>
          <div id="g6" class="grid" v-on:click="checkActive($event)">6</div>
          <div id="g7" class="grid" v-on:click="checkActive($event)">7</div>
          <div id="g8" class="grid" v-on:click="checkActive($event)">8</div>
          <div id="g9" class="grid" v-on:click="checkActive($event)">9</div>
          <div id="g10" class="grid" v-on:click="checkActive($event)">10</div>
          <div id="g11" class="grid" v-on:click="checkActive($event)">11</div>
          <div id="g12" class="grid" v-on:click="checkActive($event)">12</div>
          <div id="g13" class="grid" v-on:click="checkActive($event)">13</div>
          <div id="g14" class="grid" v-on:click="checkActive($event)">14</div>
          <div id="g15" class="grid" v-on:click="checkActive($event)">15</div>
          <div id="g16" class="grid" v-on:click="checkActive($event)">16</div>
          <div id="g17" class="grid" v-on:click="checkActive($event)">17</div>
          <div id="g18" class="grid" v-on:click="checkActive($event)">18</div>
          <div id="g19" class="grid" v-on:click="checkActive($event)">19</div>
          <div id="g20" class="grid" v-on:click="checkActive($event)">20</div>
          <div id="g21" class="grid" v-on:click="checkActive($event)">21</div>
          <div id="g22" class="grid" v-on:click="checkActive($event)">22</div>
          <div id="g23" class="grid" v-on:click="checkActive($event)">23</div>
          <div id="g24" class="grid" v-on:click="checkActive($event)">24</div>
          <div id="g25" class="grid" v-on:click="checkActive($event)">25</div>
          <div id="g26" class="grid" v-on:click="checkActive($event)">26</div>
          <div id="g27" class="grid" v-on:click="checkActive($event)">27</div>
          <div id="g28" class="grid" v-on:click="checkActive($event)">28</div>
          <div id="g29" class="grid" v-on:click="checkActive($event)">29</div>
          <div id="g30" class="grid" v-on:click="checkActive($event)">30</div>
          <div id="g31" class="grid" v-on:click="checkActive($event)">31</div>
          <div id="g32" class="grid" v-on:click="checkActive($event)">32</div>
          <div id="g33" class="grid" v-on:click="checkActive($event)">33</div>
          <div id="g34" class="grid" v-on:click="checkActive($event)">34</div>
          <div id="g35" class="grid" v-on:click="checkActive($event)">35</div>
          <div id="g36" class="grid" v-on:click="checkActive($event)">36</div>
          <div id="g37" class="grid" v-on:click="checkActive($event)">37</div>
          <div id="g38" class="grid" v-on:click="checkActive($event)">38</div>
          <div id="g39" class="grid" v-on:click="checkActive($event)">39</div>
          <div id="g40" class="grid" v-on:click="checkActive($event)">40</div>
          <div id="g41" class="grid" v-on:click="checkActive($event)">41</div>
          <div id="g42" class="grid" v-on:click="checkActive($event)">42</div>
          <div id="g43" class="grid" v-on:click="checkActive($event)">43</div>
          <div id="g44" class="grid" v-on:click="checkActive($event)">44</div>
          <div id="g45" class="grid" v-on:click="checkActive($event)">45</div>
          <div id="g46" class="grid" v-on:click="checkActive($event)">46</div>
          <div id="g47" class="grid" v-on:click="checkActive($event)">47</div>
          <div id="g48" class="grid" v-on:click="checkActive($event)">48</div>
          <div id="g49" class="grid" v-on:click="checkActive($event)">49</div>
          <div id="g50" class="grid" v-on:click="checkActive($event)">50</div>
          <div id="g51" class="grid" v-on:click="checkActive($event)">51</div>
          <div id="g52" class="grid" v-on:click="checkActive($event)">52</div>
          <div id="g53" class="grid" v-on:click="checkActive($event)">53</div>
          <div id="g54" class="grid" v-on:click="checkActive($event)">54</div>
          <div id="g55" class="grid" v-on:click="checkActive($event)">55</div>
          <div id="g56" class="grid" v-on:click="checkActive($event)">56</div>
          <div id="g57" class="grid" v-on:click="checkActive($event)">57</div>
          <div id="g58" class="grid" v-on:click="checkActive($event)">58</div>
          <div id="g59" class="grid" v-on:click="checkActive($event)">59</div>
          <div id="g60" class="grid" v-on:click="checkActive($event)">60</div>
          <div id="g61" class="grid" v-on:click="checkActive($event)">61</div>
          <div id="g62" class="grid" v-on:click="checkActive($event)">62</div>
          <div id="g63" class="grid" v-on:click="checkActive($event)">63</div>
          <div id="g64" class="grid" v-on:click="checkActive($event)">64</div>
          <div id="g65" class="grid" v-on:click="checkActive($event)">65</div>
          <div id="g66" class="grid" v-on:click="checkActive($event)">66</div>
          <div id="g67" class="grid" v-on:click="checkActive($event)">67</div>
          <div id="g68" class="grid" v-on:click="checkActive($event)">68</div>
          <div id="g69" class="grid" v-on:click="checkActive($event)">69</div>
          <div id="g70" class="grid" v-on:click="checkActive($event)">70</div>
          <div id="g71" class="grid" v-on:click="checkActive($event)">71</div>
          <div id="g72" class="grid" v-on:click="checkActive($event)">72</div>
          <div id="g73" class="grid" v-on:click="checkActive($event)">73</div>
          <div id="g74" class="grid" v-on:click="checkActive($event)">74</div>
          <div id="g75" class="grid" v-on:click="checkActive($event)">75</div>
          <div id="g76" class="grid" v-on:click="checkActive($event)">76</div>
          <div id="g77" class="grid" v-on:click="checkActive($event)">77</div>
          <div id="g78" class="grid" v-on:click="checkActive($event)">78</div>
          <div id="g79" class="grid" v-on:click="checkActive($event)">79</div>
          <div id="g80" class="grid" v-on:click="checkActive($event)">80</div>
          <div id="g81" class="grid" v-on:click="checkActive($event)">81</div>
          <div id="g82" class="grid" v-on:click="checkActive($event)">82</div>
          <div id="g83" class="grid" v-on:click="checkActive($event)">83</div>
          <div id="g84" class="grid" v-on:click="checkActive($event)">84</div>
          <div id="g85" class="grid" v-on:click="checkActive($event)">85</div>
          <div id="g86" class="grid" v-on:click="checkActive($event)">86</div>
          <div id="g87" class="grid" v-on:click="checkActive($event)">87</div>
          <div id="g88" class="grid" v-on:click="checkActive($event)">88</div>
          <div id="g89" class="grid" v-on:click="checkActive($event)">89</div>
          <div id="g90" class="grid" v-on:click="checkActive($event)">90</div>
          <div id="g91" class="grid" v-on:click="checkActive($event)">91</div>
          <div id="g92" class="grid" v-on:click="checkActive($event)">92</div>
          <div id="g93" class="grid" v-on:click="checkActive($event)">93</div>
          <div id="g94" class="grid" v-on:click="checkActive($event)">94</div>
          <div id="g95" class="grid" v-on:click="checkActive($event)">95</div>
          <div id="g96" class="grid" v-on:click="checkActive($event)">96</div>
          <div id="g97" class="grid" v-on:click="checkActive($event)">97</div>
          <div id="g98" class="grid" v-on:click="checkActive($event)">98</div>
          <div id="g99" class="grid" v-on:click="checkActive($event)">99</div>
          <div id="g100" class="grid" v-on:click="checkActive($event)">100</div>
          <div id="g101" class="grid" v-on:click="checkActive($event)">101</div>
          <div id="g102" class="grid" v-on:click="checkActive($event)">102</div>
          <div id="g103" class="grid" v-on:click="checkActive($event)">103</div>
          <div id="g104" class="grid" v-on:click="checkActive($event)">104</div>
          <div id="g105" class="grid" v-on:click="checkActive($event)">105</div>
          <div id="g106" class="grid" v-on:click="checkActive($event)">106</div>
          <div id="g107" class="grid" v-on:click="checkActive($event)">107</div>

          <div class="board-content-1">
            <div class="dice-container">
              <input class="dice" type="image" :src="getDiceFace()" v-on:click="randomDice()"></input>
            </div>
          </div>

          <div class="board-content-2">
            <p>PLAYERS</p>
          </div>

          <div class="board-content-3">
            <div class="question-container">
              <p class="question">QUESTIONS</p>
            </div>
          </div>

          <div class="board-content-4">
            <p>CATEGORY TYPES</p>
          </div>

          <div class="board-content-5">
            <p>CONTENT</p>
          </div>

          <div id="player1" class="player1"></div>
          <div id="player2" class="player2"></div>
          <div id="player3" class="player3"></div>
          <div id="player4" class="player4"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {SeekTileObjects} from '@/config/SeekTileObjects.js'

  export default {
    name: 'seek',
    data() {
      return {
        dice: [1,2,3,4,5,6],
        diceResult: 6,
        questions: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
        player: {
          id: 1,
          currentPosition: 1
        },
        moveOption: null,
        fullscreen: false
      }
    },
    methods: {
      randomDice() {
        this.diceResult = this.dice[Math.floor(Math.random() * 6)];
        return this.showMoveOptions();
      },
      getDiceFace() {
        return require('@/assets/dice/' + this.diceResult + '.png');
      },
      showMoveOptions() {
        const divID = 'g' + (this.player.currentPosition + this.diceResult)
        const moveOption = document.querySelector(`#${divID}`);
        moveOption.style.color = 'red';
        this.moveOption = divID;
      },
      resetMoveOptions() {
        const moveOption = document.querySelector(`#${this.moveOption}`);
        moveOption.style.color = 'black';
        this.moveOption = null;
      },
      getNewRowPosition(event) {
        const divID = event.currentTarget.id;
        console.log(SeekTileObjects);
        const index = SeekTileObjects.map(x => x.id).indexOf(divID);
        console.log(index);
        return SeekTileObjects[index]['row'];
      },
      getNewColPosition(event) {
        const divID = event.currentTarget.id;
        const index = SeekTileObjects.map(x => x.id).indexOf(divID);
        return SeekTileObjects[index]['column'];
      },
      checkActive(event) {
        if (this.moveOption === event.currentTarget.id) {
          return this.movePlayer(event)
        }
      },
      movePlayer(event) {
        const activePlayer = document.querySelector('#player1');
        activePlayer.style.cssText = `grid-row-start: ${this.getNewRowPosition(event)};
                                      grid-column-start: ${this.getNewColPosition(event)};`
        this.player.currentPosition += this.diceResult
        this.resetMoveOptions();
      },
      togglefullScreen () {
        const element = document.querySelector('#fullscreen');
        element.requestFullscreen();
      },
    }
  }
</script>

<style lang="css" scoped>
  /* .page-container {
  border-style: solid;
  display: block;
  text-align: center;
  width: 100vw;
  height: 100vh;
  } */

  /* .game-board-container {
  border-style: solid;
  display: inline-block;
  width: 650px;
  height: 650px;
  } */

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

  /* c X ROW */
  #g19, #g20, #g21, #g22, #g23, #g24, #g25, #g26, #g27, #g28, #g29, #g30, #g31, #g32, #g33, #g34, #g35 {
    grid-row: 3;
  }

  #g19 {
    grid-column-start: 17;
  }

  #g20 {
    grid-column-start: 16;
  }

  #g21 {
    grid-column-start: 15;
  }

  #g22 {
    grid-column-start: 14;
  }

  #g23 {
    grid-column-start: 13;
  }

  #g24 {
    grid-column-start: 12;
  }

  #g25 {
    grid-column-start: 11;
  }

  #g26 {
    grid-column-start: 10;
  }

  #g27 {
    grid-column-start: 9;
  }

  #g28 {
    grid-column-start: 8;
  }

  #g29 {
    grid-column-start: 7;
  }

  #g30 {
    grid-column-start: 6;
  }

  #g31 {
    grid-column-start: 5;
  }

  #g32 {
    grid-column-start: 4;
  }

  #g33 {
    grid-column-start: 3;
  }

  #g34 {
    grid-column-start: 2;
  }

  #g35 {
    grid-column-start: 1;
  }

  /* e X ROW */
  #g37, #g38, #g39, #g40, #g41, #g42, #g43, #g44, #g45, #g46, #g47, #g48, #g49, #g50, #g51, #g52, #g53 {
    grid-row-start: 5;
  }

  /* g X ROW */
  #g55, #g56, #g57, #g58, #g59, #g60, #g61, #g62, #g63, #g64, #g65, #g66, #g67, #g68, #g69, #g70, #g71 {
    grid-row-start: 7;
  }

  #g55 {
    grid-column-start: 17;
  }

  #g56 {
    grid-column-start: 16;
  }

  #g57 {
    grid-column-start: 15;
  }

  #g58 {
    grid-column-start: 14;
  }

  #g59 {
    grid-column-start: 13;
  }

  #g60 {
    grid-column-start: 12;
  }

  #g61 {
    grid-column-start: 11;
  }

  #g62 {
    grid-column-start: 10;
  }

  #g63 {
    grid-column-start: 9;
  }

  #g64 {
    grid-column-start: 8;
  }

  #g65 {
    grid-column-start: 7;
  }

  #g66 {
    grid-column-start: 6;
  }

  #g67 {
    grid-column-start: 5;
  }

  #g68 {
    grid-column-start: 4;
  }

  #g69 {
    grid-column-start: 3;
  }

  #g70 {
    grid-column-start: 2;
  }

  #g71 {
    grid-column-start: 1;
  }

  /* i X ROW */
  #g73, #g74, #g75, #g76, #g77, #g78, #g79, #g80, #g81, #g82, #g83, #g84, #g85, #g86, #g87, #g88, #g89 {
    grid-row-start: 9;
  }

  /* BOTTOM X ROW */
  #g91, #g92, #g93, #g94, #g95, #g96, #g97, #g98, #g99, #g100, #g101, #g102, #g103, #g104, #g105, #g106, #g107 {
    grid-row-start: 11;
  }

  #g91 {
    grid-column-start: 17;
  }

  #g92 {
    grid-column-start: 16;
  }

  #g93 {
    grid-column-start: 15;
  }

  #g94 {
    grid-column-start: 14;
  }

  #g95 {
    grid-column-start: 13;
  }

  #g96 {
    grid-column-start: 12;
  }

  #g97 {
    grid-column-start: 11;
  }

  #g98 {
    grid-column-start: 10;
  }

  #g99 {
    grid-column-start: 9;
  }

  #g100 {
    grid-column-start: 8;
  }

  #g101 {
    grid-column-start: 7;
  }

  #g102 {
    grid-column-start: 6;
  }

  #g103 {
    grid-column-start: 5;
  }

  #g104 {
    grid-column-start: 4;
  }

  #g105 {
    grid-column-start: 3;
  }

  #g106 {
    grid-column-start: 2;
  }

  #g107 {
    grid-column-start: 1;
  }

  /* STRAGGLERS */
  #g54 {
    grid-row-start: 6;
  }

  #g90 {
    grid-row-start: 10;
  }

  /* LEFT Y COL */
  #g1, #g35, #g36, #g37, #g71, #g72, #g73 {
    grid-column-start: 1;
  }

  #g73 {
    grid-row-start: 9;
  }

  #g72 {
    grid-row-start: 8;
  }

  #g71 {
    grid-row-start: 7;
  }

  #g37 {
    grid-row-start: 5;
  }

  #g36 {
    grid-row-start: 4;
  }

  #g35 {
    grid-row-start: 3;
  }
  /* LEFT Y COL END */

  /* RIGHT Y COL */
  #g17, #g18, #g19, #g53, #g54, #g55, #g89, #g90, #g91 {
    grid-column-start: 17;
  }

  .dice-container {
    /* margin-top: 40px; */
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
    width: 1430px;
    height: 81px;
    z-index: 2;
    position: absolute;
    margin-top: 89px;
  }
  .board-content-2 {
    width: 1430px;
    height: 81px;
    z-index: 2;
    position: absolute;
    margin-top: 267px;
    margin-left: 90px;
  }

  .board-content-3 {
    width: 1430px;
    height: 81px;
    z-index: 2;
    position: absolute;
    margin-top: 445px;
  }

  .board-content-4 {
    width: 1430px;
    height: 81px;
    z-index: 2;
    position: absolute;
    margin-top: 623px;
    margin-left: 90px;
  }

  .board-content-5 {
    width: 1430px;
    height: 81px;
    z-index: 2;
    position: absolute;
    margin-top: 801px;
  }

  P {
    font-size: 25px;
    font-weight: bold;
    color: blue;
  }

</style>

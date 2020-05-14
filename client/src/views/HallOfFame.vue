<template>
  <div id="halloffame" @mousemove="mouseInteraction($event)" v-resize="onResize">
    <canvas id="canvas"></canvas>
    <div class="halloffame-container">
      <div class="halloffame">
        <div class="menu">
          <div class="back-container">
            <router-link :to="{name: 'newgame'}"> <img class="back" :src="back"> </router-link>
          </div>
          <div class="about-container">
            <router-link :to="{name: 'about'}"> <img class="about" :src="about"> </router-link>
          </div>
          <div class="title-container">
            <p class="title">Hall of Fame</p>
          </div>
        </div>
        <div class="scoreboard-container">
          <div class="scoreboard">
            <div class="heading-container">
              <th class="player-heading">Player</th>
              <th class="high-heading">High Score</th>
          </div>
            <score-board  v-if="scoreBoard" v-for="(list,index) in sortScores" :key="index" :list="list"></score-board>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Circle from '@/helpers/HomePageCanvas.js';
import resize from 'vue-resize-directive';
import about from '@/assets/images/about.png';
import back from '@/assets/images/back.png';
import QuizzaService from '@/services/QuizzaService.js';
import ScoreBoard from '@/components/ScoreBoard.vue'


export default {
    name: 'halloffame',
    components:{
      'score-board': ScoreBoard
    },
    data() {
      return {
        circleArr: [],
        mouse: {
          x: null,
          y: null
        },
        about: about,
        back: back,
        scoreBoard: []
      }
    },
    mounted() {
      this.getScores()
      this.setCanvasDimensions();
      this.circleArray();
      this.animateCircles();
    },

    methods: {
      getScores(){
        QuizzaService.getScores()
        .then(score => this.scoreBoard = score)
      },
      setCanvasDimensions() {
        const canvas = document.querySelector('#canvas')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      },
      circleArray() {
        const canvas = document.querySelector('#canvas')
        const c = canvas.getContext('2d');
        let circleArray = [];

        for (var i = 0; i < 800; i++) {
          let radius = Math.floor(Math.random() * 6);
          let x = Math.random() * (innerWidth - radius * 2) + radius;
          let y = Math.random() * (innerHeight - radius * 2) + radius;
          let dx = (Math.random() - 0.5) * 3;
          let dy = (Math.random() - 0.5) * 3;
          circleArray.push(new Circle (x, y, radius, dx, dy, c, this.mouse))
        }
        this.circleArr = circleArray
        return circleArray
      },
      animateCircles() {
        const canvas = document.querySelector('#canvas')
        const c = canvas.getContext('2d');
        requestAnimationFrame(this.animateCircles)
        c.clearRect(0, 0, innerWidth, innerHeight)

        for (var i = 0; i < this.circleArr.length; i++) {
          this.circleArr[i].update()
        }
      },
      mouseInteraction(event) {
        this.mouse.x = event.x;
        this.mouse.y = event.y;
      },
      onResize() {
        const canvas = document.querySelector('#canvas')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.init()
      },
      init() {
        this.circleArray()
      }
    },
    computed: {
      sortScores(){
      const newBoard = this.scoreBoard.sort(function (a, b) {
        return b.score - a.score;
          });
        const topScores = [];
        if (newBoard.length > 5) {
          for(let i=0; i <= 5; i++){
            topScores.push(newBoard[i])
          }
          return topScores;
        } else {
          return newBoard;
        }
    }
  },
    directives: {
      resize,
    }
  }
</script>

<style scoped>
  #canvas {
    background-color: #8e9aaf;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }

  .halloffame-container {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: block;
    text-align: center;
    position: absolute;
    z-index: 1;
  }

  .halloffame {
    width: 750px;
    height: 550px;
    display: inline-block;
    color: white;
    font-family: 'Russo One', sans-serif;
    text-shadow: 2px 2px 4px #000000;
    box-shadow: 2px 2px 4px #000000;
    -webkit-animation: fadeIn 4s;
    border-style: solid;
    border-radius: 5%;
    margin-top: 50px;
    background-color: #8e9aaf;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #newgame {
    position: relative;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .menu {
    margin-bottom: 50px;
    margin-top: 20px;
  }

  .back-container {
    width: 10%;
    float: left;
  }

  .back {
    height: 60px;
    border-radius: 50%;
  }

  .back:hover {
    background-color: #ff70a6;
  }

  .back:focus {
    outline: none;
  }

  .about-container {
    width: 10%;
    float: left;
  }

  .about {
    height: 60px;
  }

  .about:hover {
    background-color: #907ad6;
    border-radius: 50%;
  }

  .about:focus {
    outline: none;
  }

  .title-container {
    width: 78%;
    float: left;
    margin-bottom: 10px;
  }

  .title {
    font-family: 'Russo One', sans-serif;
    font-size: 70px;
    float: left;
    margin-left: 10px;
  }

  .sub-text {
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
  }

  #about {
    position: relative;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .scoreboard-container {
    width: 100%;
    overflow: auto;
  }

  .scoreboard {
    width: 480px;
    display: inline-block;
    margin-top: 20px;
  }

  .heading-container {
    width: 100%;
    overflow: auto;
  }

  .player-heading {
    border-style: solid;
    width: 325px;
    height: 45px;
    float: left;
    font-size: 30px;
  }

  .high-heading {
    border-style: solid;
    width: 155px;
    height: 45px;
    float: right;
    font-size: 20px;
    padding-top: 8px;
  }
</style>

<template>
  <div id="about" @mousemove="mouseInteraction($event)" v-resize="onResize">
    <canvas id="canvas"></canvas>
    <div class="about-container">
      <div class="about">
        <div class="rules">
          <div class="back-container">
            <router-link :to="{name: 'newgame'}"> <img class="back" :src="back"> </router-link>
          </div>
          <div class="high-score-container">
            <router-link :to="{name: 'halloffame'}"> <img class="high" :src="highscore"> </router-link>
          </div>
          <div class="title-container">
            <p class="title">Rules</p>
          </div>
          <div class="rule-details-container">
            <p class="sub-text">Classic</p>
            <p class="details">Each player must correctly answer questions from six categories: Sport, Science & Nature, Geography, Animals, General Knowledge & History. Each category has a corresponding colour and each tile on the board, prompts a question from a specific category. When a player correctly answers a question from all 6 categories - they WIN!</p>
            <p class="sub-text">Seek</p>
            <p class="details">Each player must race to the end of the board, while avoiding point deduction traps. Players can collect points by answering questions correctly or landing on bonus tiles, which allocate points. The game is concluded and points tallied when a player lands on the finishing line and answers a question correctly.</p>
            <p class="sub-text">Mental</p>
            <p class="details"> A tongue-in-cheek board game. As the name suggests, the game is mental with random point allocations and deductions, random board positioning and lots of flashing tiles. The game is un-winnable.... unless you think you can collect 666 points</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Circle from '@/helpers/HomePageCanvas.js';
import resize from 'vue-resize-directive';
import highscore from '@/assets/images/highscore.png';
import back from '@/assets/images/back.png';

export default {
    name: 'about',
    data() {
      return {
        circleArr: [],
        mouse: {
          x: null,
          y: null
        },
        highscore: highscore,
        back: back,
      }
    },
    mounted() {
      this.setCanvasDimensions();
      this.circleArray();
      this.animateCircles();
    },
    methods: {
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
    top: 0 ;
    z-index: 0;
  }

  .about-container {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: block;
    text-align: center;
    position: absolute;
    z-index: 1;
  }

  .about {
    width: 750px;
    height: 700px;
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

  .rules {
    margin-bottom: 50px;
    margin-top: 10px;
  }

  .back-container {
    width: 80px;
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

  .high-score-container {
    width: 60px;
    float: left;
  }

  .high {
    height: 60px;
  }

  .high:hover {
    background-color: #907ad6;
  }

  .high:focus {
    outline: none;
  }

  .title-container {
    width: 78%;
    float: left;
  }

  .title {
    font-family: 'Russo One', sans-serif;
    font-size: 100px;
    margin-bottom: 5px;
    float: left;
    margin-left: 15%;
  }

  .sub-text {
    font-size: 35px;
    font-family: 'Russo One', sans-serif;
    margin-top: 20px;
    text-align: center;
  }

  .details {
    font-size: 18px;
    font-family: 'Open Sans';
  }

  #about {
    position: relative;
  }

  .rule-details-container {
    width: 90%;
    display: inline-block;
    text-align: justify;
  }

  p {
    padding: 0;
    margin: 0;
  }
</style>

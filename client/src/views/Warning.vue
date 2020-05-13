<template>
  <div id="warning" @mousemove="mouseInteraction($event)" v-resize="onResize">
    <canvas id="canvas"></canvas>
    <div class="warning-container">
      <div class="warning">
        <div class="title-container">
          <p class="title">WARNING</p>
        </div>
        <div class="sub-text">
          <p>This board contains flashing/strobing tiles, which may adversely effect photosensitive users. Please DO NOT play this game type if you feel you are at risk.</p>
          <p class="continue">Continue?</p>
        </div>
        <div class="option-container">
            <router-link class="option" :to="{name: 'mental', params:{player1, player2, player3, player4}}">YES</router-link>
          <router-link class="option" :to="{name: 'newgame'}">NO</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Circle from '@/helpers/HomePageCanvas.js';
import resize from 'vue-resize-directive';

export default {
  name: 'warning',
  props: ['player1', 'player2', 'player3', 'player4'],
  data() {
    return {
      circleArr: [],
      mouse: {
        x: null,
        y: null
      }
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

<style lang="css" scoped>
  #canvas {
    background-color: #8e9aaf;
    position: absolute;
    left: 0;
    top: 0 ;
    z-index: 0;
  }

  .warning-container {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: block;
    text-align: center;
    position: absolute;
    z-index: 1;
  }

  .warning {
    width: 770px;
    height: 400px;
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

  #warning {
    position: relative;
  }

  p {
    padding: 0;
    margin: 0;
  }

  .title-container {
    width: 100%;
    text-align: center;
  }

  .title {
    font-family: 'Russo One', sans-serif;
    font-size: 100px;
    margin-bottom: 15px;
  }

  .sub-text {
    display: inline-block;
    width: 90%;
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
  }

  .continue {
    font-family: 'Russo One', sans-serif;
    margin-top: 30px;
    font-size: 35px;
  }

  .option-container {
    margin-top: 20px;
  }

  .option {
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    color: white;
    margin-right: 40px;
    margin-left: 40px;
  }

  .option:hover {
    opacity: 70%;
  }
</style>

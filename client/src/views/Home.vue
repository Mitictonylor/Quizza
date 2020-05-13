<template>
  <div id="home" @mousemove="mouseInteraction($event)" v-resize="onResize">
    <canvas id="canvas"></canvas>
    <div class="title-container">
      <div class="title">
        <p>QuizzA</p>
        <hr>
        <p class="tagline">A Fra, Toni & Crug jam</p>
      </div>
      <div class="button-container">
        <router-link :to="{name: 'newgame'}"> <img class="input" :src="goButton"> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Circle from '@/helpers/HomePageCanvas.js';
import resize from 'vue-resize-directive';
import go from '@/assets/images/go.png';

export default {
    name: 'home',
    data() {
      return {
        circleArr: [],
        mouse: {
          x: null,
          y: null
        },
        goButton: go
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

  .title-container {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: block;
    text-align: center;
    position: absolute;
    z-index: 1;

  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .title {
    margin-top: 170px;
    display: inline-block;
    font-size: 200px;
    color: white;
    font-family: 'Russo One', sans-serif;
    text-shadow: 2px 2px 4px #000000;
    -webkit-animation: fadeIn 4s;
  }

  .tagline {
    font-size: 30px;
    font-family: 'Open Sans', sans-serif;
    float: right;
    text-shadow: 2px 2px 4px #000000;
    -webkit-animation: fadeIn 8s;
  }

  .button-container {
    margin-top: 80px;
    animation: 4s delayEffect;
    animation-fill-mode: forwards;
    visibility: hidden;
  }

  @keyframes delayEffect {
    99% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }

  .input {
    background-color: transparent;
    color: white;
    height: 60px;
    text-shadow: 2px 2px 4px #000000;
    border-radius: 50%;
  }

  .input:hover {
    background-color: #ff70a6;
    height: 65px;
  }

  .input:focus {
    outline: none;
  }

  #home {
    position: relative;
  }

  #home {
    cursor: pointer;
  }

  p {
    padding: 0;
    margin: 0;
  }

  hr {
    padding: 0;
    margin: 0;
  }
</style>

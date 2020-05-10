<template>
  <div>
    <div id="app">
      <canvas id="canvas"></canvas>
    </div>

    <router-link :to="{name: 'newgame'}"> New Game</router-link>
  </div>
</template>

<script>
import Circle from '@/helpers/HomePageCanvas.js';

export default {
  name: 'home',
  data() {
    return {
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      dx: (Math.random() - 0.5) * 10,
      dy: (Math.random() -0.5) * 10,
      radius: 30,
      circleArr: [],
      mouse: {
        x: null,
        y: null
      },
    }
  },
  mounted() {
    this.setCanvasDimensions();
    this.circleArray();
    this.animateCircles();
  }
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
      requestAnimationFrame(this.animateClass)
      c.clearRect(0, 0, innerWidth, innerHeight)

      for (var i = 0; i < this.circleArr.length; i++) {
        this.circleArr[i].update()
      }
    },
    mouseInteraction(event) {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    },
  }
}
</script>

<style scoped>
#canvas {
  background-color: #8e9aaf;
}
</style>

<style>
body {
  margin: 0;
  overflow-x: hidden;
  user-select: none;
}
</style>

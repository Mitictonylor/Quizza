<template>
  <div id="newgame" @mousemove="mouseInteraction($event)" v-resize="onResize">
    <canvas id="canvas"></canvas>
    <div class="form-container">
      <div class="form">
        <player-form/>
      </div>
    </div>
  </div>
</template>

<script>
import Circle from '@/helpers/HomePageCanvas.js';
import resize from 'vue-resize-directive';
import PlayerForm from '@/components/PlayerForm.vue'

export default {
  name: 'newgame',
  components: {
    'player-form': PlayerForm
  },
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
    },
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

.form-container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: block;
  text-align: center;
  position: absolute;
  z-index: 1;
  border-style: solid;
}

.form {
  width: 50%;
  height: 50%;
  display: inline-block;
  color: white;
  font-family: 'Russo One', sans-serif;
  text-shadow: 2px 2px 4px #000000;
  -webkit-animation: fadeIn 4s;
  border-style: solid;
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
</style>

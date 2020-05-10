<template>
  <div>
    <div id="app">
      <canvas id="canvas"></canvas>
    </div>

    <router-link :to="{name: 'newgame'}"> New Game</router-link>
  </div>
</template>

<script>


export default {
  name: 'home',
  mounted() {
    this.setCanvasDimensions();

  }
  methods: {
    setCanvasDimensions() {
      const canvas = document.querySelector('#canvas')
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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

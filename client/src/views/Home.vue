<template>
  <div>
    <nav>
      <router-link :to="{name: 'newgame'}"> New Game</router-link>

    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


  export default {
      components: {

      }
    }
</script>

<style scoped>
</style>

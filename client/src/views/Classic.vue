<template lang="html">
  <div class="">
    <board-game :newPlayers="newPlayers"></board-game>
    <nav>
    </nav>

  </div>
</template>

<script>


  import BoardGame from '@/components/BoardGame.vue'

export default {
  props:['newPlayers'],
  components:{
    'board-game': BoardGame
  }
}
</script>

<style lang="css" scoped>
</style>

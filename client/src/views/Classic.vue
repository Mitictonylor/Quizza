<template lang="html">
  <div class="">
    <board-game :player1="player1" :player2="player2" :player3="player3" :player4="player4"></board-game>

    <nav>
    </nav>

  </div>
</template>

<script>


  import BoardGame from '@/components/BoardGame.vue'

export default {
  props:['player1','player2', 'player3', 'player4'],
  components:{
    'board-game': BoardGame
  }
}
</script>

<style lang="css" scoped>
</style>

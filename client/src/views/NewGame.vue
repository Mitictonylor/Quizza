<template lang="html">
  <div class="">
      <p>Please insert the players name</p>
      <playerform></playerform>
      <router-view></router-view>
  </div>
</template>

<script>

import PlayerForm from '@/components/PlayerForm.vue';

export default {
  components:{
    'playerform': PlayerForm
  }

}
</script>

<style lang="css" scoped>
</style>

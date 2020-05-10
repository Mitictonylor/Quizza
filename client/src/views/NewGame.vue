<template lang="html">
  <div class="">
      <p>Please insert the players name</p>
      <playerform></playerform>
      <nav>
        <router-link :to="{name: 'classic'}">Classic</router-link>
        <br>
        <router-link :to="{name: 'seek'}">Seek</router-link>
        <br>
        <router-link :to="{name: 'mental'}">Mental</router-link>
        <br>
      </nav>
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

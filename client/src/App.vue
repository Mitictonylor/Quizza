<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
      <br>
      <router-link :to="{name: 'about'}">About</router-link>
      <br>
      <router-link :to="{name: 'halloffame'}">Hall OF Fame</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      name: 'app',
    }
</script>

<style lang="css" scoped>
</style>

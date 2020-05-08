<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'about'}">About</router-link>
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

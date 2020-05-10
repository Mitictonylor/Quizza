<template lang="html">
  <div class="">
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'about'}">About</router-link>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

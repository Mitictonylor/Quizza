<template>
  <div id="app">
    <nav>
      <!--  name:home is from the router.js-->
      <!-- we can pass props through the params in links to stile treat hem as a -->
<router-link :to="{name: 'home'}">Home</router-link>
<router-link :to="{name: 'about'}">About</router-link>
    </nav>
    <!-- in order to say i want to rendere this computer will replace router view with whatever component we told to render -->
    <router-view id="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      
    }
  }
}
</script>

<style lang="css" scoped>

nav {
  display: flex;
  justify-content: center;
  width: 50vw;
  margin: 0 auto;
}

#view {
  width: 50vw;
  margin: 0 auto;
}

a{
  margin: 0 20px;
}

</style>

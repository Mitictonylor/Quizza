<template>
  <div id="">
    <main-header title='About' />
    <p>{{message}}</p>
  </div>
</template>
<script>
import MainHeader from '@/components/MainHeader';

export default {
  props: ['message'],
  components: {
    'main-header': MainHeader

  }
}
</script>
<style scoped>
</style>

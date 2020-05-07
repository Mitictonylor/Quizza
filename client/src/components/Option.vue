<template lang="html">
<div >
<li class="options"v-on:click="checkOption">{{option}}</li>

</div>
</template>

<script>
import {eventBus} from'../main.js'
export default {
  name:"Option",
  props:['option'],
  methods:{
  checkOption:function (){
    eventBus.$emit('selected-option', this.option)

  }
}
}
</script>

<style lang="css" scoped>
</style>

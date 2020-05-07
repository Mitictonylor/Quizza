<template lang="html">
<div class="">
<questions-item v-for="(question, index) in selectedCategory" :key="index" :question="question"></questions-item></div>
</template>

<script>
import QuestionsItem from '@/components/QuestionsItem.vue'
export default {
  name: 'Category',
  props: ['selectedCategory'],
  components:{
    "questions-item": QuestionsItem
  }
}
</script>

<style lang="css" scoped>
</style>

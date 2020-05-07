<template lang="html">

</template>

<script>
export default {
  data(){
    return{
      sport:[],
      geography:[],
      general_knowledge:[],
      history:[],
      animal:[],
      celebrity:[],
      SelectCategory: null
    }
  },
  components:{

  }
  },
  methods:{

  //   loadCategory: function(category, category_id){
  //     const url = `https://opentdb.com/api.php?amount=50&category=${category_id}&type=multiple`
  //     fetch(url).then(response=> response.json())
  //     .then(data => category = data.results)
  // }
    loadSport: function(){
      const url = 'https://opentdb.com/api.php?amount=50&category=21&type=multiple'
      fetch(url).then(response=> response.json())
      .then(data => this.sport = data.results)
  },

  loadGeograpy: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=22&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.geography = data.results)
},
loadGeneralKnowledge: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=9&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.general_knowledge = data.results)
},
loadHistory: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=23&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.history = data.results)
},
loadAnimal: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=27&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.animal = data.results)
},
loadCelebrity: function(){
    const url = 'https://opentdb.com/api.php?amount=50&category=27&type=multiple'
    fetch(url).then(response=> response.json())
    .then(data => this.celebrity = data.results)
}

},
mounted(){
  this.loadSport()
  this.loadGeograpy()
  this.loadGeneralKnowledge()
  this.loadHistory()
  this.loadAnimal()
  this.loadCelebrity()
  // this.loadCategory(this.sport, 21);
  // this.loadCategory(this.geography, 22);
  // this.loadCategory(this.general_knowledge, 9);
  // this.loadCategory(this.history, 23);
  // this.loadCategory(this.animal, 27);
  // this.loadCategory(this.celebrity, 26);
}

}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <table class="table-cover" border="1">


    <tr class="row">
      <td class = "column">{{list.name}}</td>
      <td class = "column-score">{{list.score}}</td>
    </tr>


  </table>

</template>

<script>
export default {
  name: 'ScoreBoard',
  props:['list']
}
</script>

<style lang="css" scoped>
.table-cover {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 60%;
}

.column {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width: 40%;
}
.column-score{
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  width: 19%;
}
.row:nth-child(even) {
  background-color: #dddddd;
}
</style>

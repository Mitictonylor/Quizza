<template lang="html">
  <table class="table-cover" border="1">
    <tr class="row">
      <td class = "column">{{list.name.toUpperCase()}}</td>
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
  font-family: 'Open Sans', sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 20px;
}

.column {
  border: 1px solid #dddddd;
  text-align: center;
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

<template class="header">
  <h1 class="headerTitle">{{headerTitle}}</h1>
</template>


<script>
  export default {
    name: 'Header',
    data() {
      return {
        headerTitle: 'I am Header'
      }
    }
  }

</script>


<style scoped>
  .headerTitle {
    text-align: center;
    background-color: #0b97c4;
  }

</style>

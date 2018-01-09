<template class="footer">
  <h1 class="footerTitle">{{footerTitle}}</h1>
</template>


<script>
  export default {
    name: 'Header',
    data() {
      return {
        footerTitle: 'I am Footer'
      }
    }
  }

</script>


<style scoped>
  .footerTitle {
    text-align: center;
    background-color: green;
  }

</style>

<template>
  <router-link :to="samplePath">{{msg}}</router-link>
</template>

<script>
  import {routerMap} from '@/router/router-map';
  export default {
    name: 'Main',
    data () {
      return {
        msg: 'Click me you will go to sample page! try it!',
        samplePath: routerMap.SAMPLE_PATH
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

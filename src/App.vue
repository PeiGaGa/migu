<template>
  <div id="app">
    <Top></Top>
    <router-view></router-view>
  </div>
</template>


<script>
import Top from './components/top'
export default {
  name:'app',
  components:{
    Top,
  }
}
</script>

<style scoped>
  #app{
    width: 100%;height: 100%;
    overflow: auto;
  }
</style>

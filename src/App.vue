<template>
  <div id="app">
    <Top></Top>
    <lbt></lbt>
    <Yuansong></Yuansong>
    <Bottom></Bottom>
  </div>
</template>


<script>
import Top from './components/top'
import Bottom from './components/bottom'
import Yuansong from './components/yuansong'
import Lbt from  "./components/home/home.vue"


export default {
  name:'app',
  components:{
    Top,
    Bottom,
    Yuansong,
    Lbt
  }
}
</script>

<style scoped>
  #app{
    width: 100%;height: 100%;
    overflow: auto;
  }
</style>

<template>
  <div id="app">
    <Top></Top>
    <Yuansong></Yuansong>
    <Bottom></Bottom>
  </div>
</template>


<script>
import Top from './components/top'
import Bottom from './components/bottom'
import Yuansong from './components/yuansong'

export default {
  name:'app',
  components:{
    Top,
    Bottom,
    Yuansong
  }
}
</script>

<style scoped>
  #app{
    width: 100%;height: 100%;
    overflow: auto;
  }
</style>

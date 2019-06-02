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
 
</style>

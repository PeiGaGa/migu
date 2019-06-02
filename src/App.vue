<template>
  <div id="app">
    <Nav></Nav>
    <Home></Home>  
    
    
  </div>
</template>
<script>
import Nav from './components/nav/nav'
import Home from './components/home/home'
export default {
  name:'app',
  components:{
    Nav,
    Home
  }

}
</script>

<style scoped>
 
</style>

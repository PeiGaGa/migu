<template>
  <div id="app">
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from './components/nav'
export default {
  name:'app',
  components:{
    Nav
  }

}
</script>

<style scoped>
  #app{
        width: 100%;
        height: 1.88rem;
        background: red;
  }
</style>

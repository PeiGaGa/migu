<template>
  <div>
    <div id="nav">
        <div>
            <a href>
            <img src="" id="logo">
         </a>
         </div>
        <form action=''>
            <input type="text" id="soso">
         </form>
        <a href id="icon"></a>
        <a href id="list"></a>
    </div>
    <div>
        <ul>
            <li></li>
        </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "Nav"
};
</script>


<style>
#nav {
  width: 100%;
  height: 1.88rem;
  display: flex;
  align-content: center;
}
#logo {
  display: block;
  margin: 0.21rem 0 0 0.21rem;
  height: 0.66rem;
  width: 1.344rem;
}
#nav > form{
    width:3.23rem;
    height: 0.63rem;
}
#soso{
    width:3.23rem;
    height: 0.63rem;
}
#icon{
    width: 1.35rem;
    height: 1.04rem;
}
#list{
    width: .85rem;
    height:1.04rem;
}
</style>
<template>
    <div>
        <home></home>
        <yuansong></yuansong>
        <bottom></bottom>
    </div>
</template>

<script>
import home from "../../src/components/home/home"
import yuansong from "../../src/components/yuansong"
import bottom from "../../src/components/bottom"
export default {
    name:'index',
    components:{
        home,
        yuansong,
        bottom

    }
}
</script>

<style >
    
</style>
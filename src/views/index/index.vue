<template>
    <div>
        <home></home>
        <yuansong></yuansong>
        <bottom></bottom>
    </div>
</template>

<script>
import home from "@components/home/home"
import yuansong from "@components/yuansong"
import bottom from "@components/bottom"
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
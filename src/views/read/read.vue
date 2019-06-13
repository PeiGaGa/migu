<template>
    <div>
        <Lbt></Lbt>
        <reading></reading>
        <bottom></bottom>
    </div>
</template>

<script>
import Lbt from "@components/home/home"
import bottom from "@components/bottom"
import reading from "@components/reading/reading"
export default {
    components:{
        reading,
        Lbt,
        bottom

    }
}
</script>

<style scoped>
    
</style>
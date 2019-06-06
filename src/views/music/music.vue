<template>
    <div>
        <yuansong id="box"></yuansong>
    </div>
</template>


<script>
import yuansong from '@components/yuansong';

export default {
    name:"music",
    components:{
        yuansong,
    }
}
</script>

 <style scoped>
    #box{
        position: absolute;
        top: 1.88rem;
    }
 </style>
 
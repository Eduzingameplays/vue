<template>

    <ImagensPrincipal/>
    <br>
    <VideoUnico/>
    <br>
    <OutroComponente/>

</template>

<script>
import ImagensPrincipal from './ImagensDiversas.vue';
import VideoUnico from './VideoUnico.vue';
import OutroComponente from './OutroComponente.vue';
    export default {
        name: 'PaginaPrincipal', 
        components:{
            ImagensPrincipal,VideoUnico,OutroComponente
        },
        props: {
            msg: String
        }
    }
</script>

<style scoped></style>
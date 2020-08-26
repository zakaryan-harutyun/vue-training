<template>
    <div :style="{backgroundColor: bgColor, width: width, height: height, textAlign: 'center'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            bgColor: {type: String, default: 'orange'},
            width: {type: String, default: '50px'},
            height: {type: String, default: '50px'},
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>

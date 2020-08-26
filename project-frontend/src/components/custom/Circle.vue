<template>
    <div class="custom-circle" :style="{width: radius, height: radius, left: `${positions.x}px`, top: `${positions.x}px`, backgroundColor: bgColor}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            radius: {type: String, default: '50px'},
            bgColor: {type: String, default: 'orange'},
            positions: {type: Object, default: () => {return {x: 0, y: 0}}}
        }
    }
</script>

<style scoped>
    .custom-circle {
        position: absolute;
        border-radius: 50%;
    }
</style>

<template>
    <div>
        <project-header/>
        <slot></slot>
    </div>
</template>

<script>
    import ProjectHeader from "./includes/Header";
    export default {
        components: {ProjectHeader}
    }
</script>

<style scoped>

</style>

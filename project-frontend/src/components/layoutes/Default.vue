<template>
    <div>
        <default-header/>
        <slot></slot>
    </div>
</template>

<script>
    import DefaultHeader from "./includes/DefaultHeader";
    export default {
        components: {DefaultHeader}
    }

</script>

<style scoped>

</style>

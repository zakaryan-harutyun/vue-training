<template>
    <div>
        <h1>{{ $route.params.user_id }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            this.getUser()
        },
        methods: {
            getUser(){
                this.axios.get(`https://reqres.in/api/users/${this.$route.params.user_id}`).then(res => {
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>

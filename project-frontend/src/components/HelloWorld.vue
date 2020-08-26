<template>
    <div>
        <b-container>
            <h1 class="mt-4">Main page</h1>
        </b-container>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                class_name: 'text-danger',
                num: 0,
                some_data: [
                    {id: 2, val: 545},
                    {id: 3, val: 545},
                    {id: 4, val: 545},
                    {id: 5, val: 545},
                ]
            }
        },
        methods: {

        },
        computed: {
            randText() {
                return 'Text'
            }
        },
        beforeMount(){

        },
        mounted() {
            setInterval(() => {
                this.num++
            }, 500);
        },
        created() {

        },
        beforeDestroy() {
            // confirm("are you sure")
        },
        destroyed() {

        }
    }
</script>

<style scoped>

</style>

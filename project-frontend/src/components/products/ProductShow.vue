<template>
    <b-container>
        <b-row>
            <b-col>
                <h2>{{ product.name }}</h2>
                {{ product }}

            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                product_id: this.$route.params.product_id
            }
        },
        mounted() {
            this.$store.dispatch('getProduct', this.product_id)
        },
        computed: {
            product() {
                return this.$store.getters.currentProduct
            }
        }
    }
</script>

<style scoped>

</style>

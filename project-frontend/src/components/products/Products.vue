<template>
    <div>
        <b-container>
            <b-row>
                <b-col class="py-3">
                    <button class="btn btn-success" v-b-modal.create_product_modal>
                        Add new Product
                    </button>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12">
                    <b-table :items="products"
                             show-empty
                             :fields="table_fields"
                    >
                        <template v-slot:cell(actions)="data">
                            <router-link class="btn btn-secondary" :to="{name: 'Products-Edit', params: {product_id: data.item.id}}">
                                Edit
                            </router-link>
                            <router-link class="btn btn-success" :to="{name: 'Products-Show', params: {product_id: data.item.id}}">
                                Show
                            </router-link>
                            <button class="btn btn-danger">Delete</button>
                        </template>
                    </b-table>
                </b-col>
            </b-row>
        </b-container>
        <b-modal id="create_product_modal" title="Create new product" v-model="create_modal">
            <b-form>
                <b-form-group label="Name">
                    <b-form-input
                        v-model="product.name"
                        type="text"
                        required
                        placeholder="Enter product name"
                    ></b-form-input>
                </b-form-group>
                <b-form-group label="Category">
                    <b-form-input
                        v-model="product.category"
                        type="text"
                        required
                        placeholder="Enter product category"
                    ></b-form-input>
                </b-form-group>
                <b-form-group label="Description">
                    <b-form-textarea
                        v-model="product.description"
                        required
                        placeholder="Enter product description"
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group label="Price">
                    <b-form-input
                        v-model="product.price"
                        type="number"
                        step="0.01"
                        required
                        placeholder="Enter product price"
                    ></b-form-input>
                </b-form-group>
            </b-form>
            <template v-slot:modal-footer>
                <div>
                    <button class="btn btn-success" @click="saveProduct">
                        <b-spinner v-if="loader" variant="white"></b-spinner>
                        <span v-else>Save</span>
                    </button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {},
                create_modal: false,
                loader: false,
                table_fields: [
                    {key: 'id'},
                    {key: 'name'},
                    {key: 'description'},
                    {key: 'price'},
                    {key: 'created_at'},
                    {key: 'actions'},
                ]
            }
        },
        mounted() {
            this.$store.dispatch('getProducts')
        },
        methods: {
            saveProduct() {
                if(this.loader) return;
                this.loader = true;
                this.$store.dispatch('saveProduct', this.product).then(() => {
                    this.create_modal = false
                }).finally(() => {
                    this.loader = false
                });
            }
        },
        computed: {
            products() {
                return this.$store.getters.productsList
            }
        }
    }
</script>

<style scoped>

</style>

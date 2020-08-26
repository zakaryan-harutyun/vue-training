<template>
    <b-container>
        <b-row>
            <b-col cols="4" class="mx-auto">
                <h2 class="text-center py-3">Register</h2>
                <form action="" @submit.prevent="registerUser">
                    <b-form-group>
                        <b-form-input
                            v-model="user_credentials.name"
                            type="text"
                            required
                            placeholder="John Doe"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input
                            v-model="user_credentials.email"
                            type="email"
                            required
                            placeholder="example@gmail.com"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input
                            v-model="user_credentials.password"
                            type="password"
                            required
                            placeholder="*******"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input
                            v-model="user_credentials.password_confirmation"
                            type="password"
                            required
                            placeholder="*******"
                        ></b-form-input>
                    </b-form-group>
                    <button class="btn btn-primary btn-block">Register</button>
                    <div class="text-center">
                        <router-link :to="{name: 'Login'}">
                            <small>Go to login</small>
                        </router-link>
                    </div>
                </form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                user_credentials: {}
            }
        },
        methods: {
            registerUser() {
                this.$store.dispatch('register', this.user_credentials)
            }
        }
    }
</script>

<style scoped>

</style>

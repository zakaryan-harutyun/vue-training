<template>
    <b-container>
        <b-row>
            <b-col cols="4" class="mx-auto">
                <h2 class="text-center py-3">Login</h2>
                <form @submit.prevent="login">
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
                    <button class="btn btn-primary btn-block">Log in</button>
                    <div class="text-center">
                        <router-link :to="{name: 'Register'}">
                            <small>Go to register</small>
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
            login() {
                this.$store.dispatch('login', this.user_credentials).then(() => {
                    this.$router.push({name: 'HomePage'})
                })
            }
        }
    }
</script>

<style scoped>

</style>

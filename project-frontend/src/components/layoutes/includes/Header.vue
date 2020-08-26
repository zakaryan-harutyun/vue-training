<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <b-navbar-nav>
                            <b-nav-item href="/home">Home</b-nav-item>
                            <b-nav-item href="/products">Products</b-nav-item>
                            <b-nav-item @click="logout()" href="#">Logout</b-nav-item>

                            <!-- Navbar dropdowns -->
                     <!--       <b-nav-item-dropdown text="Lang" right>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>-->


                        </b-navbar-nav>
                    </b-col>
                </b-row>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>


    export default {
        methods:{
            logout(){
                this.$store.dispatch('logout').then(()=>{
                    this.$router.push({name: 'HelloWorld'})
                });
            }
        }
    }
</script>

<style scoped>

</style>

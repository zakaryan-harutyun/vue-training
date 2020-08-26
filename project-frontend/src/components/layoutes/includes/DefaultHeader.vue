<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <b-navbar-nav>
                            <b-nav-item href="/login">Login</b-nav-item>
                            <b-nav-item href="/register">Register</b-nav-item>
                        </b-navbar-nav>
                    </b-col>
                </b-row>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "DefaultHeader"
    }
</script>

<style scoped>

</style>

<template>
    <div>
        <h1 class="mt-2 text-center">Users</h1>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <button class="btn btn-success my-2">Add new user</button>

                    <b-table :items="users" :fields="table_params.fields"
                             striped
                    >
                        <template v-slot:cell(avatar)="data">
                            <div class="avatar-wrapper">
                                <img :src="data.item.avatar" alt="">
                            </div>
                        </template>

                        <template v-slot:cell(actions)="data">
                            <router-link :to="{name: 'User-Profile', params: {user_id: data.item.id}}">
                                Profile
                            </router-link>
                        </template>

                    </b-table>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                table_params: {
                    fields: [
                        {key: 'id', sortable: true},
                        {key: 'avatar'},
                        {key: 'full_name', label: 'Name', formatter: (item, key, row) => `${row.first_name} ${row.last_name}` },
                        {key: 'email'},
                        {key: 'actions'},
                    ]
                }
            }
        },
        mounted() {
            this.$store.dispatch('getUsersList')


        },
        computed: {
            users() {
                return this.$store.getters.usersList
            }
        }
    }
</script>

<style scoped>

</style>

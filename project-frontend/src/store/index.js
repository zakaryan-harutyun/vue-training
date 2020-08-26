import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// modules
import products from "./modules/products";
import user from "./modules/user";
import auth from "./modules/auth";
Vue.use(Vuex);

export default new Vuex.Store( {
    state: {
        users_list: []
    },
    mutations: {
        storeUsersList(state, data) {
            state.users_list = data
        }
    },
    getters: {
        usersList(state) {
            return state.users_list
        }
    },
    actions: {
        getUsersList(context) {
            axios.get('https://reqres.in/api/users').then(res => {
                context.commit('storeUsersList', res.data.data)
            }).catch((err)=> {
                console.log(err.response)
            });
        }
    },
    modules: {
        products: products,
        user: user,
        auth: auth
    }
})

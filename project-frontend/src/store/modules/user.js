import axios from 'axios'
export default {
    state: {
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/user/register', data).then(res => {
                    resolve(res)
                }).catch(() => {
                    reject()
                })
            })
        }
    }
}

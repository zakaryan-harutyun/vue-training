import axios from 'axios'
export default {
    state: {
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        login(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/login', data).then(res => {
                    localStorage.setItem('access_token', res.data.access_token);
                    axios.defaults.headers.Authorization = `Bearer ${res.data.access_token}`;
                    context.dispatch('me');
                    resolve(res)
                }).catch(() => {
                    reject()
                })
            })
        },
        logout(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/logout', data).then(res => {
                    localStorage.removeItem('access_token');
                    resolve(res)
                }).catch(() => {
                    reject()
                })
            })
        },
        me(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/auth/me', data).then(res => {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    resolve(res)
                }).catch(() => {
                    reject()
                })
            })
        },
    }
}

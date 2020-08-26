import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from "../components/HomePage";
import FormExample from "../components/FormExample";
import Users from "../components/users/Users";
import UserProfile from "../components/users/UserProfile";
import Products from "../components/products/Products";
import ProductShow from "../components/products/ProductShow";
import ProductEdit from "../components/products/ProductEdit";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

Vue.use(Router);



const router =  new Router({
    mode: "history",
    routes: [
        {path: '/', name: 'HelloWorld', component: HelloWorld},

        {path: '/login', name: 'Login', component: Login, meta: {auth: false}},
        {path: '/register', name: 'Register', component: Register, meta: {auth: false}},

        {path: '/home', name: 'HomePage', component: HomePage, meta: {layout: 'dashboard', auth: true} },
        {path: '/form', name: 'FormExample', component: FormExample, meta: {auth: true} },
        {path: '/users', name: 'Users', component: Users, meta: {layout: 'dashboard', auth: true} },
        {path: '/users/:user_id', name: 'User-Profile', component: UserProfile, meta: {layout: 'dashboard', auth: true} },
        {path: '/products', name: 'Products', component: Products, meta: {layout: 'dashboard', auth: true}} ,
        {path: '/products/:product_id', name: 'Products-Show', component: ProductShow, meta: {layout: 'dashboard', auth: true} },
        {path: '/products/:product_id/edit', name: 'Products-Edit', component: ProductEdit, meta: {layout: 'dashboard', auth: true} },
    ]
});

router.beforeEach((to, from, next) => {

    if(to.meta.auth && !localStorage.getItem('access_token')) {
        router.push({name: 'Login'})
    }else {
        next()
    }
});

export default router

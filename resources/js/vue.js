/*jshint esversion: 6 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import store from './store/auth';

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Users from './components/users';
import Login from './components/login';
import Register from './components/register';
import MainPage from './components/mainPage';
import Wallets from './components/wallets';
import Movements from './components/movements';

const routes = [
    {path:'/', redirect:'/mainPage'},
    {path:'/users', component:Users},
    {path:'/wallets', component:Wallets},
    {path:'/login', component:Login},
    {path:'/register', component:Register},
    {path:'/mainPage', component:MainPage},
    /* {path:'/mainPage', component:MainPage}, */
    {path:'/movements', component:Movements}
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    store,
    router,
    data: {
        
    },
    methods: {
        
    },
    mounted() {

    }
    
});

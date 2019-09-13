/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//sweetalert
import Swal from 'sweetalert2';
window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;
window.Fire =  new Vue();

import BackToTop from 'vue-backtotop'
Vue.use(BackToTop);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)




let routes = [
    { path: '/', component: require('./components/home.vue').default },
    { path: '/about', component: require('./components/about.vue').default },
    { path: '/company', component: require('./components/company.vue').default },
    { path: '/careers', component: require('./components/careers.vue').default },
    { path: '/team', component: require('./components/team.vue').default },
    { path: '/services', component: require('./components/services.vue').default },
    { path: '/software', component: require('./components/software.vue').default },
    { path: '/Web-Design', component: require('./components/WebDesign.vue').default },
    { path: '/contact', component: require('./components/contact.vue').default },
    { path: '/portfolio', component: require('./components/portfolio.vue').default },
    { path: '/referral', component: require('./components/referral.vue').default },
    { path: '/blog', component: require('./components/blog.vue').default }
]
const router = new VueRouter({
    //mode: 'history',
    history: true,
    base: '/',
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Multiselect from 'vue-multiselect'
import VueResource from 'vue-resource'
import VueSweetAlert from 'vue-sweetalert'
import Loader from './components/Loader.vue'

// Router
import {newRouter} from './router';
// Components
import Sidebar from './components/Sidebar.vue';

Vue.component('multiselect', Multiselect);
Vue.component('loader', Loader);
Vue.use(VueResource);
Vue.use(VueSweetAlert);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


//simple store 

let store = {
	apiUrl : '/api/',
	module : '',
	title  : ''
};


//create router
const router = newRouter();
router.beforeEach((to,from,next) => {
	store.module = to.name;
	store.name = to.meta.title;
	next();
});

const app = new Vue({
    el: '#app',
    router,
    components : {Sidebar, Loader},
    data: {
    	store
    }
});

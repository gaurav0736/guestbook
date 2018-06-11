import Vue from 'vue'
import Router from 'vue-router'

// Components
import AdminHome from './components/AdminHome.vue'

Vue.use(Router);
let adminUrl = '/admin/';

export function newRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: adminUrl, name: 'dashboard', component: AdminHome,
                meta: {
                    title: 'Dashboard',
                }
            },            
        ],
        scrollBehavior(to, from) {
            return {x: 0, y: 0};
        }
    })
}
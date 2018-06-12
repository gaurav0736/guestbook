import Vue from 'vue'
import Router from 'vue-router'

// Components
import AdminHome from './components/AdminHome.vue'
import Countries from './adminView/countries/Index.vue'
import CountriesEdit from './adminView/countries/Edit.vue'

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
            {
                path: adminUrl + 'countries', name: 'countries', component: Countries,
                meta: {
                    title: 'Countries',
                }
            },  
             {
                path: adminUrl + 'countries/create', name: 'countries-create', component: CountriesEdit,
                meta: {
                    title: 'Countries - Create',
                }
            },
            {
                path: adminUrl + 'countries/create/:id', name: 'countries-edit', component: CountriesEdit,
                meta: {
                    title: 'Countries - Edit',
                }
            },         
        ],
        scrollBehavior(to, from) {
            return {x: 0, y: 0};
        }
    })
}
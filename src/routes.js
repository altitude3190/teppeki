/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Language from '@/components/Language';
import App from './App.vue';
import Words from './components/Words';
import UncheckedWords from './components/UncheckedWords';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: App,
        },
        {
            path: '/language/:langId/category/:categoryId/words',
            component: Words
        },
        {
            path: '/language/:langId/uncheckedwords',
            component: UncheckedWords
        },
        {
            path: '/language/:langId',
            component: Language,
        }
    ]
});
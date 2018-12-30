/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Language from '@/components/Language';
import App from './App.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Language
        },
        {
            path: '/foo',
            component: App
        }
        // {
        //     path: '/language/:lang_id',
        //     component: './Lauguage',
        //     children: [
        //         {
        //             path: 'category/:category_id/words',
        //             component: 'Words'
        //         }
        //     ]
        // }
    ]
});
/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Language from '@/components/Language';
import App from './App.vue';
import Words from './components/Words';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/language/:langId',
            component: Language,
            children: [
                {
                    path: 'category/:category_id/words',
                    component: Words
                }
            ]
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
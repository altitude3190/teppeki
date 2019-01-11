import Vue from 'vue';
import Router from 'vue-router';
import Language from '@/Language.vue';
import App from '@/App.vue';
import Words from '@/Words.vue';
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
            component: Words,
            props: route => (
                {
                    // cast string to number
                    langId: Number(route.params.langId),
                    categoryId: Number(route.params.categoryId),
                }
            ),
        },
        {
            path: '/language/:langId/uncheckedwords',
            component: UncheckedWords,
        },
        {
            path: '/language/:langId',
            component: Language,
            props: route => ({ langId: Number(route.params.langId) }),
        },
    ],
});

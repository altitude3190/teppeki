import Vue from 'vue';
import Router from 'vue-router';
import Language from '@/Language.vue';
import App from '@/App.vue';
import Words from '@/Words.vue';
import RegisteredWords from '@/RegisteredWords.vue';
import NotFound from '@/NotFound.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: App,
        },
        {
            path: '/language/:langId/category/:categoryId/posgroup/:posGroupId/words',
            component: Words,
            props: route => (
                {
                    // cast string to number
                    langId: Number(route.params.langId),
                    categoryId: Number(route.params.categoryId),
                    posGroupId: Number(route.params.posGroupId),
                }
            ),
        },
        {
            path: '/language/:langId/registered/words',
            component: RegisteredWords,
            props: route => (
                {
                    langId: Number(route.params.langId),
                }
            ),
        },
        {
            path: '/language/:langId',
            component: Language,
            props: route => ({ langId: Number(route.params.langId) }),
        },
        {
            path: '*',
            component: NotFound,
        },
    ],
    // always scroll top when routing
    // if it has a savedPosition, scroll there
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { x: 0, y: 0 };
    },
});

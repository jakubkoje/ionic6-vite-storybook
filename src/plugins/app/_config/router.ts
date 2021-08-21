import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/plugins/app/home/home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;

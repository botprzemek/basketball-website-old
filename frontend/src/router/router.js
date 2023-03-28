import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';

const routes = [
    { path: '/', name: 'HomeComponent', component: HomeComponent, meta: { title: 'Start' }},
    { path: '/rejestracja', name: 'RegisterComponent', component: ()=> import('@/components/RegisterComponent.vue'), meta: { title: 'Rejestracja' }},
    { path: '/zespol', name: 'AboutComponent', component: ()=> import('@/components/TeamComponent.vue'), meta: { title: 'Zespół' }},
    { path: '/blad', component: ()=> import('@/components/ErrorComponent.vue'), meta: { title: 'Błąd' }},
    { path: '/:catchAll(.*)', redirect: '/blad' },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(to => { window.document.title = to.meta.title ? to.meta.title + ' | Knury Knurów' : 'Knury Knurów'; });
router.afterEach(()=>{});

export default router
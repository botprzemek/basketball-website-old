import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/Home/HomeComponent.vue';

const routes = [
    { path: '/', name: 'HomeComponent', alias: '/start', component: HomeComponent, meta: { title: 'Start' }},
    { path: '/aktualnosci', name: 'NewsComponent', component: ()=> import('@/components/News/NewsComponent.vue'), meta: { title: 'Aktualności' }},
    { path: '/eventy', name: 'EventComponent', component: ()=> import('@/components/Event/EventComponent.vue'), meta: { title: 'Zespół' }},
    { path: '/eventy/rejestracja', name: 'RegisterComponent', component: ()=> import('@/components/Event/Register/RegisterComponent.vue'), meta: { title: 'Rejestracja' }},
    { path: '/zespol', name: 'TeamComponent', component: ()=> import('@/components/Team/TeamComponent.vue'), meta: { title: 'Zespół' }},
    { path: '/zespol/:player', name: 'PlayerComponent', component: ()=> import('@/components/Team/PlayerComponent.vue'), meta: {  title: `Gracz` }, props: true },
    { path: '/o-nas', name: 'AboutComponent', component: ()=> import('@/components/About/AboutComponent.vue'), meta: { title: 'O nas' }},
    { path: '/media', name: 'MediaComponent', component: ()=> import('@/components/Media/MediaComponent.vue'), meta: { title: 'Media' }},
    { path: '/kontakt', name: 'ContactComponent', component: ()=> import('@/components/Contact/ContactComponent.vue'), meta: { title: 'Kontakt' }},
    { path: '/zrzutka', component: ()=> import('@/components/Fundraising/FundraisingComponent.vue'), meta: { title: 'Zrzutka' }},
    { path: '/blad', component: ()=> import('@/components/ErrorComponent.vue'), meta: { title: 'Błąd' }},
    { path: '/:catchAll(.*)', redirect: '/blad' },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(to => { window.document.title = to.meta.title ? to.meta.title + ' | Knury Knurów' : 'Knury Knurów'; });
router.afterEach(() => {});

export default router
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/routes/home/HomeComponent.vue';

const routes = [
    { path: '/', name: 'HomeComponent', alias: '/start', component: HomeComponent, meta: { title: 'Start' }},
    // { path: '/aktualnosci', name: 'NewsComponent', component: ()=> import('@/components/routes/news/NewsComponent.vue'), meta: { title: 'Aktualności' }},
    // { path: '/eventy', name: 'EventComponent', component: ()=> import('@/components/routes/event/EventComponent.vue'), meta: { title: 'Eventy' }},
    { path: '/eventy/rejestracja', name: 'RegisterComponent', component: ()=> import('@/components/routes/event/register/RegisterComponent.vue'), meta: { title: 'Rejestracja' }},
    { path: '/zespol', name: 'TeamComponent', component: ()=> import('@/components/routes/team/TeamComponent.vue'), meta: { title: 'Zespół' }},
    // { path: '/zespol/:player', name: 'PlayerComponent', component: ()=> import('@/components/routes/team/PlayerComponent.vue'), meta: {  title: `Gracz` }, props: true },
    // { path: '/o-nas', name: 'AboutComponent', component: ()=> import('@/components/routes/about/AboutComponent.vue'), meta: { title: 'O nas' }},
    // { path: '/media', name: 'MediaComponent', component: ()=> import('@/components/routes/media/MediaComponent.vue'), meta: { title: 'Media' }},
    // { path: '/kontakt', name: 'ContactComponent', component: ()=> import('@/components/routes/contact/ContactComponent.vue'), meta: { title: 'Kontakt' }},
    { path: '/zrzutka', component: ()=> import('@/components/routes/fundraising/FundraisingComponent.vue'), meta: { title: 'Zrzutka' }},
    { path: '/blad', component: ()=> import('@/components/routes/error/ErrorComponent.vue'), meta: { title: 'Błąd' }},
    { path: '/:catchAll(.*)', redirect: '/blad' },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(to => { window.document.title = to.meta.title ? to.meta.title + ' | Knury Knurów' : 'Knury Knurów'; });
router.afterEach(() => {});

export default router
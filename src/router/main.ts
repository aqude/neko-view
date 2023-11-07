import {createRouter, createWebHistory} from "vue-router";
import MainPage                         from "../pages/MainPage.vue";
import Favourites                       from "../pages/Favourites.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: MainPage
        },
        {
            path: '/favourites',
            name: 'Favourites',
            component: Favourites
        },
    ]
})
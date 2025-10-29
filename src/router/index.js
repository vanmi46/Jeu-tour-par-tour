import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        // La on a une route pour notre page / (l'accueil)
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: Home
        }
    ]
})

export default router;
import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import NavigationComponent from './components/NavigationComponent.vue'
import HouseComponent from './components/HouseComponent.vue'
import QuotesComponent from './components/QuotesComponent.vue'
import PersonsComponent from './components/PersonsComponent.vue'
const routes = [
    {
        path: '/',
        name: 'GOT',
        component: NavigationComponent,
        children: [
            {
                path: '/',
                name: 'Home',
                component: HomeComponent
            },
            {
                path: '/houses',
                name: 'houses',
                component: HouseComponent
            },
            {
                path: '/quotes',
                name: 'quote',
                component: QuotesComponent
            },
            {
                path: '/persons',
                name: 'persons',
                component: PersonsComponent
            },
           

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
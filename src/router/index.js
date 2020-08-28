import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Logout from '../components/Logout.vue'

Vue.use(VueRouter)

const routes = [
    // { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/logout', name: 'Logout', component: Logout },
    { path: '', name: 'Home', component: Home }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
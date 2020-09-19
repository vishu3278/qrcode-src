import Vue from 'vue'
import VueRouter from 'vue-router'
import VCalendar from 'v-calendar'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Logout from '../components/Logout.vue'
import Manual from '../components/Manual.vue'

Vue.use(VueRouter)
Vue.use(VCalendar)

const routes = [
    // { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/manual', name: 'Manual', component: Manual },
    { path: '/logout', name: 'Logout', component: Logout },
    { path: '', name: 'Home', component: Home }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
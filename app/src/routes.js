import HomeGuest from './components/home/Guest.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

export default [
    { path: '/', component: HomeGuest },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]
import HomeMain from './components/home/Main.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import CreateCause from './components/cause/Create.vue';

export default [
    { path: '/', component: HomeMain },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/cause/create', component: CreateCause },
]
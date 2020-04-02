import HomeMain from "./components/home/Main.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import CauseCreate from "./components/cause/Create.vue";
import CauseDetail from "./components/cause/Detail.vue";
import Profile from './components/auth/Profile.vue'
import NotFound from "./components/core/NotFound.vue";

export default [
  { name:"home", path: "/", component: HomeMain },
  { name:"login", path: "/login", component: Login },
  { name:"register", path: "/register", component: Register },
  { name:"causeCreate" ,path: "/cause/create", component: CauseCreate },
  { name: "causeDetail",path: "/cause/detail/:id", component: CauseDetail },
  { name:"profile", path: "/profile", component: Profile },
  { name:"", path: "*", component: NotFound }
];
import HomeMain from "./components/home/Main.vue";
import HomeDashbord from "./components/home/Dashboard.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import CauseCreate from "./components/cause/Create.vue";
import CauseDetail from "./components/cause/Detail.vue";
import NotFound from "./components/core/NotFound.vue";

export default [
  { path: "/", component: HomeMain },
  { path: "/dashboard", component: HomeDashbord },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/cause/create", component: CauseCreate },
  { path: "/cause/detail", component: CauseDetail },
  { path: "*", component: NotFound }
];

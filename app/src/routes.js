import HomeMain from "./components/home/Main.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
import CauseCreate from "./components/cause/Create.vue";
import CauseDetail from "./components/cause/Detail.vue";
import CauseEdit from "./components/cause/Edit.vue";
import Profile from "./components/profile/Profile.vue";
import ProfileEdit from "./components/profile/Edit.vue";
import NotFound from "./components/core/NotFound.vue";

import store from "./store/store";

export default [
  { name: "home", path: "/", component: HomeMain },
  {
    name: "login",
    path: "/login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (to.name == "login" && store.getters.User) {
        next({ name: "home" });
      } else next();
    },
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (to.name == "register" && store.getters.User) {
        next({ name: "home" });
      } else next();
    },
  },
  {
    name: "profile",
    path: "/profile",
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (to.name == "profile" && !store.getters.User) {
        next({ name: "login" });
      } else next();
    },
  },
  {
    name: "profileEdit",
    path: "/profile/edit",
    component: ProfileEdit,
    beforeEnter: (to, from, next) => {
      if (to.name == "profileEdit" && !store.getters.User) {
        next({ name: "login" });
      } else next();
    },
  },
  {
    name: "causeCreate",
    path: "/cause/create",
    component: CauseCreate,
    beforeEnter: (to, from, next) => {
      if (to.name == "causeCreate" && !store.getters.User) {
        next({ name: "login" });
      } else next();
    },
  },
  {
    name: "causeDetail",
    path: "/cause/detail/:id",
    component: CauseDetail,
    beforeEnter: (to, from, next) => {
      if (to.name == "causeDetail" && to.params.id && !store.getters.User) {
        next({ name: "login" });
      } else next();
    },
  },
  {
    name: "causeEdit",
    path: "/cause/edit/:id",
    component: CauseEdit,
    beforeEnter: (to, from, next) => {
      if (to.name == "causeEdit" && to.params.id && !store.getters.User) {
        next({ name: "login" });
      } else next();
    },
  },
  { name: "", path: "*", component: NotFound },
];

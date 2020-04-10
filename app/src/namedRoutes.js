export const NamedRoutes = {
  Home: "/",
  Register: "/register",
  Login: "/login",
  Profile: {
    Mine: "/profile",
    Edit: "/profile/edit",
  },
  Cause:{
      Create:"/cause/create",
      Edit:"/cause/edit/:id",
      Detail:"/cause/detail/:id"
  },
  NotFound:"*"
};

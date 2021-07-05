import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Class from "../views/DataBindingClass.vue";
import Class2 from "../views/DataBindingClass2.vue";
import Style from "../views/DataBindingStyle.vue";
import DataBindingList from "../views/DataBindingList.vue";
import DataBindingList2 from "../views/DataBindingList2.vue";
import RenderingIf from "../views/DataBindingIf.vue";
import EventBinding from "../views/EventBinding.vue";
import Vending from "../views/Vending.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/class",
    name: "Class",
    component: Class,
  },
  {
    path: "/class2",
    name: "Class2",
    component: Class2,
  },
  {
    path: "/style",
    name: "Style",
    component: Style,
  },
  {
    path: "/dataBindingList",
    name: "DataBindingList",
    component: DataBindingList,
  },
  {
    path: "/dataBindingList2",
    name: "DataBindingList2",
    component: DataBindingList2,
  },
  {
    path: "/renderingIf",
    name: "RenderingIf",
    component: RenderingIf,
  },
  {
    path: "/eventBinding",
    name: "EventBinding",
    component: EventBinding,
  },
  {
    path: "/vending",
    name: "Vending",
    component: Vending,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

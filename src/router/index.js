import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Class from '../views/DataBindingClass.vue'
import Class2 from '../views/DataBindingClass2.vue'
import Style from '../views/DataBindingStyle.vue'
import DataBindingList from '../views/DataBindingList.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import RenderingIf from '../views/DataBindingIf.vue'
import EventBinding from '../views/EventBinding.vue'
import Vending from '../views/Vending.vue'
import Restaurant from '../views/Restaurant.vue'
import NestedComponent from '../views/NestedComponent.vue'
import NestedComponent2 from '../views/NestedComponent2.vue'
import NestedComponent3 from '../views/NestedComponent3.vue'
import NestedComponent4 from '../views/NestedComponent4.vue'
import NestedComponent5 from '../views/NestedComponent5.vue'
import Parent from '../views/Parent.vue'
import Parent2 from '../views/Parent2.vue'
import ProvideInject from '../views/ProvideInject.vue'
import ModalLayout from '../views/SlotUseModalLayout.vue'
import Login from '../views/Login.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import Googlelogin from '../views/GoogleLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/class',
    name: 'Class',
    component: Class
  },
  {
    path: '/class2',
    name: 'Class2',
    component: Class2
  },
  {
    path: '/style',
    name: 'Style',
    component: Style
  },
  {
    path: '/dataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/dataBindingList2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/renderingIf',
    name: 'RenderingIf',
    component: RenderingIf
  },
  {
    path: '/eventBinding',
    name: 'EventBinding',
    component: EventBinding
  },
  {
    path: '/vending',
    name: 'Vending',
    component: Vending
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: Restaurant
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/nestedComponent2',
    name: 'NestedComponent2',
    component: NestedComponent2
  },
  {
    path: '/nestedComponent3',
    name: 'NestedComponent3',
    component: NestedComponent3
  },
  {
    path: '/nestedComponent4',
    name: 'NestedComponent4',
    component: NestedComponent4
  },
  {
    path: '/nestedComponent5',
    name: 'NestedComponent5',
    component: NestedComponent5
  },
  {
    path: '/parent',
    name: 'Parent',
    component: Parent
  },
  {
    path: '/parent2',
    name: 'Parent2',
    component: Parent2
  },
  {
    path: '/provideInject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/modalLayout',
    name: 'modalLayout',
    component: ModalLayout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/kakaologin',
    name: 'Kakaologin',
    component: KakaoLogin
  },
  {
    path: '/googlelogin',
    name: 'Googlelogin',
    component: Googlelogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

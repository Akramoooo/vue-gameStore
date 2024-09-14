import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './components/views/HomeView.vue';
import AboutView from './components/views/AboutView.vue';
import ProfileView from './components/views/ProfileView.vue';
import CartView from './components/views/CartView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/user/profile', component: ProfileView},
    { path: '/user/cart', component: CartView}
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

import App from './App.vue'

const app = createApp(App);


app.use(router).mount('#app')

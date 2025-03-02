import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import StartPage from './components/StartPage.vue'
import Profile from './components/Profile.vue'
import Home from './components/Home.vue'
//router
const routes = [
  {
    path: "/",
    component: Home,
    children: [{
      path: "/",
      component: StartPage
    },
    {
      path: "profile",
      component: Profile
    },
    ]
  },
  // {
  //   path: "/profile",
  //   component: Profile,
  // },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
createApp(App).use(router).mount('#app')

// Imports
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

// Routes

// path: dicates what the path will show in the url
// name: the name of the route
// component: the component to be used in the route
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

// Router
const router = createRouter({
  // allows the path from the route to show in the url
  history: createWebHistory(),
  routes,

  // Any time the user goes to a new "page" they will be taken to the top of the page
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0
    }
  }
})

// Default
export default router
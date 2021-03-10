import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import CarsPage from '../pages/CarsPage.vue'
import HomePage from '../pages/HomePage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import HousesPage from '../pages/HousesPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
import JobsPage from '../pages/JobsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },
  {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  },
  {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  },
  {
    path: '/job',
    name: 'Jobs',
    component: JobsPage
  },
  {
    path: '/job/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

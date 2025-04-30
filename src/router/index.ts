import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ElemSchoolView from '@/views/ElemSchoolView.vue'
import MidSchoolView from '@/views/MidSchoolView.vue'
import HighSchoolView from '@/views/HighSchoolView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ElemSchool',
      name: 'Elementary School',
      component: ElemSchoolView,
    },
    {
      path: '/MiddleSchool',
      name: 'Middle School',
      component: MidSchoolView,
    },
    {
      path: '/HighSchool',
      name: 'High School',
      component: HighSchoolView,
    },
  ],
})

export default router

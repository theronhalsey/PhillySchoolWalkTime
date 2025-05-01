import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ArcgisMap from '@/components/ArcgisMap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/ElemSchool',
      component: ArcgisMap,
      props: {
        portalItemId: 'bab38676b43e46fdabc07cc09ea4b902'
      }
    },
    {
      path: '/MiddleSchool',
      component: ArcgisMap,
      props: {
        portalItemId: '8678b6de36ed4cf99af2211d389b27a2'

      }
    },
    {
      path: '/HighSchool',
      component: ArcgisMap,
      props: {
        portalItemId: '0f68138b20534b8ab803aed01b81c76d'

      }
    },
  ],
})

export default router

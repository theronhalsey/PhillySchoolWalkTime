import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AsyncArcMap from '@/components/ArcgisMap.vue'

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
      component: AsyncArcMap,
      props: {
        portalItemId: 'bab38676b43e46fdabc07cc09ea4b902',
        layerName: 'WalkTimes_Elementary'
      }
    },
    {
      path: '/MiddleSchool',
      component: AsyncArcMap,
      props: {
        portalItemId: '8678b6de36ed4cf99af2211d389b27a2',
        layerName: 'WalkTimes_Middle'

      }
    },
    {
      path: '/HighSchool',
      component: AsyncArcMap,
      props: {
        portalItemId: '0f68138b20534b8ab803aed01b81c76d',
        layerName: 'WalkTimes_High'

      }
    },
  ],
})

export default router

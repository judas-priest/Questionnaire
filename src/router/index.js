import { createRouter, createWebHistory } from 'vue-router'

import Questionnaire from '../components/QuestionnairePage.vue'
import Completed from '../components/CompletedPage.vue'

const routes = [
  { path: '/question/:id', component: Questionnaire, props: true },
  { path: '/completed', component: Completed, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/question/1')
  } else {
    next()
  }
})

export default router

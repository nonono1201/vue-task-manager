import TaskLMngView from '@/features/task/views/TaskLMngView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import NotFoundViews from '@/pages/NotFoundViews.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'task.list',
          component: TaskLMngView,
          meta: { title: 'タスク管理' }
        },
      ],
    },
    {
      path: '/notfound',
      name: 'error.notfound',
      component: NotFoundViews,
    },
  ],
})

export default router

import TaskListView from '@/features/tasks/views/TaskListView.vue'
import TaskRegistView from '@/features/tasks/views/TaskRegistView.vue'
import TaskUpdateView from '@/features/tasks/views/TaskUpdateView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import NotFoundViews from '@/views/NotFoundViews.vue'
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
          component: TaskListView,
          meta: { title: 'タスク一覧' }
        },
        {
          path: '/update/:id',
          name: 'task.update',
          component: TaskUpdateView,
          meta: { title: 'タスク更新' }
        },
        {
          path: '/regist',
          name: 'task.regist',
          component: TaskRegistView,
          meta: { title: 'タスク登録' }
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

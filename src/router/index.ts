import TaskListView from '@/features/tasks/views/TaskListView.vue'
import TaskRegistView from '@/features/tasks/views/TaskRegistView.vue'
import TaskUpdateView from '@/features/tasks/views/TaskUpdateView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task.list',
      component: TaskListView,
    },
    {
      path: '/update/:id',
      name: 'task.update',
      component: TaskUpdateView,
    },
    {
      path: '/regist',
      name: 'task.regist',
      component: TaskRegistView,
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import FoodItem from '../components/FoodItem.vue'
import Category from '../components/Category.vue'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/foodItems',
        component: FoodItem
      },
      {
        path: '/categories',
        component: Category
      }
    ]
  })

  export default router
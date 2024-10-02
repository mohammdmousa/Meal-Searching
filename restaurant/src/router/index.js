import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/HomeView.vue'
import ListItem from '../views/ListItem.vue'
import GradientView from '../views/GradientView.vue'
import leterView from '../views/leterView.vue'
import NameView from '../views/NameView.vue'
import MealDetails from '../views/MealDetails.vue'
import IngredientsView from '../views/IngredientsView.vue'
const routes= [
      {
        path: '/',
        name: 'home',
        component: homeView
      },

       {
      path: '/Gradient',
      name: 'Gradient',
      component: GradientView
    },
       {
      path: '/leter',
      name: 'leter',
      component: leterView,
       children:[
        {
      path: '/:leter',
      name: 'byLeter',
      component: ListItem
    },
       ]
    },

       {
      path: '/name',
      name: 'name',
      component: NameView
    },
    {
      path:'/:id',
      name:'ingragint',
      component:IngredientsView
    },
    {
      path:"/:id",
      name:"MealDeatails",
      component:MealDetails
    },

  ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import PageBody from '../views/HomeView.vue'
import AboutBody from '../views/AboutView.vue'
import ContactBody from '../views/ContactView.vue'

import { store } from '@/main'
// SomeOtherFile.js


// Emit an event to update the data variable in MyComponent.vue


function fadeHomeLeft() {
  // var homeClasses = document.querySelector('.pagebody').classList
  // homeClasses.add('fade-left')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageBody,
    beforeEnter: (from, to, next) => {
      console.log("before ENTER", store.getters.isAnimating)
      store.commit("setIsAnimating", false)
      store.commit("updatePage", "home")
      next()
    }
  },
  {
    path: '/about',
    name: 'about', 
    component: AboutBody,
    beforeEnter: (from, to, next) => {
      // navigation approved - proceed to animation
      fadeHomeLeft()
      store.commit("updatePage", "about")
      setTimeout(() => {
        store.commit("setIsAnimating", false)
        // Animation Completed open up for additonal routing
        next()
      }, 300)
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactBody,
    beforeEnter: (from, to, next) => {
      store.commit("updatePage", "contact")
      setTimeout(() => {
        store.commit("setIsAnimating", false)
        // Animation Completed open up for additonal routing
        next()
      }, 300)
    }
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log("before each")
  console.log("animating?", store.getters.isAnimating)
  if(store.getters.isAnimating) {
    // Animation in-progress - naviagation denied, do not change ActivePage
    console.log("Navigation gaurded")
    
    console.log("animated?", store.getters.isAnimating)
    next(false)
  } 
  else {
    store.commit("setIsAnimating", true)
    console.log("animated?", store.getters.isAnimating)
    next()
    // Proceed to navigation
  }
  
 
})


export default router

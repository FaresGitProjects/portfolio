import { createRouter, createWebHistory } from 'vue-router'
import PageBody from '../views/HomeView.vue'
import AboutBody from '../views/AboutView.vue'
import ContactBody from '../views/ContactView.vue'

import { store } from '@/main'
// SomeOtherFile.js


// Emit an event to update the data variable in MyComponent.vue


function fadeHome(next) {
  // Set the isAnimating state property to true at the start of the animation
  store.commit('isAnimating', true)

  var elList = document.querySelector('.pagebody').classList
  elList.add('fade-left')

  setTimeout(() => {
    // Set the isAnimating state property to false once the animation completes
    store.commit('animation/setIsAnimating', false)

    elList.remove('fade-left')
    next()
  }, 1000)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageBody,
    beforeEnter: (from, to, next) => {
      console.log("before Enter home")
      store.commit("updatePage", "home")

      console.log("debug-fade")

      setTimeout(() => {
        next(() => {
        });
      }, 1000); 
    }
  },
  {
    path: '/about',
    name: 'about', 
    component: AboutBody,
    beforeEnter: (from, to, next) => {
      console.log("before Enter about")
      store.commit("updatePage", "about")

      // setTimeout(1000)
      fadeHome(next)
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactBody,
    beforeEnter: (from, to, next) => {
      console.log("before Enter contact")

      var elList = document.querySelector('.pagebody').classList
      elList.add('fade-left');
      setTimeout(() => {
        next(() => {
        });
      }, 1000); 
    }
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (store.getters.isAnimating) {
    // If an animation is currently running, cancel the navigation
    return false
  } else {
    store.commit("updatePage", to.name)
    console.log("testing to", to)
    // Otherwise, allow the navigation to proceed
    next()
  }
})


export default router

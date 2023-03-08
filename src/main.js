
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faCrow, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import router from './router'
import './index.css'
import { createStore } from 'vuex'

/* add icons to the library */
library.add(faHeart,faEnvelope, faGithub, faCrow, faLinkedin)


export const store = createStore({
    state() {
        return {
            activePage: "home",
            isAnimating: false
        }
    },
    mutations: {
        updatePage(state, newPage) {
            console.log("mutating")
            state.activePage = newPage
        },
        setIsAnimating(state, isAnimating) {
            state.isAnimating = isAnimating
        }
    },
    getters: {
        getActivePage: (state) => {
            return state.activePage
        },
        isAnimating: (state) => {
            return state.isAnimating
        }
    }
})


createApp(App).use(router).use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


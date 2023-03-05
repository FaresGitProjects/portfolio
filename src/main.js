
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faCrow } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import router from './router'
import './index.css'

/* add icons to the library */
library.add(faHeart, faGithub, faCrow)

createApp(App).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
// import store from './store'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})

const store = createStore({
	state() {
		return {
			count: 0
		}
	},
	mutations: {
		increment(state) {
			state.count++
		}
	}
})

const app = createApp({ /* your root component */ })

import '../src/assets/style/reset.css'
import '../src/assets/style/style.css'
import '../src/assets/style/elevator.css'
import '../src/assets/style/slider.css'

createApp(App).use(vuetify).use(router).mount('#app')
app.use(store)
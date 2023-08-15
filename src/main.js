import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


const vuetify = createVuetify({
	components,
	// directives,
})

const app = createApp(App)

app
	.use(store)
	.use(vuetify)
	.use(router)
	.mount('#app')

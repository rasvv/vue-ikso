// import { createApp } from 'vue'
// import App from './App.vue'
// import store from '@/store'
// import router from './router'
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'


// const vuetify = createVuetify({
// 	components,
// })

// const app = createApp(App)

// app
// 	.use(store)
// 	.use(vuetify)
// 	.use(router)
// 	.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})

createApp(App)
	.use(store)
	.use(router)
	.use(vuetify)
	.mount('#app')
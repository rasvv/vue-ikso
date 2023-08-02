import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
/>

const vuetify = createVuetify({
	components,
	directives,
})

const app = createApp(App)

app.use(store)
app.use(vuetify).use(router).mount('#app')

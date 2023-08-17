import { createRouter, createWebHistory } from 'vue-router'
import '../views/AboutView.vue'

const routes = [
	{
		path: '/',
		redirect: '/about'
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/advantage',
		name: 'advantage',
		component: () => import('../views/AdvantageView.vue')
	},
	{
		path: '/tools',
		name: 'tools',
		component: () => import('../views/ToolsView.vue')
	},
	{
		path: '/production',
		name: 'production',
		component: () => import('../views/ProductionView.vue')
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: () => import('../views/ContactsView.vue')
	},
	{
		path: '/clients',
		name: 'clients',
		component: () => import('../views/PartnersView.vue')
	}

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

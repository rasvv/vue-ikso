import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
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
		path: '/productions',
		name: 'productions',
		component: () => import('../views/ProductionsView.vue')
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: () => import('../views/ContactsView.vue')
	},
	{
		path: '/clients',
		name: 'clients',
		component: () => import('../views/ClientsView.vue')
	}

]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

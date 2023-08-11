import advantagesJson from '@/store/jsons/advantages.json'
import store from '@/store'

export const advantagesModule = {

	state: () => ({
		advantagesJson: advantagesJson,
		activeRouter: 	{
			"id": "1",
			"to": "/about",
			"captions": [
				{
					"lang": "ru",
					"caption": "О нас"
				},
				{
					"lang": "en",
					"caption": "About Us"
				},
				{
					"lang": "tr",
					"caption": "Hakkımızda"
				}
			]
		}
	}),
	mutations: {
		updateActiveRouter(state, activeRouter) {
			state.activeRouter = activeRouter
		}
	},
	getters: {
		getRouters: state => state.routersJson.filter(descs => descs.captions.lang == store.state.selectLang.lang),
		getRouter: state => state.routersJson,
		getActiveRouter: state => state.activeRouter.captions[store.state.selectLang.id].caption,
		getActiveRouterId: state => state.activeRouter.id,
	}
}
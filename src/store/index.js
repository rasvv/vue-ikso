import { createStore } from 'vuex'
import about from './modules/about'
import partners from './modules/partners'

// import sitesJson from './sites.json'
// import partnersJson from './jsons/partners.json'
// import aboutJson from './jsons/about.json'

export const store = createStore({
	modules: {
		about,
		partners
	},
	data() {

	},
	state: {
		langs: ['ru', 'en', 'tr'],
		lang: 'en',
		// myPartnerJson: partnersJson,
		// aboutmeJson: aboutJson
	},
	mutations: {
		updateLang(state, payload) {
			state.lang = payload
		}
	},
	actions: {
		setLang(ctx, lang) {
			ctx.commit('updateLang', lang)
		}

	},
	getters: {
		getLang: state => state.lang,
		getLangs: state => state.langs
	}
})
import { createStore } from 'vuex'

import partnersJson from './jsons/partners.json'
import aboutJson from './jsons/about.json'

export const store = createStore({
	data() {

	},
	state: {
		langs: ['ru', 'en', 'tr'],
		lang: 'en',
		partnerJson: partnersJson,
		aboutJson: aboutJson
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
		getLangs: state => state.langs,
		getAboutDesc: state => state.aboutJson[0].desc.filter(descs => descs.lang == state.lang)[0],
		getAboutImg: state => state.aboutJson[0].images,
		getPartners: state => state.partnerJson.filter(descs => descs.lang == state.lang)

	}
})
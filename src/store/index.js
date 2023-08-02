import { createStore } from 'vuex'

// import sitesJson from './sites.json'
import partnersJson from './partners.json'
import aboutJson from './about.json'

export const store = createStore({
	data() {

	},
	state: {
		// view: 'links', //режим отображения
		// photoCurrentPage: [],
		// cols: 'auto',
		langs: ['ru', 'en', 'tr'],
		lang: 'en',
		// mySitesJson: sitesJson,
		myPartnerJson: partnersJson,
		aboutmeJson: aboutJson
		// album: photosJson, //текщий альбом (Фото, Хобби, Сайты)
		// albumName: 'Фотографии',
		// fontsize: 14

	},
	mutations: {
		updateLang(state, payload) {
			state.lang = payload
		}
	},
	actions: {
		setLang(ctx, lang) {
			// console.log('index.js setLang '+ lang)
			ctx.commit('updateLang', lang)
		}

	},
	getters: {
		getLang: state => state.lang,
		getLangs: state => state.langs,
		getAbout: state => state.aboutmeJson,
		getPartners: state => state.myPartnerJson
	}
})
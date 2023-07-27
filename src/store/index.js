import { createStore } from 'vuex'

// import sitesJson from './sites.json'
import partnersJson from './partners.json'
// import hobbyJson from './hobby.json'
// import handmadeJson from './handmade.json'
// import dysnaiJson from './dysnai2005.json'
import aboutJson from './about.json'

export const store = createStore({
	data() {

	},
	state: {
		view: 'links', //режим отображения
		photoCurrentPage: [],
		cols: 'auto',
		langs: ['ru', 'en', 'tr'],
		lang: 'en',
		// mySitesJson: sitesJson,
		myPartnerJson: partnersJson,
		// myHobbyJson: hobbyJson,
		// myHandmadeJson: handmadeJson,
		// myDysnaiJson: dysnaiJson,
		aboutmeJson: aboutJson,
		// album: photosJson, //текщий альбом (Фото, Хобби, Сайты)
		albumName: 'Фотографии',
		fontsize: 14

	},
	mutations: {
		setLang(state, payload) {
			state.lang = payload
		},
		setPhotoCurrentPage(state, payload) {
			state.photoCurrentPage = payload
		},
		setAlbum(state, payload) {
			console.log(payload);
			state.album = payload
		},
		setAlbumName(state, payload) {
			// console.log(payload);
			state.albumName = payload
		}
	},
	actions: {
		updatePhotoCurrentPage({ commit }, page) {
			return commit('setPhotoCurrentPage', page)
		},
		updateLang({ commit }, lang) {
			console.log(lang);
			return commit('setLang', lang)
		},
		updateAlbum({ commit }, album) {
			console.log('updateAlbum ' + album);

			// if (album === 'myHobbyLinks')
			// return commit('setAlbum', this.state.myHobbyJson)
			// else if (album === 'myPhotosLinks')
			// return commit('setAlbum', this.state.myPhotosJson)
			return commit('setAlbum', album)
		},
		updateAlbumName({ commit }, albumName) {
			return commit('setAlbumName', albumName)
		},
		// updateLink({ commit }, link)
	},
	getters: {
		getLang: state => state.lang,
		getLangs: state => state.langs,
		// getPhotoCurrentPage: state => state.photoCurrentPage,
		getAbout: state => state.aboutmeJson,
		getPartners: state => state.myPartnerJson,
		// getAlbumName: state => state.albumName,
		// getPhotosLinks: state => state.myPhotosJson,
		// getHobbyLinks: state => state.myHobbyJson,
		// getHandmadeLinks: state => state.myHandmadeJson,
		// getDysnaiLinks: state => state.myDysnaiJson,
		// getSitesLinks: state => state.mySitesJson
	}
})
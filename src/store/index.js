import { createStore } from 'vuex'
import axios from 'axios'
import store from '@/store'

export default createStore({
	state: () => ({
		langsJson: [],
		selectLang: {},
		fullVersion: false,

		routersJson: [],
		activeRouter: {},

		aboutJson: [],
		aboutDesc: [],
		aboutImg: {},

		productionJson: [],
		isProd: false,

		footerJson: [],

		advantagesJson: [],

		toolsJson: [],

		partnersJson: [],

		personsJson:[],

		contactsJson: [],

	}),
	mutations: {
		setLangJson(state, payload) {
			state.langsJson = payload
		},
		setRouterJson(state, payload) {
			state.routersJson = payload
		},
		updateLang(state, payload) {
			state.selectLang = state.langsJson[payload]
		},
		updateActiveRouter(state, activeRouter) {
			state.activeRouter = activeRouter
		},
		toggleVersion(state) {
			state.fullVersion = !state.fullVersion
		},
		setAboutJson(state, payload) {
			state.aboutJson = payload
		},
		setAboutDesc(state, payload) {
			state.aboutDesc = payload
		},
		setAboutImg(state, payload) {
			state.aboutImg = payload
		},
		setProductionJson(state, payload) {
			state.productionJson = payload
		},
		setIsProd(state) {
			state.isProd = true
		},
		setFooterJson(state, payload) {
			state.footerJson = payload
		},
		setAdvantagesJson(state, payload) {
			state.advantagesJson = payload
		},
		setToolsJson(state, payload) {
			state.toolsJson = payload
		},
		setPartnersJson(state, payload) {
			state.partnersJson = payload
		},
		setPersonsJson(state, payload) {
			state.personsJson = payload
		},
		setContactsJson(state, payload) {
			state.contactsJson = payload
		},
	},
	actions: {
		async fetchAll({ state, commit }) {
			try {
				let response = await axios.get('/assets/jsons/langs.json');
				// commit('setRouterJson', response.data)
				commit('setLangJson', response.data)
				commit('updateLang', 0)

				response = await axios.get('/assets/jsons/routers.json');
				commit('setRouterJson', response.data)
				commit('updateActiveRouter', state.routersJson[0])
				console.log("activeRouter");
				console.log(state.activeRouter);

				response = await axios.get('/assets/jsons/about.json');
				commit('setAboutJson', response.data)
				console.log("aboutJson");
				console.log(state.activeRouter.captions[0]);

				commit('setAboutDesc', state.aboutJson[0].desc)
				commit('setAboutImg', state.aboutJson[0].images)

				response = await axios.get('/assets/jsons/production.json');
				commit('setProductionJson', response.data)
				console.log('state.productionJson');
				console.log(state.productionJson);
				if (state.productionJson) {
					commit('setIsProd')
				}

				response = await axios.get('/assets/jsons/footer.json');
				commit('setFooterJson', response.data)

				response = await axios.get('/assets/jsons/advantages.json');
				commit('setAdvantagesJson', response.data)

				response = await axios.get('/assets/jsons/tools.json');
				commit('setToolsJson', response.data)

				response = await axios.get('/assets/jsons/partners.json');
				commit('setPartnersJson', response.data)

				response = await axios.get('/assets/jsons/persons.json');
				commit('setPersonsJson', response.data)

				response = await axios.get('/assets/jsons/contacts.json');
				commit('setContactsJson', response.data)

			} catch (e) {
				console.log(e)
			}
		}
	},

	getters: {
		getLang: state => state.selectLang,
		getLangs: state => state.langsJson,
		getVersion: state => state.fullVersion,
		getNext: state => state.selectLang.nextSlide,
		getPrev: state => state.selectLang.prevSlide,

		getRouter: state => state.routersJson,
		getRouters: state => state.routersJson.filter(item =>
			item.captions.lang == "ru"
		),
		getActiveRouter: state => (
			console.log(typeof (state.activeRouter)),
			state.activeRouter
		),
		getActiveRouters: state => state.activeRouter.captions,
		getActiveRouterTitle: state => state.activeRouter.captions[store.state.selectLang.id].title,
		getActiveRouterId: state => state.activeRouter.id,

		getAboutJson: state => state.aboutJson,
		getAboutDesc: state => state.aboutDesc.filter(item => item.lang == store.state.selectLang.lang),
		getAboutImg: state => state.aboutImg,

		getProductions: state => state.productionJson,
		getProductionProd: state => state.productionJson.production,
		getProduction: state => state.productionJson.production.filter(item => (
			item.lang == store.state.selectLang.lang)
		)[0],
		getIsProd: state => state.isProd,

		getFooter: state => state.footerJson[0],
		getFooterLocal: state => state.footerJson.filter(item => item.lang == store.state.selectLang.lang),

		getAdvantages: state => state.advantagesJson,

		getTools: state => state.toolsJson[0].desc.filter(descs => descs.lang == store.state.selectLang.lang)[0],
		getToolsImg: state => state.toolsJson[0].images,

		getPartner: state => state.partnersJson,
		getPartners: state => state.partnersJson.filter(descs => descs.lang == store.state.selectLang.lang),

		getPersonsJson: state => state.personsJson,
		getPersonsText: state => state.personsJson.filter(descs => descs.lang == store.state.selectLang.lang).text,
		getPersons: state => state.personsJson.filter(descs => descs.lang == store.state.selectLang.lang),

		getContactsJson: state => state.contactsJson

	},


})
import { createStore } from 'vuex'
import langsJson from '@/assets/jsons/langs.json'

import { aboutModule } from '@/store/modules/aboutModule'
import { toolsModule } from '@/store/modules/toolsModule'
import { partnersModule } from '@/store/modules/partnersModule'
import { contactsModule } from '@/store/modules/contactsModule'
import { footerModule } from '@/store/modules/footerModule'
import { routersModule } from '@/store/modules/routersModule'
import { advantagesModule } from '@/store/modules/advantagesModule'
import { productionModule } from '@/store/modules/productionModule'
import { personsModule } from '@/store/modules/personsModule'

export default createStore({

	state: () => ({
		langs: langsJson,
		selectLang: {
			"lang": 'ru',
			"id": "0",
			"caption": "Русский",
			"title": "Язык",
			"nextSlide": "Дальше",
			"prevSlide": "Назад"
		},
		fullVersion: false
	}),
	mutations: {
		updateLang(state, lang) {
			state.selectLang = state.langs[lang]
			console.log(state.selectLang);
		},
		toggleVersion(state) {
			state.fullVersion = !state.fullVersion
		}
	},
	actions: {
		setLang({ state, commit }) {
			commit('updateLang', state.selectLang)
		}
	},
	getters: {
		getLang: state => state.selectLang,
		getLangs: state => state.langs,
		getVersion: state => state.fullVersion,
		getNext: state => state.selectLang.nextSlide,
		getPrev: state => state.selectLang.prevSlide,
	},
	modules: {
		about: aboutModule,
		partners: partnersModule,
		routers: routersModule,
		contacts: contactsModule,
		tools: toolsModule,
		footer: footerModule,
		advantages: advantagesModule,
		production: productionModule,
		person: personsModule
	}
})
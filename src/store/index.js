import { createStore } from 'vuex'
import langsJson from '@/store/jsons/langs.json'

import { aboutModule } from '@/store/modules/aboutModule'
import { toolsModule } from '@/store/modules/toolsModule'
import { partnersModule } from '@/store/modules/partnersModule'
import { contactsModule } from '@/store/modules/contactsModule'
import { footerModule } from '@/store/modules/footerModule'
import { routersModule } from '@/store/modules/routersModule'
import {advantagesModule } from '@/store/modules/advantagesModule'

export default createStore({

	state: () => ({
		langs: langsJson,
		selectLang: {
			"lang": 'ru',
			"id": "0",
			"caption": "Русский",
			"title": "Язык"
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
		getVersion: state => state.fullVersion
	},
	modules: {
		about: aboutModule,
		partners: partnersModule,
		routers: routersModule,
		contacts: contactsModule,
		toolsModule: toolsModule,
		footerModule: footerModule,
		advantagesModule: advantagesModule
	}
})
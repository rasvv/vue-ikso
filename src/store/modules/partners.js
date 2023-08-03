import enPartnersJson from '../jsons/partners-en.json'
import ruPartnersJson from '../jsons/partners-ru.json'
import trPartnersJson from '../jsons/partners-tr.json'
import { mapGetters } from "vuex";

export default {
	data() {

	},
	state: {
		ruPartnersJson: ruPartnersJson,
		enPartnersJson: enPartnersJson,
		trPartnersJson: trPartnersJson,
		mainJson: enPartnersJson
	},
	mutations: {
		// updateLang(state, payload) {
		// 	state.lang = payload
		// }
	},
	actions: {
		// setLang(ctx, lang) {
		// 	ctx.commit('updateLang', lang)
		// }

	},
	getters: {
		getPartners: state => state.mainJson
	},
	computed:
	{
		...mapGetters(['getLang']),
	},
	methods: {
		selectLang() {
			switch (this.getLang) {
				case "ru":
					this.mainJson = this.ruPartnersJson
					break
				case "en":
					this.mainJson = this.enPartnersJson
					break
				case "tr":
					this.mainJson = this.trPartnersJson
					break
			}
		}
	},
	mounted() {
		this.selectLang()
	},
}
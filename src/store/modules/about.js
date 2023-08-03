import aboutJson from '../jsons/about.json'
import { mapGetters } from "vuex";

export default {
	data() {
	},
	state: {
		aboutJson: aboutJson
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
		getAboutDesc: state => state.aboutJson[0].desc.filter(descs => descs.lang == this.getLang)[0],
		getAboutImg: state => state.aboutJson
	},
	computed: { ...mapGetters(['getLang']) }
}	
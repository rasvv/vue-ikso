import partnersJson from '@/assets/jsons/partners.json'
import store from '@/store'

export const partnersModule = {

	state: () => ({
		partnerJson: partnersJson,
	}),
	getters: {
		getPartners: state => state.partnerJson.filter(descs => descs.lang == store.state.selectLang.lang)
	}
}
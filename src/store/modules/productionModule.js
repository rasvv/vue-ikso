import productionJson from '@/store/jsons/production.json'
import store from '@/store'

export const productionModule = {

	state: () => ({
		productionJson: productionJson,
	}),
	getters: {
		getProduction: state => state.productionJson.filter(descs => descs.lang == store.state.selectLang.lang)[0].production,
		getProductionText: state => state.productionJson.filter(descs => descs.lang == store.state.selectLang.lang)[0].text
	}
}
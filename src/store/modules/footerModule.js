import footerJson from '@/store/jsons/footer.json'
import store from '@/store'

export const footerModule = {

	state: () => ({
		footerJson: footerJson,
	}),
	getters: {
		getFooter: state => state.footerJson.filter(descs => descs.lang == store.state.selectLang.lang)
	}
}
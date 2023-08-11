import aboutJson from '@/store/jsons/about.json'
import store from '@/store'

export const aboutModule = {
	state: () => ({
		aboutJson: aboutJson
	}),
	getters: {
		getAboutDesc(state){
            return state.aboutJson[0].desc.filter(descs => descs.lang == store.state.selectLang.lang)[0]
        },
		getAboutImg: state => state.aboutJson[0].images,
	}
}
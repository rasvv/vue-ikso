import toolsJson from '@/assets/jsons/tools.json'
import store from '@/store'

export const toolsModule = {

	state: () => ({
		toolsJson: toolsJson,
	}),
	getters: {
		getTools: state => state.toolsJson[0].desc.filter(descs => descs.lang == store.state.selectLang.lang)[0],
		getToolsImg: state => state.toolsJson[0].images,
	}
}
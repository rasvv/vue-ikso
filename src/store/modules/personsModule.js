import personsJson from '@/assets/jsons/persons.json'
import store from '@/store'

export const personsModule = {

	state: () => ({
		personJson: personsJson
	}),
	getters: {
		getPersonsText: state => state.personJson.filter(descs => descs.lang == store.state.selectLang.lang).text,
		getPersons: state => state.personJson.filter(descs => descs.lang == store.state.selectLang.lang)[0].persons
	}
}
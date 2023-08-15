import contactsJson from '@/store/jsons/contacts.json'
import store from '@/store'

export const contactsModule = {

	state: () => ({
		contactJson: contactsJson,
	}),
	getters: {
		getContacts: state => state.contactJson.filter(descs => descs.lang == store.state.selectLang.lang)[0].contacts,
		getContactAddress: state => state.contactJson.filter(descs => descs.lang == store.state.selectLang.lang)[0].address,
		getContactMap: state => state.contactJson.filter(descs => descs.lang == store.state.selectLang.lang)[0].map
	}
}
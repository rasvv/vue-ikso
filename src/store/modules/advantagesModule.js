import advantagesJson from '@/assets/jsons/advantages.json'

export const advantagesModule = {

	state: () => ({
		advantagesJson: advantagesJson,
	}),
	getters: {
		getAdvantages: state => state.advantagesJson
	}
}
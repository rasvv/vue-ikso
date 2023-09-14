<template>
  <v-app class="d-flex justify-center">
    <Header v-if="getActiveRouters"/>
    <v-main>
			<!-- {{ getActiveRouters }}
			<v-btn @click="getJsonPath">Get</v-btn>
			<v-text-field label="jsons Path" v-model="jsonPath" @update:model-value="updatePath"></v-text-field>
			<v-btn @click="onGetAllJsons">Start</v-btn>
			{{ getFooter }}
			{{ getLang.id }} -->
      <h1 v-if="getActiveRouters">{{ getActiveRouterText }}</h1>
      <router-view v-if="getActiveRouters"/>
    </v-main>
    <Footer v-if="getFooter"/>
  </v-app>

</template>

<script>
import Header from "./components/MyHeader.vue";
import Footer from "./components/MyFooter.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
// import store from "./store";


// import MainPage from './components/MainPage.vue'

export default {
	name: "App",
	data: () => ({
		jsonPath: '',
		ar: 0
	}),
	components: {
		Header,
		Footer,
	},

	methods: {
		...mapMutations({
			setPath: 'setPath',
			setActiveRout: 'setActiveRout'
		}),
		onGetAllJsons() {

			this.$route.path = "/about"
			// if (this.ar == "/") this.ar = "/about"
			console.log(this.$route.path);
			// this.updateRout()
			this.fetchAll()
		},
		getJsonPath() {
			this.jsonPath = this.getPath
		},
		updatePath() {
			this.setPath(this.jsonPath)
		},
		updateRout() {
			this.setActiveRout(this.ar)
		},
		...mapActions({
			fetchAll: 'fetchAll'
		})
	},
	computed: {
		...mapGetters({
			getActiveRouterTitle: 'getActiveRouter',
			getActiveRouters: 'getActiveRouters',
			getLang: 'getLang',
			getFooter: 'getFooter',
			getPath: 'getPath',
			getRouterJson: 'getRouterJson'
		}),
		getActiveRouterText() {
			return this.getActiveRouters ? this.getActiveRouters[this.getLang.id].caption: "Загрузка"

			// console.log('this.getActiveRouters = ');
			// console.log(this.getActiveRouters);
			// console.log('this.getActiveRouter = ');
			// console.log(this.getActiveRouter);
			// let id = this.getLang.id
			// let text = this.getActiveRouters.lenght > 0
			// 	? this.getActiveRouters[id].caption
			// 	: "Загрузка продолжается"
			// console.log(text);
			// return text
		}
	},
	beforeMount() {
		this.onGetAllJsons()
		// this.onGetRouter()
	},
};
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')


*
  margin: 0
  padding: 0
  -webkit-box-sizing: border-box
  box-sizing: border-box

h1
  color: #0f0231 !important

#app
  font-family: 'Alegreya', serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #0f0231 !important
  font-size: 24px

html
  overflow-y: auto !important

.v-container
  max-width: 100vw !important

.header__bgcolor
  background-color: #0f0231
  color: #eeeeee

.light-color
  background-color: lightblue

.v-btn.v-btn--density-default
  height: auto !important

// .v-btn.primary--text 
//   color: yellow

.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input
  color: yellow !important

.v-input__details
  display: none  !important  
</style>

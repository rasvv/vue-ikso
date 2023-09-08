<template>
  <v-app class="d-flex justify-center">
    <Header v-if="getActiveRouters"/>
    <v-main>
      <!-- <h1>{{ getActiveRouterTitle ? getActiveRouterTitle : "Производится загрузка" }}</h1> -->
      <h1 v-if="getActiveRouters">{{ getActiveRouterText }}</h1>
		<!-- <h1>Привет</h1> -->
      <router-view v-if="getActiveRouters"/>
    </v-main>
    <Footer v-if="getFooter"/>
  </v-app>

</template>

<script>
import Header from "./components/MyHeader.vue";
import Footer from "./components/MyFooter.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import store from "./store";


// import MainPage from './components/MainPage.vue'

export default {
	name: "App",
	components: {
		Header,
		Footer,
	},

	methods: {
		...mapMutations({
			updateLang: 'langs/updateLang',
			updateActiveRouter: 'routers/updateActiveRouter',
			toggleVersion: 'langs/toggleVersion'
		}),
		...mapActions({
			fetchAll: 'fetchAll',
			fetchAbout: 'about/fetchAbout',
			fetchRouter: 'routers/fetchRouter'
		}),
		onGetAllJsons() {
			this.fetchAll()
		},
		getCaption() {
			while (!this.getActiveRouters)
				return
		}
	},
	computed: {
		...mapGetters({
			getActiveRouterTitle: 'getActiveRouter',
			getActiveRouters: 'getActiveRouters',
			getLang: 'getLang',
			getFooter: 'getFooter'
		}),
		getActiveRouterText() {
			return this.getActiveRouters[this.getLang.id].caption

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

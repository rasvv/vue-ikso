<template>
  <v-container class="header__bgcolor">
    <v-row class="d-flex align-center">
      <v-col cols="2" class="d-flex justify-start">
        <div>
          <v-img
            height="50"
            width="150"
            contain
            to="/"
            :src="require(`@/assets/img/logo.png`)"
            @dblclick="toggleVersion"
          ></v-img>
        </div>

      </v-col>
      <v-col cols="8" class="px-10">
        <nav class="d-flex justify-space-between">
          <router-link 
            class="router"
            v-for="router in getRouterJson"
            v-model="rout"
            :key="router.id"
            :to="router.to"
            @click="onSetActiveRouter(router)"
          >
            {{ router.captions[getLang.id].caption }}
          </router-link>
        </nav>
				<!-- {{ getRouterJson }} -->
      </v-col>
      <v-col cols="2" class="d-flex flex-row-reverse">
        <v-select
          v-model="selLang"
          :items="getLangs"
          item-title="caption"
          item-value="id"          
          :label="getLang.title"
          @update:model-value="onSetLang"
          base-color="yellow"
          color="yellow"
          class="select"
        ></v-select>
				<!-- {{ getLang }} -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
	data: () => ({
		title: "",
		selLang: {},
		desc: [],
		selectedColor: "white",
		rout: ''
	}),
	methods: {

		...mapMutations({
			toggleVersion: 'toggleVersion',
			updateActiveRouter: 'updateActiveRouter',
			updateLang: 'updateLang'
		}),

		// async onGetRouter() {
		// },
		onGetSelectLang() {
			this.selLang = this.getLang
		},
		onSetLang() {
			// this.selLang = this.getLang;
			console.log('this.selLang');
			console.log(this.selLang);
			this.updateLang(this.selLang);
			this.onGetSelectLang()
			console.log('this.selLang after');
			console.log(this.selLang);
		},
		onToggleVersion() {
			this.toggleVersion()
		},
		onSetActiveRouter(router) {
			if (router == "start")
			{
				this.$router.push('/')
			}
			else this.updateActiveRouter(router)
		},
	},
	computed: {
		...mapGetters({
			getLang: 'getLang',
			getLangs: 'getLangs',
			getVersion: 'getVersion',
			getRouterJson: 'getRouterJson',
			getActiveRouterTitle: "getActiveRouterTitle",

		}),
		getRouterDesc() {
			// return state.aboutDesc.filter(item => item.lang == store.state.selectLang.lang),
		}

	},
	mounted() {
		this.onGetSelectLang()
		this.onSetActiveRouter("start")

	}
};
</script>

<style lang="sass" scoped>
.router
  font-size: 18px
  color: grey
  text-decoration: none
  &:hover
    color: lightgrey

.router-link-exact-active
  color: yellow  

.select
  max-width: 50%

.v-input__details
  display: none  !important
.v-field__append-inner, .v-field__clearable, .v-field__prepend-inner
  display: none !important


</style>

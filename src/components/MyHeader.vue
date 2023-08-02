<template>
  <!-- <v-container class="header__bgcolor"> -->
  <v-container class="header__bgcolor">
    <v-row class="d-flex align-center">
      <v-col cols="2">
        <v-img   :width="100"
          cover 
          to="/"
          :src="require(`../assets/img/logo.png`)"></v-img>
      </v-col>
      <v-col cols="8">
        <nav class="d-flex justify-space-between">
          <router-link to="/tools">Производство</router-link>
          <router-link to="/advantage">Преимущества</router-link>
          <router-link to="/productions">Продукция</router-link>
          <router-link to="/clients">Партнеры</router-link>
          <router-link to="/about">О нас</router-link>
          <router-link to="/contacts">Контакты</router-link>
        </nav>
      </v-col>
      <v-col cols="1" class="d-flex justify-end">
      </v-col>			
      <v-col cols="1" >
				<v-select
					v-model="lang"
					:items="getLangs"
					label="Language"
					@update:modelValue="onSetLang()"
					base-color="yellow"
					color="yellow"
				></v-select>				
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data: () => ({
		title: '',
		desc: [],
		lang: '',
		langs: [],
    selectedColor: 'white',
	}),	
  computed: 
	
    mapGetters(['getLang', 'getLangs'])
		// ...mapState(["aboutJson"]),
  ,
	methods: 
  {
		...mapActions(['setLang']),
		onGetLang() {
			this.lang = this.getLang
			console.log('MyHeader.vue onGetLang '+this.lang)
		},
		onGetLangs() {
			this.langs = this.getLangs
		},
		onSetLang() {
			this.setLang(this.lang)
			console.log('MyHeader.vue onSetLang '+this.lang)
			// this.onGetLang()			
		}
	},
  // watch: {
  //   lang (newVal) {
  //     this.updateLang(newVal)
  //     console.log('item changed', newVal);
  //   }
  // },
	mounted() {
		this.onGetLang(),
		this.onGetLangs()
	},	
};
</script>

<style></style>

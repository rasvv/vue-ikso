<template>
  <v-container class="header__bgcolor">
    <v-row class="d-flex align-center">
      <v-col cols="2">
        <v-img   :width="100"
          cover 
          to="/"
          :src="require(`../assets/img/logo.png`)"></v-img>
      </v-col>
      <v-col cols="8">
      <!--   <v-btn to="/about">О нас</v-btn>
        <v-btn to="/tools">Производство</v-btn>
        <v-btn to="/advantage">Преимущества</v-btn>
        <v-btn to="/productions">Продукция</v-btn>
        <v-btn to="/clients">Партнеры</v-btn>
        <v-btn to="/photos">Контакты</v-btn> -->
        <nav class="d-flex justify-space-between">
          <!-- <router-link to="/">Home</router-link> | -->
          <router-link to="/tools">Производство</router-link>
          <router-link to="/advantage">Преимущества</router-link>
          <router-link to="/productions">Продукция</router-link>
          <router-link to="/clients">Партнеры</router-link>
          <router-link to="/about">О нас</router-link>
        </nav> 
      </v-col>
      <v-col cols="1" class="d-flex justify-end">
      </v-col>			
      <v-col cols="1" class="d-flex justify-end">
        <v-select
					v-model="lang"
          class="light-color"
          color="yellow"
          label="Language"
          :items="langs"
					@change="onSetLang"
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
		langs: []

	}),	
  computed: 
	{
    ...mapGetters(['getLang', 'getLangs']),
		...mapActions(["updateLang"]),		
		// ...mapState(["aboutJson"]),
  },
	methods: {
		onGetLang() {
			this.lang = this.getLang
			console.log(this.lang)
		},
		onGetLangs() {
			this.langs = this.getLangs
		},
		onSetLang() {
			this.updateLang(this.lang)
			this.onGetLang()			
		}
	},
	mounted() {
		this.onGetLang(),
		this.onGetLangs()
	},	
};
</script>

<style></style>

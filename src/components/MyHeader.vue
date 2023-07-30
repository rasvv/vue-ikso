<template>
  <!-- <v-container class="header__bgcolor"> -->
  <v-container>
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
        </nav> 
      </v-col>
      <v-col cols="1" class="d-flex justify-end">
      </v-col>			
      <v-col cols="1" class="d-flex justify-end">
        <!-- <v-select
					v-model="lang"
          class="light-color"
          color="yellow"
          label="Language"
          :items="langs"
          single-line
          return-object
          persistent-hint
					@change="(selection) => onSetLang(selection)"
        ></v-select> -->
        <v-radio-group v-model="lang" column>
          <v-radio
            v-for="lang in langs"
            :key="lang"
            :label="lang"
            :value="lang"
            @change="onSetLang(lang)"
            
          ></v-radio>
        </v-radio-group>        
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
		...mapActions(["setLang"]),		
		// ...mapState(["aboutJson"]),
  },
	methods: {
		onGetLang() {
			this.lang = this.getLang
			console.log('MyHeader.vue onGetLang '+this.lang)
		},
		onGetLangs() {
			this.langs = this.getLangs
		},
		onSetLang(selection) {
			this.setLang(selection)
			console.log('MyHeader.vue onSetLang '+selection)
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

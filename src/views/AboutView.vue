<template>
	<v-container class="ma-4">
		<h2 class="main__about-caption">{{ title }}</h2>
		<v-row>
			<v-col cols="3">
				<v-row class="ma-4" >
					<v-img contain max-height="200" :src="require(`../assets/img/Background/1.jpg`)" alt="img"> </v-img>
				</v-row>
				<v-row class="ma-4">
					<v-img contain max-height="200"  :src="require(`../assets/img/Background/2.jpg`)" alt="img"></v-img>
				</v-row>
			</v-col>	
			<v-col cols="6">
				<div v-for="descs in desc" :key="descs.text"> {{ descs.text }}</div>
				<!-- <v-img cover :src="require(`../assets/img/building/1.jpg`)" alt="img"></v-img> -->
			</v-col>
			<v-col cols="3">
				<v-row class="ma-4">
					<v-img contain max-height="200"  :src="require(`../assets/img/Background/3.jpg`)" alt="img"></v-img>
				</v-row>
				<v-row class="ma-4">
					<v-img contain max-height="200"  :src="require(`../assets/img/Background/4.jpg`)" alt="img"></v-img>

				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>


<script>
import { mapGetters } from "vuex";
export default {
	data: () => ({
		title: '',
		desc: [],
		lang: ''

	}),	
  computed: 
	{
    ...mapGetters(['getAbout', 'getLang']),
  },
	methods: {
		onGetAbout() {
			this.title = this.getAbout[0].title
			this.desc = this.getAbout[0].desc.filter(descs => descs.lang == this.lang)[0].texts
			console.log(this.desc)
		},
		onGetLang() {
			this.lang = this.getLang
			console.log(this.lang)
		}
	},
	mounted() {
		this.onGetLang()
		this.onGetAbout()
	},	
};
</script>
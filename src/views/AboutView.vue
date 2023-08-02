<template>
	<v-container class="ma-4">
		<h2 class="main__about-caption">{{ getAbout[0].title }}</h2>
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
				<div v-for="descs in this.getAbout[0].desc.filter(descs => descs.lang == this.getLang)[0].texts" :key="descs.text"> {{ descs.text }}</div>
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
	}),	
  computed: 
	{
    ...mapGetters(['getAbout', 'getLang']),
  }

};
</script>
<template>
	<v-container class="ma-4">
		<h2 class="main__about-caption">{{ getAbout }}</h2>
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
				<div class="paragraph">Полиграфическое предприятие <span>«ИКСО»</span> - профессиональная полиграфия высокого качества, быстрые и качественные услуги в сфере печати.</div> <br>
				<div class="paragraph">Специализация предприятия – маркировка резинотехнических изделий методом вулканизации и нанесение изображений на любые поверхности.</div><br>
				<div class="paragraph">Ведём активную внешнеэкономическую деятельность с иностранными партнерами.</div><br>
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
import { mapState } from "vuex";
export default {
  computed: 
	{
    // ...mapGetters(["getAbout"]),
		...mapState(["getAbout"]),
  }
};
</script>
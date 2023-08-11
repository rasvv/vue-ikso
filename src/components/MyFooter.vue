<template>
	<v-container class="header__bgcolor">
		<v-row class="d-flex justify-center">
			<v-col cols="3"></v-col>

			<v-col cols="6" class="d-flex justify-center">
				2021 - {{new Date().getFullYear()}}   &copy;   {{ getFooter[0].title }}			
			</v-col>
			<v-col cols="3">
				{{ getFooter[0].text }}
				<a href="https://rasvv.github.io/vue-mySite/" target="blank" ><img src="../assets/img/rvv.png" alt="rvv" height="20"></a>
			</v-col>

			</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFooter"])
  }
};
</script>

<style lang="sass" scoped>
*
	font-size: 18px
</style>

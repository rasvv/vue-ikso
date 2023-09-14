<template>
  <div class="production" v-if="getIsProd">
    
    <v-row class="pa-5 bg">
			<carusel-view v-if="getProductionProd"/>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CaruselView from '@/views/CaruselView.vue'
export default {

	computed: {
		...mapGetters({
			getProductions: "getProductions",
			getProductionProd: "getProductionProd",
			getIsProd: "getIsProd",

			getNext: "getNext",
			getPrev: "getPrev"
		}),
		// getProductionProd() {
		// 	console.log("this.getProductions");
		// 	console.log(this.getProductions);
		// 	return this.getProductions ? this.getProductions[0].production:false
		// },
	},
	components: {
		CaruselView
	}
};
</script>

<style lang="scss" scoped>
.bg {
	background-color: #8ddcf0
}
</style>

<template>
  <div class="production" v-if="getProductions">
    
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
			getProduction: "getProduction",
			// getProductionProd: "getProductionProd",
			getIsProd: "getIsProd",

			getNext: "getNext",
			getPrev: "getPrev"
		}),
		getProductionProd() {
			console.log("this.getProductions");
			console.log(this.getProductions[0]);
			return this.getProductions[0].production
		},

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

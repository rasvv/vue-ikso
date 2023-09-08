<template>
	<!-- <div class="d-flex flex-column justify-center">
		<h2>Carusel		</h2>
			{{ getProduction }}
			<v-spacer></v-spacer>
			{{ getProdProd }}
			</div> -->

      <v-carousel v-if="getProductionProd" height="70vh" class="ma-7 pa-4" hide-delimiters progress="primary">
        <template v-slot:prev="{ props }">
          <v-btn variant="elevated" @click="props.onClick">{{ getPrev }}</v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="elevated" @click="props.onClick">{{ getNext }}</v-btn>
        </template>
        <v-carousel-item
          v-for="prod in getProductionProd"
          :key="prod.caption"
          contain
          transition="fade-transition"
        >
          <v-card >
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="7">
                <v-img cover height="60vh" :src="require(`@/${prod.img}`)"></v-img>

              </v-col>
              <v-col cols="3" class="d-flex align-center flex-column justify-center">
                <h2 class="my-5">{{ prod.caption }}</h2>
                <h4 class="mb-10">{{ prod.text }}</h4>
              </v-col>
              <v-col cols="1"></v-col>

            </v-row>
            
          </v-card>
        </v-carousel-item>
      </v-carousel>

</template>

<script>
import store from "@/store";
import { mapGetters } from "vuex";
export default {

	computed: {
		...mapGetters({
			getProductions: "getProductions",

			getNext: "getNext",
			getPrev: "getPrev"
		}),
		getProdProd() {
			return this.getProduction[0].production
		},
		getProductionProd() {
			console.log("this.getProductions");
			console.log(this.getProductions[0]);
			return this.getProductions[0].production
		},
	},
};
</script>

<style lang="scss" scoped>
.bg {
	background-color: #8ddcf0
}
</style>

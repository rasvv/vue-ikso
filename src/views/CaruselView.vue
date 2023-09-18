<template>
  <v-carousel v-if="getProductionProd" height="75vh" class="ma-4 pa-2" hide-delimiters progress="primary">
    <template v-slot:prev="{ props }" class="d-flex align-center">
      <v-btn variant="elevated" @click="props.onClick" class="btn-carusel">{{ getPrev }}</v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn variant="elevated" @click="props.onClick" class="btn-carusel">{{ getNext }}</v-btn>
    </template>
    <v-carousel-item v-for="prod in getProductionProd" :key="prod.caption"  transition="fade-transition">
      <v-card>
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <v-row class="d-flex flex-column py-4">
              <h2 class="my-5">{{ prod.caption }}</h2>
              <h4 class="mb-2">{{ prod.text }}</h4>
              <v-img contain height="60vh" :src="require(`@/${prod.img}`)" class="mb-5"></v-img>
            </v-row>
           
          </v-col>
          <v-col cols="1"></v-col>

        </v-row>

      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
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

<style lang="sass">
.btn-carusel
  font-size: 14px
  background: #0f0231
  color: white
</style>
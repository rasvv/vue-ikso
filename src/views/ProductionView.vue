<template>
  <div class="production">
    <v-row class="pa-7">
      <h3>{{ getProductionText }}</h3>
    </v-row>
    
    <v-row class="pa-5 bg">
      <v-carousel height="70vh" class="ma-7 pa-4" hide-delimiters progress="primary">
        <template v-slot:prev="{ props }">
          <v-btn variant="elevated" @click="props.onClick">{{getPrev}}</v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn variant="elevated" @click="props.onClick">{{ getNext }}</v-btn>
        </template>
        <v-carousel-item
          v-for="(prod, i) in getProduction"
          :key="i"
          cover
          
        >
          <v-card >
            <h2 class="my-5">{{ prod.caption }}</h2>
            <h4 class="mb-10">{{ prod.text }}</h4>
            <v-img cover height="50vh" :src="require(`@/${prod.img}`)"></v-img>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters(["getProduction", "getProductionText", "getNext", "getPrev"]),
  },
};
</script>

<style lang="scss" scoped>
.bg
 {background-color: #8ddcf0}
</style>

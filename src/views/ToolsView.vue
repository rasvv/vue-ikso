<template>
  <v-container class="ma-4">
    <!-- <div v-for="(slide, i) in getToolsImg" :key="i">{{ slide }}</div> -->
    <v-row>
      <v-col cols="getVersion? 3 : 12"
        ><div>{{ getTools.text }}</div></v-col
      >
      <v-col  v-show="getVersion" cols="9">
        <v-carousel height="700">
          <v-carousel-item
            v-for="(slide, i) in getToolsImg"
            :key="i"
            :src="require(`@/${slide}`)"
            contain
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTools", "getToolsImg", "getVersion"]),
  },
};
</script>
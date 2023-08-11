<template>
  <v-container class="ma-4">
    <v-row>
      <v-col cols="3">
        <v-row class="ma-4">
          <v-img class="img" :src="require(`@/${getAboutImg[1]}`)" alt="img">
          </v-img>
        </v-row>
        <v-row class="ma-4">
          <v-img
            class="img"
            :src="require(`@/${getAboutImg[2]}`)"
            alt="img"
          ></v-img>
        </v-row>
      </v-col>
      <v-col cols="6">
        <div 
          v-for="desc in getAboutDesc.texts" 
          :key="desc.text"
          class="mb-10"
        >
          {{ desc.text }}
        </div>
      </v-col>
      <v-col cols="3">
        <v-row class="ma-4">
          <v-img
            class="img"
            :src="require(`@/${getAboutImg[3]}`)"
            alt="img"
          ></v-img>
        </v-row>
        <v-row class="ma-4">
          <v-img
            class="img"
            :src="require(`@/${getAboutImg[4]}`)"
            alt="img"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data: () => ({
    title: "",
    desc: [],
  }),
  computed: {
    ...mapGetters(["getAboutDesc", "getAboutImg"]),
  },
  methods: {
    ...mapMutations({}),
  },
};
</script>

<style lang="sass" scoped>
.img
  max-height: 400 px
  object-fit: cover
</style>
<template>
  <v-container class="ma-4">
    <!-- <div v-for="(slide, i) in getToolsImg" :key="i">{{ slide }}</div> -->
    <v-row>
      <v-col cols="getVersion? 3 : 12"
        ><div>{{ getTools.text }}</div></v-col
      >
      <v-col v-show="getVersion" cols="9">
        <v-carousel height="70vh" hide-delimiters show-arrows>
          <v-carousel-item
            v-for="(slide, i) in getToolsImg"
            :key="i"
            :src="require(`@/${slide}`)"
            contain
            color="purple"
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
  data: () => ({
    clicked: "slide",
  }),
  computed: {
    ...mapGetters(["getTools", "getToolsImg", "getVersion"]),
  },
  methods: {
    onClick() {
      console.log(true);
      this.clicked = "slide.active";
    },
    addClass() {
      console.log(true);
      this.clicked = "slide.active";
    },
    removeClass() {
      console.log(false);
      this.clicked = "slide";
    }
  },
};
</script>

<style lang="scss" scoped>
body {
  /* overflow: hidden; */
  margin: 0;
  /* background-color: hsl(256, 92%, 10%); */
  /* height: 100vh; */
}

h1 {
  color: #fff;
  text-align: center;
  font-size: 36px;
}

.slide__container {
  width: 100%;
  display: flex;
}

.slide {
  height: 500px;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  color: #fff;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: all 500ms ease-in-out;
}

.slide h3 {
  position: absolute;
  font-size: 24px;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.slide.active {
  flex: 10;
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

.hidden {
  display: none;
}
</style>
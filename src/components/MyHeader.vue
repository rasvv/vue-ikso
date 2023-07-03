<template>
  <v-container class="header__bgcolor">
    <v-row class="d-flex align-center">
      <v-col cols="2">
        <v-img   :width="100"
          cover 
          to="/"
          :src="require(`../assets/img/logo.png`)"></v-img>
      </v-col>
      <v-col cols="10">
      <!--   <v-btn to="/about">О нас</v-btn>
        <v-btn to="/tools">Производство</v-btn>
        <v-btn to="/advantage">Преимущества</v-btn>
        <v-btn to="/productions">Продукция</v-btn>
        <v-btn to="/clients">Партнеры</v-btn>
        <v-btn to="/photos">Контакты</v-btn> -->
        <nav class="d-flex justify-space-between">
          <!-- <router-link to="/">Home</router-link> | -->
          <router-link to="/tools">Производство</router-link>
          <router-link to="/advantage">Преимущества</router-link>
          <router-link to="/productions">Продукция</router-link>
          <router-link to="/clients">Партнеры</router-link>
          <router-link to="/about">О нас</router-link>
        </nav> 
     </v-col>

    </v-row>
  </v-container>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
// export default {
//   computed: {
//     ...mapGetters(["getHobbyLinks", "getHandmadeLinks", "getPhotosLinks"]),
//   },
//   methods: {
//     ...mapActions(["updateAlbum", "updateView"]),
//     onSetAlbum(album) {
//       this.updateAlbum(album);
//       this.updateView("links");
//     },
//   },
// };
</script>

<style></style>

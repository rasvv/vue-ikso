<template>
  <v-app overflow-y-auto class="d-flex justify-center">
    <Header />
    <v-main>
      <h1>{{ getActiveRouter }}</h1>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<script>
import Header from "./components/MyHeader.vue";
import Footer from "./components/MyFooter.vue";
import { mapGetters } from "vuex";
// import MainPage from './components/MainPage.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters(["getActiveRouter"]),
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap')

@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap")

@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')

*
  margin: 0
  padding: 0
  -webkit-box-sizing: border-box
  box-sizing: border-box

#app
  // font-family: 'Caveat', sans-serif
  font-family: 'Alegreya', serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  font-size: 24px

.v-container
  max-width: 100vw !important

.header__bgcolor
  background-color: #0f0231
  color: #eeeeee

.light-color
  background-color: lightblue



// .v-btn.primary--text 
//   color: yellow

.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input
  color: yellow !important

.v-input__details
  display: none  !important  
</style>

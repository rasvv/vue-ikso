<template>
  <v-app overflow-y-auto class="d-flex justify-center">
    <Header />
    <v-main>
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
// import MainPage from './components/MainPage.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="sass">
#app 
  font-family: 'Caveat', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.v-container
  max-width: 100vw !important

.header__bgcolor
  background-color: #0f0231

.light-color
  background-color: lightblue


nav 
  padding: 30px

  a 
    font-weight: bold
    color: light-grey

router-link
  color: white

.router-link-exact-active 
  color: yellow
    
// .v-btn.primary--text 
//   color: yellow

.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input 
  color: yellow !important


</style>

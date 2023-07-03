<template>
  <v-app weidth="100vw" overflow-y-auto class="d-flex justify-center">
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
import Footer from "./components/MyHeader.vue";
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
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  max-width: 95vw


.bgcolor
  background-color: #0f0231

nav 
  padding: 30px

  a 
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active 
      color: #42b983
    
  

</style>

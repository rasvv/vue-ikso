<template>
  <v-container class="header__bgcolor">
    <v-row class="d-flex align-center">
      <v-col cols="2" class="d-flex justify-start">
        <div>
          <v-img
            height="50"
            contain
            to="/"
            :src="require(`../assets/img/logo.png`)"
            @dblclick="toggleVersion"
          ></v-img>          
        </div>

      </v-col>
      <v-col cols="8" class="px-10">
        <nav class="d-flex justify-space-between">
          <router-link 
            class="router"
            v-for="router in getRouter" 
            v-model="rout"
            :key="router.id" 
            :to="router.to"
            @click="onSetActiveRouter(router)"
            @update="onSetActiveRouter(router.caption)"
          >
            {{ router.captions[getLang.id].caption }}
          </router-link>
        </nav>
      </v-col>
      <v-col cols="2" class="d-flex flex-row-reverse">
        <!-- <v-btn @click="onToggleVersion">{{getVersion}}</v-btn> -->
        <v-select
          v-model="selLang"
          :items="getLangs"
          item-title="caption"
          item-value="id"          
          :label="getLang.title"
          @update:model-value="onSetLang"
          base-color="yellow"
          color="yellow"
          class="select"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data: () => ({
    title: "",
    selLang: {},
    desc: [],
    selectedColor: "white",
    rout: ''
  }),
  methods: {
    ...mapMutations(['updateLang', 'updateActiveRouter', 'toggleVersion']),
    onGetLang() {
      this.selLang = this.getLang;
      this.rout = this.getActiveRouter
    },
    onSetLang() {
      console.log(this.selLang);
      this.updateLang(this.selLang);
      this.onGetLang()
      // this.onSetActiveRouter()
    },
    onToggleVersion() {
      this.toggleVersion()
    },
    onSetActiveRouter(router) {
      console.log(router);
      this.rout = router.captions[0].caption
      this.updateActiveRouter(router)
    },
    getCaption(cap) {
      console.log(this.getLang);
      console.log(cap.filter(desc => desc.lang = this.getLang.lang)[this.getLang.Id].caption);
      // return "caption"
      // return cap.filter(desc => desc.lang = this.getLang.lang)[this.getLang.Id].caption
    }
  },
  computed: {
    ...mapGetters(['getLang', 'getLangs', 'getRouter', 'getVersion'])

  },
  mounted() {
    this.onGetLang()
  }
};
</script>

<style lang="sass" scoped>
.router
  font-size: 18px
  color: grey
  text-decoration: none
  &:hover
    color: lightgrey

.router-link-exact-active
  color: yellow  

.select
  max-width: 50%

.v-input__details
  display: none  !important
.v-field__append-inner, .v-field__clearable, .v-field__prepend-inner
  display: none !important


</style>

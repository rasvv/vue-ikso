<template>
  <v-container class="ma-4" v-if="getAboutDesc">
    <v-row>
      <v-col cols="3">
        <v-row class="ma-4">
          <v-img
						v-if= "getAboutImg"
            class="img"
            :src="getAboutImg[1]"
            alt="img"
          ></v-img>
					<!-- {{ aboutImg[1] }} --> 
        </v-row>
        <v-row class="ma-4">
          <v-img
						v-if= "getAboutImg"
            class="img"
            :src="getAboutImg[2]"
            alt="img"
          ></v-img>
        </v-row>
      </v-col>
      <v-col cols="6" class="d-flex flex-column justify-center">
        <div 
					v-if="getAboutDesc"
          v-for="desc in getAboutTexts" 
          :key="desc.text"
          class="mb-10"
        >
          {{ desc.text }}
        </div>
				<!-- {{ getAboutTexts }} -->
      </v-col>
      <v-col cols="3">
        <v-row class="ma-4">
          <v-img
						v-if= "getAboutImg"
            class="img"
            :src="getAboutImg[3]"
            alt="img"
          ></v-img>
        </v-row>
        <v-row class="ma-4">
          <v-img
						v-if= "getAboutImg"
            class="img"
            :src="getAboutImg[4]"
            alt="img"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default {
	data: () => ({
		title: "",
		desc: [],
		sss: null,
	}),
	computed: {
		...mapGetters({
			getAboutImg: 'getAboutImg',
			getAboutDesc: 'getAboutDesc',
			getAboutJson: 'getAboutJson'
		}),
		getAboutTexts() {
			return this.getAboutDesc[0] ? this.getAboutDesc[0].texts : []
		}
	},
}
</script>

<style lang="sass" scoped>
.img
  max-height: 400 px
  object-fit: cover
</style>
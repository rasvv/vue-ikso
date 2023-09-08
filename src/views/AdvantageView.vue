<template>
  <v-container class="ma-4">
    <!-- <div>{{ getAdvantages }}</div> -->
    <v-row justify="space-around" >
      <v-card
        v-for="card in getAdvantages"
        :key="card.id"
        :width="400"
        class="ma-4"
      >
        <v-card class="pa-6" color="#0d28d9">
          <v-card
            height="250px"
            class="ma-1 pa-3"
          >
            <h4>{{ card.description[getLang.id].desc }}</h4>
            <v-img
              :src="require(`@/${card.img}`)"
              position="center center"
              height="150px"
              alt="logo"
              class="bg"
              contain
            >
            </v-img>
          </v-card>
        </v-card>
      </v-card>
    </v-row>
  </v-container>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed: {
		...mapGetters({
			getAdvantages: "getAdvantages",
			getLang: 'getLang'
		}),
	},

};
</script>

<style lang="scss" scoped>
.v-card.text {
	font-size: 18px
}
</style>
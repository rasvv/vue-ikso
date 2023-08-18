<template>
  <v-container class="ma-4">
    <h3>{{ getPartners[0].text }}</h3>
    <v-row justify="space-around" class="mt-4" >
      <v-card
        v-show="getVersion" 
        v-for="card in getPartners[0].partners"
        :key="card.caption"
        :width="400"
        class="ma-4 header__bgcolor"
      >
        <v-card class="pa-6" color="#5C6BC0">
          <v-card
            class="ma-1 pa-3"
            :href="card.site"
            target="blank"
          >
            <h4>{{ card.caption }}</h4>
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPartners", "getVersion"]),
  }
};
</script>
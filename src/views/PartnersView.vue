<template>
  <v-container class="ma-4">
    <p>{{ getPartners[0].text }}</p>
    <v-row justify="space-around" >
      <v-card
        v-show="getVersion" 
        v-for="card in getPartners[0].partners"
        :key="card.caption"
        :width="350"
        class="ma-4 header__bgcolor"
      >
        <v-card class="pa-6" color="#5C6BC0">
          <v-card
            :title="card.caption"
            class="ma-1 pa-3"
            :href="card.site"
            target="blank"
          >
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
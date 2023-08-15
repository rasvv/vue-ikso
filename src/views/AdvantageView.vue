<template>
  <v-container class="ma-4">
    <!-- <div>{{ getAdvantages }}</div> -->
    <v-row justify="space-around" >
      <v-card
        v-for="card in getAdvantages"
        :key="card.id"
        :width="300"
        class="ma-4 header__bgcolor"
      >
        <v-card class="pa-6" color="#5C6BC0">
          <v-card
            :text="card.description[getLang.id].desc"
            height="250px"
            class="ma-1 pa-3"
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
    ...mapGetters(["getAdvantages", "getLang"]),
  }
};
</script>
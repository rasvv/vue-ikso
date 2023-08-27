<template>
  <v-container class="ma-4">
    <!-- <div>{{ getAdvantages }}</div> -->
    <h2>{{ getPersonsText }}</h2>
    <v-row justify="space-around" >
      <v-card
        v-for="card in getPersons"
        :key="card.name"
        :width="400"
        class="ma-4"
      >
        <v-card class="pa-6" color="#0d28d9">
          <v-card
            height="550px"
            class="ma-1 pa-3 d-flex flex-column"
          >
            <h4>{{ card.post }}</h4>
            <v-img
              :src="require(`@/${card.img}`)"
              position="center center"
              height="350px"
              alt="logo"
              class="bg"
              contain
            >
            </v-img>
            <h3>{{ card.surname }}</h3>
            <h4>{{ card.name }}</h4>
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
    ...mapGetters(["getPersonsText", "getPersons"]),
  }
};
</script>

<style lang="scss" scoped>
.v-card.text {
  font-size: 18px}

</style>
<template>
	<v-container class="ma-4">
		<h2 class="main__about-caption">{{ this.getPartners[0].title }}</h2>
		<!-- <h2 class="main__about-caption">{{ partners }}</h2> -->
				<p>{{ this.getPartners[0].text }}</p>
    <v-row justify="space-around">
      <v-col
        v-for="card in this.getPartners[0].partners"
        :key="card.caption"
        cols="12"
        md="3"
      >
        <v-card
          class="pa-12"
          color="grey-lighten-3"
        >
          <v-card
            :elevation="card"
            :title="card.caption"
            class="mx-auto"
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
      </v-col>
    </v-row>
          <v-hover>
  <template v-slot:default="{ isHovering, props }">
    <v-card
      v-bind="props"
      :color="isHovering ? 'primary' : undefined"
      
      v-for="card in partners" 
      :key="card.caption"
    >
      <v-card-items :title="card.caption" ></v-card-items>
    </v-card>
  </template>
</v-hover>          
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data: () => ({
		// title: '',
    // partners: []
	}),	
  computed: 
	{
    ...mapGetters(['getPartners']),
		// ...mapState(["aboutJson"]),
  },
	methods: {
		// onGetPartners() {
			// this.title = this.getPartners.title
			// this.text = this.getPartners[0].text
			// // this.partners = this.getPartners[0].partners
			// this.partners = this.getPartners[0].partners
		// }
	},
	// mounted() {
	// 	this.onGetPartners()
	// },	
};
</script>
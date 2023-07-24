<template>
	<v-container class="ma-4">
		<h2 class="main__about-caption">{{ title }}</h2>
		<!-- <h2 class="main__about-caption">{{ partners }}</h2> -->
				<p>Мы сотрудничаем с ведущими производителями резинотехнических изделий России и некоторых иностранных государств</p>
          <!-- <v-container
            fluid
            class="d-flex justify-space-around "
          >
            <template >
              <v-hover
                v-slot="{ hover }"
                open-delay="200"
                v-for="card in partners"
                :key="card.caption"
              >		
                <v-card
                  :elevation="hover ? 16 : 2"
                  height="400px"
                  max-width="300px"
                  :href="card.site"
                  :class="{ 'on-hover': hover }"
                  target="blank"
                  :title="card.caption"
                >
                  <v-card-title title="card.caption" class="text-h5"></v-card-title>
                  <v-img
                    :src="require(`@/${card.img}`)"
                    position="center center"
                    height="250px"
                    alt="logo"
                    class="bg"
                    contain
                  >
                  </v-img>
                </v-card>
              </v-hover>
            </template>
          </v-container>           -->
          <v-container>
    <v-row justify="space-around">
      <v-col
        v-for="card in partners"
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
  </v-container>          
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
		title: '',
    partners: []
	}),	
  computed: 
	{
    ...mapGetters(['getPartners']),
		// ...mapState(["aboutJson"]),
  },
	methods: {
		onGetPartners() {
			this.title = this.getPartners[0].title
			// this.partners = this.getPartners[0].partners
			this.partners = this.getPartners[0].partners
		}
	},
	mounted() {
		this.onGetPartners()
	},	
};
</script>
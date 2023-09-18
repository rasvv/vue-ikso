<template>
  <v-container v-if="getContactsJson">
		<!-- {{ getContactsJson }} -->
    <v-row>
      <v-col cols="3">
        <v-row class="d-flex justify-center">
          <v-list class="d-flex flex-column">
            <a v-for="contact in getContacts" :key="contact.link" :href="`${contact.pre}${contact.link}`" class="pa-2 ma-2">
              <v-btn  class="pa-4 d-flex justify-space-between" width="100%">
                <v-img :src="require(`@/${contact.img}`)" width="40" class="mx-4"></v-img>
                <div width="60%" class="d-flex justify-end text"   >
                  {{ contact.link }}
                </div>
                
              </v-btn>
            </a>
          </v-list>
        </v-row>
      </v-col>
      <v-col cols="9">
        {{ getContactAddress }}
        <div class="footer__map">
          <iframe
            class="footer__map-frame"
            :src="getContactMap"
            width="100%"
            height="600"
            frameborder="1"
            allowfullscreen="true"
          >
          </iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getContactsJson"]),
		getContacts() { return this.getContactsJson[0].contacts },
		getContactAddress() { return this.getContactsJson[0].address },
		getContactMap() { return this.getContactsJson[0].map },
	},

	methods: {
		lowCase(text) {
			return text.toLowerCase()
		}
	}

};
</script>

<style lang="sass" scoped>
.text
  font-size: 14px
  text-transform: lowercase
  color:#0f0231
  text-decoration: none
a
  text-decoration: none
  
</style>
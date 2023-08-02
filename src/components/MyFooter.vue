<template>
	<v-container class="light-color">
		<v-row class="d-flex justify-center light-color">
			<v-col cols="3"></v-col>

			<v-col cols="6" class="d-flex justify-center light-color">
				2021 - {{new Date().getFullYear()}}   &copy;   Все права защищены			
			</v-col>
			<v-col cols="3">
				Дизайн и вёрстка: 
				<a href="https://rasvv.github.io/vue-mySite/"><img src="../assets/img/rvv.png" alt="rvv" height="20"></a>
			</v-col>

			</v-row>
	</v-container>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
// export default {
//   computed: {
//     ...mapGetters(["getHobbyLinks", "getHandmadeLinks", "getPhotosLinks"]),
//   },
//   methods: {
//     ...mapActions(["updateAlbum", "updateView"]),
//     onSetAlbum(album) {
//       this.updateAlbum(album);
//       this.updateView("links");
//     },
//   },
// };
</script>

<style></style>

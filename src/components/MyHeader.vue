<template>
	<v-container class="bgcolor">
		<v-row>
			<v-col cols="4">
				<v-img :src="require(`../assets/img/logo.png`)"></v-img>
			</v-col>
			<v-col cols="8">
				<v-btn>О нас</v-btn>
				<v-btn>Производство</v-btn>
				<v-btn>Преимущества</v-btn>
				<v-btn>Продукция</v-btn>
				<v-btn>Партнеры</v-btn>
				<v-btn>Контакты</v-btn>
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

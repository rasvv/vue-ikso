<template>
	<v-container class="bgcolor">
		<footer class="footer dark spacer">
		<div class="footer__container container">
			<p><a name="contacts"></a></p>
			<h2>Контакты</h2>			
			<div class="footer__contacts">
				<div class="footer__contacts-left">
					<div class="adress">г. Курск, Лесной проезд 62</div>
					<div class="mail"><a href="mailto:ikso46@mail.ru"><i class="far fa-envelope mar"></i>ikso46@mail.ru</a></div>
					<div class="phone3"><a href="tel:+7-4712-22-32-32"><i class="fas fa-phone mar"></i>+7-4712-22-32-32</a></div>
					<div class="phone1"><a href="tel:+7-904-526-77-78"><i class="fas fa-mobile-alt marbig"></i>+7-904-526-77-78</a></div>
					<div class="phone2"><a href="tel:+7-910-210-97-20"><i class="fas fa-mobile-alt marbig"></i>+7-910-210-97-20</a></div>
				</div>
	
				<div class="footer__map">
					<iframe class="footer__map-frame" src="https://yandex.ru/map-widget/v1/-/CCUeeBQTTD" width="100%" height="300"
						frameborder="1" allowfullscreen="true">
					</iframe>
				</div>

			</div>
			<div class="footer__bottom">
				<div class="created">
					Дизайн и вёрстка: 
					<a href="https://rasvv.github.io/vue-mySite/"><img src="../assets/img/rvv.png" alt="rvv"></a>
				</div>
				2021&copy;Все права защищены
			</div>

		</div>
	</footer>
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

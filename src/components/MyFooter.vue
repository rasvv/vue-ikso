<template>
	<v-container class="header__bgcolor">
		<v-row class="d-flex justify-center">
			<v-col cols="3"></v-col>

			<v-col cols="6" class="d-flex justify-center">
				2021 - {{ new Date().getFullYear() }}   &copy;   {{ getFooterLocal[0].title }}			
			</v-col>
			<v-col cols="3">
				{{ getFooterLocal[0].text }}
				<a href="https://rasvv.ru" target="blank" ><img src="../assets/img/rvv.png" alt="rvv" height="20"></a>
			</v-col>

			</v-row>
	</v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import store from '@/store'

export default {
	computed: {
		...mapGetters({
			getFooterLocal: 'getFooterLocal',
		}),
	},
};
</script>

<style lang="sass" scoped>
*
	font-size: 18px
</style>

<template>
	<v-container class="ma-4" v-if="getToolsJson">
		<!-- <div v-for="(slide, i) in getToolsImg" :key="i">{{ slide }}</div> -->
		<!-- {{ getToolsImg }} -->
		<v-row class="d-flex align-center">
			<v-col cols="getVersion? 3 : 12" class="mx-4">
				<div> {{ getToolsText }}</div>
				<!-- getLang = {{ getVersion }} -->
			</v-col>
			<v-col v-if="getVersion" cols="9">
				<v-carousel height="70vh" hide-delimiters="">
					<template v-slot:prev="{ props }">
						<v-btn variant="elevated" @click="props.onClick">
							{{ getPrev }}
						</v-btn>
					</template>
					<template v-slot:next="{ props }">
						<v-btn variant="elevated" @click="props.onClick">
							{{ getNext }}
						</v-btn>
					</template>

					<v-carousel-item 
						v-for="(slide, i) in getToolsImg" 
						:key="i" 
						:src="require(`@/${slide}`)" 
						contain
						color="purple">
					</v-carousel-item>
				</v-carousel>
				<!-- getToolsImg = {{ getToolsImg }} -->
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data: () => ({
		clicked: "slide",
	}),
	computed: {
		...mapGetters([
			// "getTools",
			"getToolsImg",
			"getVersion",
			"getNext",
			"getPrev",
			"getToolsJson",
			"getLang"
		]),
		getToolsText() {
			return this.getToolsJson.desc ? this.getToolsJson.desc[this.getLang.id].text : "this.getLang"
		}
	},
	methods: {
		onClick() {
			console.log(true);
			this.clicked = "slide.active";
		},
		addClass() {
			console.log(true);
			this.clicked = "slide.active";
		},
		removeClass() {
			console.log(false);
			this.clicked = "slide";
		},
	},
};
</script>

<style lang="scss" scoped>
body {
	/* overflow: hidden; */
	margin: 0;
	/* background-color: hsl(256, 92%, 10%); */
	/* height: 100vh; */
}

h1 {
	color: #fff;
	text-align: center;
	font-size: 36px;
}

.slide__container {
	width: 100%;
	display: flex;
}

.slide {
	height: 500px;
	border-radius: 10px;
	margin: 5px;
	cursor: pointer;
	color: #fff;
	flex: 1;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: relative;
	transition: all 500ms ease-in-out;
}

.slide h3 {
	position: absolute;
	font-size: 24px;
	bottom: 20px;
	left: 20px;
	margin: 0;
	opacity: 0;
}

.slide.active {
	flex: 10;
	opacity: 1;
	transition: opacity 0.3s ease-in 0.4s;
}

.hidden {
	display: none;
}
</style>
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
						<v-btn variant="elevated" @click="props.onClick" class="btnCarusel">
							{{ getPrev }}
						</v-btn>
					</template>
					<template v-slot:next="{ props }">
						<v-btn variant="elevated" @click="props.onClick" class="btnCarusel">
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
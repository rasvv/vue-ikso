const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
// 	transpileDependencies: [
// 		'vuetify'
// 	],
// 	publicPath: process.env.NODE_ENV === 'production' 
// 		? '/vue-ikso/' 
// 		: '/'
// 	// publicPath: '/vue-mySite/'
// }

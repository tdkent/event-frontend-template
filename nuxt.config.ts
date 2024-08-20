export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', "@nuxtjs/google-fonts", "@nuxt/scripts", '@nuxtjs/color-mode'],
	//TODO: change preference to 'system'
	colorMode: {
		preference: 'light'
	},
	googleFonts: {
		families: {
			'Open Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
			'Mate SC': [400],
			'Cormorant Garamond': [300, 400]
		}
	}
})
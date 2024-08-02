export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', "@nuxtjs/google-fonts", "@nuxt/scripts"],
	app: {
		head: {
			titleTemplate: '%s | Gold Country Model Horse Show',
		},
	},
	//TODO: change preference to 'system'
	colorMode: {
		preference: 'light'
	},
	googleFonts: {
		families: {
			'Open Sans': true,
			'Arvo': [400, 700],
			'Dancing Script': [400]
		}
	},
	runtimeConfig: {
		public: {
			googleMapsKey: process.env.GOOGLE_MAPS_API_KEY
		}
	}
})
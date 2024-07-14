export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxt/ui','@nuxtjs/tailwindcss'],
	app: {
		head: {
			titleTemplate: '%s | Gold Country Model Horse Show',
		},
	},
	//TODO: change preference to 'system'
	colorMode: {
		preference: 'light'
	}
})
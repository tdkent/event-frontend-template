export default defineAppConfig({
	ui: {
		strategy: 'override',
		button: {
			color: {
				white: {
					ghost: 'hover:bg-none',
				},
			},
		},
		table: {
			th: {
				font: 'uppercase text-xs',
			},
			td: {
				base: 'whitespace-normal',
				font: 'text-xs',
			},
		},
		divider: {
			wrapper: {
				base: 'py-8  flex items-center align-center text-center',
			},
			container: {
				base: 'font-sans',
			},
			label: 'text-lg uppercase text-gray-400',
		},
	},
});

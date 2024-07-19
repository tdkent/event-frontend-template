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
	},
});

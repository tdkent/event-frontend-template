export default defineAppConfig({
	ui: {
		strategy: 'override',
		accordion: {
			default: {
				openIcon: 'i-heroicons-chevron-left-20-solid',
				closeIcon: 'i-heroicons-chevron-down-20-solid',
			},
		},
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
		verticalNavigation: {
			active: 'before:bg-none',
			inactive: 'before:bg-none',
			size: 'text-base',
			padding: 'px-2.5 py-2.5',
		},
	},
});

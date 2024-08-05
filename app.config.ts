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
				base: 'w-1/2 text-left bg-blue-50',
				color: 'text-blue-900',
				font: 'uppercase text-sm',
			},
			td: {
				base: 'whitespace-normal w-1/2 text-left',
				color: 'text-gray-900 dark:text-gray-400',
				font: 'text-sm',
			},
		},
		divider: {
			wrapper: {
				base: 'py-8  flex items-center align-center text-center',
			},
			container: {
				base: 'font-header',
			},
			border: {
				base: 'flex border-blue-100',
			},
			label: 'text-xl text-blue-900',
		},
		verticalNavigation: {
			active: 'before:bg-none',
			inactive: 'before:bg-none',
			size: 'text-base',
			padding: 'px-2.5 py-2.5',
		},
	},
});

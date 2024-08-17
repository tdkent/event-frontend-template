export default defineAppConfig({
	ui: {
		primary: 'blue',
		accordion: {
			container:
				'border border-blue-100 bg-blue-50 my-4 rounded-lg text-blue-900',
			item: {
				color: 'text-blue-900',
				padding: 'py-8',
			},
			default: {
				class: 'py-4 text-sm',
				openIcon: 'i-heroicons-chevron-left-20-solid',
				closeIcon: 'i-heroicons-chevron-down-20-solid',
			},
		},
		button: {
			color: {
				white: {
					ghost: 'hover:bg-none focus-visible:ring-blue-500',
				},
				black: {
					link: 'hover:no-underline focus-visible:ring-blue-500',
				},
				gray: {
					ghost:
						'text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus-visible:ring-blue-500',
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
			active:
				'text-blue-900 	before:bg-blue-50 before:hover:bg-blue-100 before:hover:rounded-none',
			size: 'text-base',
			padding: 'px-2.5 py-2.5',
		},
		formGroup: {
			default: {
				size: 'xl',
			},
			error: 'absolute ml-0.5 mt-1 h-4 text-xs',
		},
		input: {
			default: {
				color: 'white',
				size: 'xl',
			},
			color: {
				white: {
					outline: 'focus:ring-blue-500',
				},
			},
		},
		radioGroup: {
			default: {
				color: 'blue',
			},
			legend: 'text-base',
		},
		radio: {
			label: 'text-base',
			wrapper: 'py-0.5',
		},
		modal: {
			overlay: {
				background: 'bg-black/50',
			},
		},
		card: {
			header: {
				background: 'bg-gray-50 rounded-t-lg',
			},
			footer: {
				background: 'bg-gray-50 rounded-b-lg',
			},
		},
	},
});

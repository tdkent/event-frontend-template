export default defineAppConfig({
	ui: {
		primary: 'blue',
		accordion: {
			container:
				'border border-blue-100 bg-blue-50 my-4 rounded-lg text-blue-900 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-600',
			item: {
				color: 'text-blue-900 dark:text-blue-100',
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
					ghost:
						'hover:bg-transparent dark:hover:bg-transparent focus-visible:ring-blue-500',
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
				base: 'w-1/2 text-left bg-blue-50 dark:bg-blue-900',
				color: 'text-blue-900 dark:text-blue-100',
				font: 'uppercase text-sm',
			},
			td: {
				base: 'whitespace-normal w-1/2 text-left',
				color: 'text-gray-800 dark:text-gray-100',
				font: 'text-sm',
			},
		},
		divider: {
			wrapper: {
				base: 'py-8 flex items-center align-center text-center',
			},
			container: {
				base: 'font-header',
			},
			border: {
				base: 'flex border-blue-100 dark:border-blue-900',
			},
			label: 'text-xl text-blue-900 dark:text-blue-100',
		},
		verticalNavigation: {
			active:
				'text-blue-900 dark:text-gray-100 font-light before:bg-blue-50 dark:before:bg-blue-900 before:hover:bg-blue-100 dark:before:hover:bg-blue-800 before:hover:rounded-none',
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
				background: 'bg-gray-50 dark:bg-gray-900 rounded-t-lg',
			},
			footer: {
				background: 'bg-gray-50 dark:bg-gray-900 rounded-b-lg',
			},
		},
		slideover: {
			background: 'bg-gray-50',
		},
	},
});

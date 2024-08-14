export default defineAppConfig({
	ui: {
		accordion: {
			container:
				'border border-blue-100 bg-blue-50 my-4 rounded-lg w-full flex flex-col text-blue-900',
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
					ghost: 'hover:bg-none',
				},
				black: {
					link: 'hover:no-underline',
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
			active: 'before:bg-none hover:bg-blue-100 hover:rounded-none',
			inactive: 'before:bg-none',
			size: 'text-base',
			padding: 'px-2.5 py-2.5',
		},
		formGroup: {
			default: {
				size: 'xl',
			},
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

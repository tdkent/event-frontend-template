import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
	theme: {
		screens: {
			xs: '360px',
			sm: '480px',
			md: '648px',
			lg: '1026px',
			xl: '1440px',
		},
		extend: {
			colors: {
				yellow: {
					50: '#FFFBEA',
					100: '#FFF3C4',
					200: '#FCE588',
					300: '#FADB5F',
					400: '#F7C948',
					500: '#F0B429',
					600: '#DE911D',
					700: '#CB6E17',
					800: '#B44D12',
					900: '#8D2B0B',
				},
				blue: {
					50: '#E3F8FF',
					100: '#B3ECFF',
					200: '#81DEFD',
					300: '#5ED0FA',
					400: '#40C3F7',
					500: '#2BB0ED',
					600: '#1992D4',
					700: '#127FBF',
					800: '#0B69A3',
					900: '#035388',
				},
				gray: {
					50: '#F7F7F7',
					100: '#E1E1E1',
					200: '#CFCFCF',
					300: '#B1B1B1',
					400: '#9E9E9E',
					500: '#7E7E7E',
					600: '#626262',
					700: '#515151',
					800: '#3B3B3B',
					900: '#222222',
				},
				teal: {
					50: '#EFFCF6',
					100: '#C6F7E2',
					200: '#8EEDC7',
					300: '#65D6AD',
					400: '#3EBD93',
					500: '#27AB83',
					600: '#199473',
					700: '#147D64',
					800: '#0C6B58',
					900: '#014D40',
				},
			},
			fontFamily: {
				sans: ['Open Sans', 'sans'],
				header: ['Mate SC', 'serif'],
				serif: ['Cormorant Garamond', 'serif'],
				splash: ['Urbanist', 'sans'],
			},
			keyframes: {
				'pic-1': {
					'0': {
						transform: 'scale(1)',
						opacity: '100',
					},
					'22.5%': { opacity: '100' },
					'25%': {
						transform: 'scale(1.1)',
						opacity: '0',
					},
					'97.5%': { opacity: '0' },
					'100%': { opacity: '100' },
				},
				'pic-2': {
					'0%': {
						opacity: '0',
					},
					'22.5%': {
						opacity: '0',
						transform: 'scale(1.05)',
					},
					'25%, 47.5%': {
						opacity: '100',
					},
					'50%': {
						transform: 'scale(1)',
						opacity: '0',
					},
					'100%': {
						opacity: '0',
					},
				},
				'pic-3': {
					'0%': {
						opacity: '0',
					},
					'47.5%': {
						transform: 'scale(1)',
						opacity: '0',
					},
					'50%, 72.5%': {
						opacity: '100',
					},
					'75%': {
						transform: 'scale(1.1)',
						opacity: '0',
					},
					'100%': {
						opacity: '0',
					},
				},
				'pic-4': {
					'0%': {
						opacity: '0',
					},
					'72.5%': {
						transform: 'scale(1.1)',
						opacity: '0',
					},
					'75%': {
						opacity: '100',
					},
					'97.5%': {
						opacity: '100',
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '0',
					},
				},
				'text-1': {
					'0%': {
						opacity: '0',
						transform: 'translateX(40%) skewY(-10deg)',
					},
					'3%, 50%': {
						opacity: '100',
						transform: 'translate(0%) skewY(0deg)',
					},
					'53%': {
						transform: 'translate(-40%)',
						opacity: '0',
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(40%)',
					},
				},
				'text-2': {
					'0%, 53%': {
						opacity: '0',
						transform: 'translateX(40%) skewY(-10deg)',
					},
					'56%, 97%': {
						opacity: '100',
						transform: 'translate(0%) skewY(0deg)',
					},
					'100%': {
						transform: 'translate(-40%)',
						opacity: '0',
					},
				},
				'scale-text': {
					'0%': {
						transform: 'scale(1)',
					},
					'100%': {
						transform: 'scale(1.4)',
					},
				},
			},
			animation: {
				'slide-1': 'pic-1 20s linear infinite',
				'slide-2': 'pic-2 20s linear infinite',
				'slide-3': 'pic-3 20s linear infinite',
				'slide-4': 'pic-4 20s linear infinite',
				'text-1': 'text-1 8s ease-in infinite',
				'text-2': 'text-2 8s ease-in infinite',
			},
		},
	},
};

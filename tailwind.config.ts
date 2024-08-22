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
					400: '#3EBD93',
					500: '#27AB83',
					600: '#199473',
				},
			},
			fontFamily: {
				sans: ['Open Sans', 'sans'],
				header: ['Mate SC', 'serif'],
				serif: ['Cormorant Garamond', 'serif'],
				splash: ['Urbanist', 'sans'],
			},
			keyframes: {
				'dissolve-1': {
					'0%': { opacity: '0' },
					'8.5%': { opacity: '100' },
					'41.5%': { opacity: '100' },
					'50%': { opacity: '0' },
					'100%': { opacity: '0' },
				},
				'dissolve-2': {
					'0%': { opacity: '0' },
					'50%': { opacity: '0' },
					'58.5%': { opacity: '100' },
					'91.5%': { opacity: '100' },
					'100%': { opacity: '0' },
				},
			},
			animation: {
				'text-dissolve-1': 'dissolve-1 15s linear infinite',
				'text-dissolve-2': 'dissolve-2 15s linear infinite',
			},
		},
	},
};

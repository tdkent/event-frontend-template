import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
	theme: {
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
			},
			fontFamily: {
				sans: ['Open Sans', 'sans'],
				display: ['Arvo', 'serif'],
				script: ['Dancing Script', 'cursive'],
			},
		},
	},
};

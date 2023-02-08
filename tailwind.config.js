const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'
	],

	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#212121',
				'secondary-dark': '#252525',
				'ternary-dark': '#1A1A1A',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

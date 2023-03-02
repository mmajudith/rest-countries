/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '400px',
			...defaultTheme.screens,
		},
		colors: {
			'dark-blue': 'hsl(209, 23%, 22%)',
			'very-dark-blue-bg': 'hsl(207, 26%, 17%)',
			'very-dark-blue-text': 'hsl(200, 15%, 8%)',
			'dark-gray': 'hsl(0, 0%, 52%)',
			'very-light-gray': 'hsl(0, 0%, 98%)',
			blue: 'blue',
			White: 'hsl(0, 0%, 100%)',
		},
		extend: {
			fontFamily: {
				nunito: ['var(--font-nunito)'],
			},
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit,minmax(15rem,1fr))',
			},
		},
	},
	plugins: [],
};

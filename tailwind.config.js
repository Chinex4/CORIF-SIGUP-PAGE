/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: '#1935AA',
				ink: '#697D95',
				grey: '#F7F8FE',
			},
			fontFamily: {
				myFont: ['Open Sans', 'sans'],
			},
		},
	},
	plugins: [],
};

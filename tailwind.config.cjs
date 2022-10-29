/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter, sans-serif'],
			},
		},
	},
	variants: {
		extend: {
			display: ['dark'],
		},
	},
	plugins: [],
};

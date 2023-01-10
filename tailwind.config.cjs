/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Overpass: ["Overpass", "sans-serif"],
			},
			colors: {
				Orange: "hsl(25, 97%, 53%)",
				lightGrey: "hsl(217, 12%, 65%)",
				MediumGrey: "hsl(216, 12%, 54%)",
				DarkBlue: "hsl(213, 19%, 20%)",
				VeryDarkBlue: "hsl(216, 12%, 8%)",
			},
		},
	},
	plugins: [],
};

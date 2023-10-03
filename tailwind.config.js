/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			phone: "426px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"1.5xl": "1324px",
			"2xl": "1536px",
		},
		extend: {
			fontFamily: {
				inter: "Inter, sans-serif",
				bricolage: "Bricolage, sans-serif",
			},
			fontSize: {
				xxs: ["11px"],
			},
			backgroundImage: {
				"gradient-linear": "linear-gradient(#009efd, #006dfa)",
			},
			colors: {
				primary: "#009EFD",
				secondary: "#006DFA",
				"text-primary": "#E6E6E6",
				"text-secondary": "#888888",
				shaded: "#0A0A0A",
				background: "#040305",
			},
			keyframes: {
				animatedgradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
			},
			backgroundSize: {
				"300%": "300%",
			},
			animation: {
				gradient: "animatedgradient 6s ease infinite alternate",
			},
		},
	},
	plugins: [],
};

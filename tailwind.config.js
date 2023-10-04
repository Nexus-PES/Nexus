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
				clamp: "clamp(2.25rem, 10vw, 4rem)",
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
				wave: {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"30%": { transform: "rotate(14deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" },
				},
			},
			backgroundSize: {
				"300%": "300%",
			},
			animation: {
				gradient: "animatedgradient 6s ease infinite alternate",
				"waving-hand": "wave 2s linear infinite",
			},
		},
	},
	plugins: [],
};

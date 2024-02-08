/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)'],
			},
			screens: {
				'tablet': '640px',
				// => @media (min-width: 640px) { ... }
			
				'laptop': '1024px',
				// => @media (min-width: 1024px) { ... }
			
				'desktop': '1280px',
				// => @media (min-width: 1280px) { ... }
				'tv': '2200px',
				// => @media (min-width: 1280px) { ... }
				'full-tv': '3000px',
				// => @media (min-width: 1280px) { ... }
			},
		}
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}

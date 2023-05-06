/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#F1DFCD',
				'background': '#F5F0EF',
				'accent': '#CAB8A2',
				'footer': '#E8E1D8',
            }
        },
    },
    plugins: [],
}
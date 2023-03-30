const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "piggy-primary": "#ff8d8d",
                "piggy-secondary": "#f76464",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)"],
            boontook: "BoonTook",
            ...fontFamily.sans,
        },
    },
    plugins: [],
};

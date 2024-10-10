import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: ["selector", '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                },
            },
        },
        screens: {
            'sm': '480px',
            'md': '640px',
            'lg': '768px',
            'xl': '991px',
            '2xl': '1100px',
          }
    },
    plugins: [],
};
export default config;

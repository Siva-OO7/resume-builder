
import type {Config} from "tailwindcss";


const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme : {
        extend: {
            colors: {
                primary:  '#2C1D74'
            }
        },
    },
    plugins: [],
};

export default config;


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#0d9489",
    },
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 1. This must point to your HTML file!
    "./index.html", 
    // 2. This must point to your main JavaScript file!
    "./script.js",
    // You can add a broad selector for all JS files if you use a 'src' folder
    // "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
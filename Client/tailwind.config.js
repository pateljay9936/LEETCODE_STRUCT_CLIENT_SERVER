// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
//     "index.html",
 
//     // Or if using `src` directory:
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   theme: {
//     extend: {
//       boxShadow: {
//         glow: '0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 25px #fff',
//       },
//     },
//   },
//   variants: {
//     extend: {
//       boxShadow: ['hover'],
//     },
//   },
//   plugins: [],
// }


module.exports = {
  purge: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
      "index.html",
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 25px #fff',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}
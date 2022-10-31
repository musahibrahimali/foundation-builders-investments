/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  options: {
    safelist: {
      standard: ['outline-none'],
    },
  },
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        blacken: "#212b36",
        "body-color": "#637381",
        'bOrange': "#C73600",
        'dirty': "#F5EBDF",
        'lighten-blue': "#E9F0F4",
        'build-color': "#F9F6F4",
        'dark-color': "#48474A",
        'light-color': "#F9F6F4",
        'blog-color': '#F0F2F5',
        'error-bg': '#007aff',
        'deep-yellow': "#FA8A00",
        'light-blue': "#03A9F4",

      },
      /* background image */
      backgroundImage: () => ({
        'hero-bg': "url('/images/hero_bg.jpg')",
      }),
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
      height: {
        'video': "40rem",
        '100': "25rem",
        '110': "26rem",
        '120': "28rem",
        '130': "30rem",
        '140': "35rem",
        '150': "40rem",
        '160': "45rem",
        '170': "50rem",
        '180': "55rem",
        '190': "60rem",
      },
    },
  },
  plugins: [],
}

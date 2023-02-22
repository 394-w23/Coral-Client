const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/*/.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      greenPrimary: "#a5be00",
      navyPrimary: "#074789",
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
});

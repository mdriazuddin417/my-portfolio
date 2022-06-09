module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff014f",

          secondary: "#ff451b",

          accent: "#dd7cc0",

          neutral: "#211E2E",

          "base-100": "#F6F3F6",

          info: "#A3D0F5",

          success: "#21E499",

          warning: "#F1A337",

          error: "#F32063",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  //...
};

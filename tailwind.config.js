module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#ff014f",

        secondary: "#fbbf24",

        accent: "#38bdf8",

        neutral: "#3D4451",

        "base-100": "#FFFFFF",

        info: "#3ABFF8",

        success: "#16a34a",

        warning: "#fccf29",

        error: "#dc2626",
      },
    },
  ],
  plugins: [require("daisyui")],
};

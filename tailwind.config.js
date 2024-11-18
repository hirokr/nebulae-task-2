/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        mainText: "var(--mainText)",
        shadowText: "var(--shadowText)",
        hoverColor: "var(--hoverColor)",
      },
      fontFamily: {
        openSans: "var(--open)",
        mono: "var(--mono)",
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "19.5px"],
        lg: ["18px", "21.94px"],
        xl: ["20px", "24.38px"],
        "2xl": ["24px", "29.26px"],
        "3xl": ["28px", "50px"],
        "4xl": ["48px", "58px"],
        "8xl": ["96px", "106px"],
        h4_text: "18px",
        h3_text: "clamp(25px, 50% ,47px)",
        p_text: "15px",
        span_text: "clamp(15px,50% ,25px )",
        li_text: "14px",
        nav_text: "16px",
      },
      screens: {
        s_sm: "764px",
        s_lg: "1024px",
        s_wide: "1280px",
      },
    },
  },
  plugins: [],
};

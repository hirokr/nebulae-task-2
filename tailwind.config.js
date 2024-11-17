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
        h4_text: "18px",
        h3_text: "clamp(25px, 50% ,47px)",
        p_text: "15px",
        span_text: "clamp(15px,50% ,25px )",
        li_text: "14px",
        nav_text: "16px",
      },
      screens: {
        phone: "var(--phone)",
        tablet: "var(--tablet)",
        desktop: "var(--desktop)",
      },
    },
  },
  plugins: [],
};

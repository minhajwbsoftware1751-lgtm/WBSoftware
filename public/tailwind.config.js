/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f7961d",
        secondary: "#0771BA",
        red_color: "#E64449",
        green_color: "#4CAF50",
        purple_color: "#7367F0",
        blue_magenta_color: "#E0DEFC",
        charcoal_purple_color: "#2F2B3DE6",
        color_gray_200: "#E5E7EB",
        color_gray_500: "#6B7280",
        required_color_red: "#F70000",
        color_mcq_test: "#333333",
        color_qskip: "#FFDB57",
        color_qattempt: "#1E3A8A",
        color_qright: "#317848",
        color_qwrong: "#F70000",
        color_gray_deep: "#808080",
        color_ans_wrong: "#FEE2E2",
        color_ans_right: "#DCFCE7",
        color_dark_primary: "#25293C",
        color_dark_blue_gray: "#2E3348",
        color_dark_extradark_blue_gray: "#1F232F",
        color_dark_lavender_gray: "#C8C5DD",
        color_dark_grayish_blue: "#7A7B91",
        color_dark_header_bg: "#393C64",
        color_dark_border: "#CDCBE2",
      },

      margin: {
        mt_4px: "4px",
        mt_primary: "6px",
        mb_primary: "6px",
        mt_8px: "8px",
        mt_medium: "12px",
        mt_16px: "16px",
        mt_large: "20px",
        ml_secondary: "40px",
        mr_secondary: "40px",
        mt_secondary: "40px",
        mb_secondary: "40px",
        mt_24px: "24px",
      },

      gap: {
        gap_6px: "6px",
        gap_8px: "8px",
        gap_primary: "12px",
      },

      fontSize: {
        text_12px: "12px",
        text_sm: "14px",
        text_sm2: "15px",
        text_md: "16px",
        text_18px: "18px",
        text_lg: "20px",
        text_xl: "24px",
        text_30px: "30px",
        text_xxl: "34px",
        text_40px: "40px",
        text_xxxl: "50px",
      },

      padding: {
        pl_3px: "3px",
        pr_3px: "3px",
        pt_3px: "3px",
        pb_3px: "3px",
        p_4px: "4px",
        pl_primary: "6px",
        pr_primary: "6px",
        pt_primary: "6px",
        pt_8px: "8px",
        pl_10px: "10px",
        pr_10px: "10px",
        pt_10px: "10px",
        pb_10px: "10px",
        p_12px: "12px",
        pl_16px: "16px",
        pr_16px: "16px",
        pt_16px: "16px",
        pb_16px: "16px",
        pl_primary2: "18px",
        pr_primary2: "18px",
        pt_primary2: "18px",
        pb_primary2: "18px",
        pl_secondary: "20px",
        pr_secondary: "20px",
        pt_secondary: "20px",
        pb_secondary: "20px",
        p_28px: "28px",
      },

      borderRadius: {
        rounded_primary: "6px",
        rounded_secondary: "10px",
        rounded_4px: "4px",
      },

      height: {
        primary: "40px",
        h_secondary: "192px",
      },

      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },

      animation: {
        shake: "shake 0.3s ease-in-out",
        fadeIn: "fadeIn 0.3s ease-out",
      },
      
    },
  },

  daisyui: {
    themes: ["light", "dark"],
  },

  plugins: [require("daisyui")],
};

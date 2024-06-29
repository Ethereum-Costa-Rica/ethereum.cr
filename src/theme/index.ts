import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      ethPuraVida: {
        primary: "#84CCF5", // Light blue
      },
      dark: "#0F2841",
      blueCR: "#0F2841",
      darkRedCR: "#AA2222",
    },
  },
  spacing: {
    mobile: {
      paddingX: "22px",
      paddingY: "32px",
      verticalGag: "12px",
      marginY: "24px",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
      },
      sizes: {
        sm: {
          fontSize: "20px",
          padding: "8px 16px",
          height: "46px",
          gap: "10px",
        },
        md: {
          fontSize: "24px",
          padding: "12px 20px",
          height: "60px",
        },
        lg: {
          fontSize: "32px",
          padding: "16px 24px",
        },
      },
      variants: {
        primary: {
          bg: "brand.blueCR",
          color: "white",
        },
        "eth-pura-vida": {
          bg: "brand.ethPuraVida.primary",
          color: "black",
        },
      },
      defaultProps: {},
    },
    Text: {
      variants: {
        "h1-extra-bold-desktop": {
          fontSize: "64px",
          fontWeight: "extrabold",
          lineHeight: "150%",
          letterSpacing: "1%",
        },

        "h2-extra-bold-desktop": {
          fontSize: "44px",
          fontWeight: "extrabold",
          lineHeight: "150%",
          letterSpacing: "1%",
        },

        "h3-extra-bold-desktop": {
          fontSize: "40px",
          fontWeight: "extrabold",
          lineHeight: "150%",
          letterSpacing: "1%",
        },

        //
        "h1-extra-bold-mobile": {
          fontSize: "36px",
          fontWeight: "extrabold",
          lineHeight: "150%",
          letterSpacing: "1%",
        },
        "h2-extra-bold-mobile": {
          fontSize: "34px",
          fontWeight: "extrabold",
          lineHeight: "150%",
          letterSpacing: "1%",
        },
        "h3-extra-bold-mobile": {
          fontSize: "32px",
          fontWeight: "extrabold",
          lineHeight: "150%",
          letterSpacing: "1%",
        },
        "h4-extra-bold-mobile": {
          fontSize: "28px",
          fontWeight: "extrabold",
          lineHeight: "150%",
          letterSpacing: "1%",
        },

        //
        "h1-semibold": {
          fontSize: "36px",
          fontWeight: "semibold",
          lineHeight: "150%",
          letterSpacing: "3%",
        },
        "h2-semibold": {
          fontSize: "32px",
          fontWeight: "semibold",
          lineHeight: "150%",
          letterSpacing: "3%",
        },
        "h3-semibold": {
          fontSize: "24px",
          fontWeight: "semibold",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },

        //
        "normal-text-semibold": {
          fontSize: "20px",
          fontWeight: "light",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "small-text-semibold": {
          fontSize: "16px",
          fontWeight: "light",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },

        //
        "h1-regular": {
          fontSize: "36px",
          fontWeight: "medium",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "h2-regular": {
          fontSize: "32px",
          fontWeight: "medium",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "h3-regular": {
          fontSize: "24px",
          fontWeight: "medium",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "normal-text-regular": {
          fontSize: "20px",
          fontWeight: "medium",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "small-text-regular": {
          fontSize: "16px",
          fontWeight: "medium",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },

        //
        "h1-light": {
          fontSize: "36px",
          fontWeight: "light",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "h2-light": {
          fontSize: "32px",
          fontWeight: "light",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "h3-light": {
          fontSize: "24px",
          fontWeight: "light",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "normal-text-light": {
          fontSize: "20px",
          fontWeight: "light",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
        "small-text-light": {
          fontSize: "16px",
          fontWeight: "light",
          lineHeight: "150%",
          letterSpacing: "0.03em",
        },
      },
      defaultProps: {
        variant: "normalText",
      },
    },
  },
});

export default theme;

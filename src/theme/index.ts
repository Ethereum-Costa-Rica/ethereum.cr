import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#E93334",
      dark: "#0F2841",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
      },
      sizes: {},
      variants: {
        primary: {
          bg: "red.500",
          color: "white",
        },
      },
      defaultProps: {},
    },
    Text: {
      baseStyle: {
        color: "#0F2841",
        lineHeight: "150%",
      },
      variants: {
        body: {
          fontSize: "20px",
        },
        "main-title": {
          fontSize: "50px",
          fontWeight: 700,
          color: "red.500",
        },
        h1: {
          fontSize: "50px",
          fontWeight: 700,
        },
        h2: {
          fontSize: "36px",
          fontWeight: 700,
        },
        subtitle: {
          fontSize: "16px",
          fontWeight: "semibold",
        },
      },
    },
  },
});

export default theme;

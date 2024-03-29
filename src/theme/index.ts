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
        "main-title-alternative": {
          fontSize: "50px",
          fontWeight: 700,
          color: "#0F2841",
        },
        h1: {
          fontSize: "50px",
          fontWeight: 700,
        },
        h2: {
          fontSize: "36px",
          fontWeight: 700,
        },
        h3: {
          fontSize: "24px",
          fontWeight: 700,
        },
        h4: {
          fontSize: "18px",
          fontWeight: 700,
        },
        subtitle: {
          fontSize: "16px",
          fontWeight: "semibold",
        },
        subtitle2: {
          fontSize: "18px",
          fontWeight: "regular",
        },
        ["card-title"]: {
          fontSize: "3xl",
          fontWeight: 700,
        },
        ["sub-title"]: {
          fontSize: "xl",
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;

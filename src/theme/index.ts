import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {},
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold", // Normally, it is "semibold"
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
      variants: {
        ["main-title"]: {
          fontSize: "50px",
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;

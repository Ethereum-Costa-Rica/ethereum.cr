import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // brand: {
    //   primary: "#E93334",
    //   dark: "#0F2841",
    // },
  },
  components: {
    // Button: {
    //   baseStyle: {
    //     fontWeight: "semibold",
    //   },
    //   sizes: {},
    //   variants: {
    //     primary: {
    //       bg: "red.500",
    //       color: "white",
    //     },
    //   },
    //   defaultProps: {},
    // },
    Text: {
      // baseStyle: {
      //   color: "#0F2841",
      //   lineHeight: "150%",
      // },
      variants: {
        // h1: {
        //   fontSize: "50px",
        //   fontWeight: 700,
        // },
      },
    },
  },
});

export default theme;

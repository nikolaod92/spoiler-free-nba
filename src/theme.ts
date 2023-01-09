import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Karla', sans-serif`
  },
  styles: {
    global: {
      "html, body": {
        bg: "gray.50"
      }
    }
  }
});

export default theme;

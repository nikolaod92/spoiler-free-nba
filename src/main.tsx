import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/karla";
import Navbar from "./components/Navbar";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box h="full">
        <Navbar />
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);

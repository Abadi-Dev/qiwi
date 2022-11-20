import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@tremor/react/dist/esm/tremor.css";
import { ChakraProvider } from "@chakra-ui/react";

function Myapp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}

export default Myapp;

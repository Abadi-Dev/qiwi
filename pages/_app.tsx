import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', 'sans-serif'`,
    body: `'Inter', 'sans-serif'`,
  },
});

function Myapp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}

export default Myapp;

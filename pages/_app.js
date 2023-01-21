import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";
import '@tremor/react/dist/esm/tremor.css';


function MyApp({ Component, pageProps }) {

  const theme = extendTheme({
    colors: {
      brand: {
        900: "#131518",
      },
    },
    fonts: {
      body: {
        1: `'Poppins', sans-serif;`,
      },
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
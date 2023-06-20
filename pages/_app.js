import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";
import '@tremor/react/dist/esm/tremor.css';
import {SessionProvider} from "next-auth/react"


function MyApp({ Component, pageProps,session }) {

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
    <SessionProvider session={session}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
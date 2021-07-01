import '../styles/globals.css'
import { ChakraProvider, extendTheme, VStack } from "@chakra-ui/react"
import Footer from "../components/Footer";

// All Pages

const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: "dark"
    }
});

function MyApp({ Component, pageProps }) {
  return(
      <ChakraProvider theme={theme}>
        <VStack spacing={50}>
            {/*<NavBar />*/}
            <Component {...pageProps} />
            <Footer />
        </VStack>
      </ChakraProvider>
  )
}

export default MyApp

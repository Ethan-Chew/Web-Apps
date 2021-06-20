import '../styles/globals.css'
import { ChakraProvider, extendTheme, VStack } from "@chakra-ui/react"
import Footer from "../components/Footer";
// import NavBar from "../components/NavBar";

const theme = extendTheme({
    config: {
        useSystemColorMode: true,
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

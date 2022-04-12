import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/common/theme'
import '../styles/globals.css';

const colors = {
  styles: {
    global: {
      body: {
        bg: "red",
      }
    },
  }
}

const themeChakra = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themeChakra}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp

import { Box, Container, ThemeProvider } from '@material-ui/core'
import Header from './components/organisms/Header'
import Routes from './Routes'
import theme from './config/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Header />
        <Box padding={1}>
          <Routes />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App

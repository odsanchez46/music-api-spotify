import { createTheme } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe500'
    },
    secondary: {
      main: '#333430'
    },
    common: {
      white: '#EDEEF0'
    },
    error: {
      main: '#DB344B'
    },
    tonalOffset: 0.2
  }
})

export default theme

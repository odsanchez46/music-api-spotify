import { TextField, withStyles } from '@material-ui/core'

const RedInput = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#DB344B'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#DB344B'
    }
  }
})(TextField)

export default RedInput

import { Checkbox, withStyles } from '@material-ui/core'

const RedCheckbox = withStyles({
  root: {
    color: '#DB344B',
    '&$checked': {
      color: '#DB344B'
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />)

export default RedCheckbox

import { NavLink as RouterLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

const ButtonNavLink = (props) => (
  <Button component={RouterLink} {...props} />
)

export default ButtonNavLink

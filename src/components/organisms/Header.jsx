import { AppBar, Box, Hidden, makeStyles, Toolbar, Typography } from '@material-ui/core'
import ButtonNavLink from '../atoms/ButtonNavLink'
import Navigation from '../molecules/Navigation'
import NavigationMobile from '../molecules/NavigationMobile'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const clases = useStyles()
  return (
    < AppBar position="static" >
      <Toolbar>
        <Box className={clases.title} >
          <ButtonNavLink to='/' >
            <Typography variant="h6">
              <Hidden xsDown>
                MusicBySpotify
              </Hidden>
              <Hidden smUp>
                MBSpotify
              </Hidden>
            </Typography>
          </ButtonNavLink>
        </Box>
        <Hidden smDown>
          <Navigation />
        </Hidden>
        <Hidden mdUp>
          <NavigationMobile />
        </Hidden>
      </Toolbar>
    </AppBar >
  )
}

export default Header

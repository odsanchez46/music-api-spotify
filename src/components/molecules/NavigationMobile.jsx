import { IconButton, List, ListItem, SwipeableDrawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useState } from 'react'
import ButtonNavLink from '../atoms/ButtonNavLink'

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openNav = () => {
    setIsOpen(true)
  }

  const closeNav = () => {
    setIsOpen(false)
  }

  const toggleDrawer = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    closeNav()
  }

  return (
    <>
      <IconButton onClick={openNav} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <List onClick={closeNav}>
          <ListItem button key='home'>
            <ButtonNavLink to="/" exact >
              Inicio
            </ButtonNavLink>
          </ListItem>
          <ListItem button key='favoritos'>
            <ButtonNavLink to="/favoritos" exact >
              Favoritos
            </ButtonNavLink>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  )
}

export default NavigationMobile

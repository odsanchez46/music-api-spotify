import { Component } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import Pulse from '../animations/Pulse'
import FavoriteButton from '../atoms/FavoriteButton'

const withBtnFavorite = (type, location) => (WrapperComponent) => {
  class WithBtnFavorite extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isFavorite: this.props.favorites ? !!this.props.favorites.find(f => f === this.props.id) : false
      }

      this.toggleFavorite = this.toggleFavorite.bind(this)
    }

    toggleFavorite(e) {
      e.preventDefault()

      let favorites = localStorage.getItem(type)
      if (favorites) {
        favorites = JSON.parse(favorites)
      } else {
        favorites = []
      }
      if (!this.state.isFavorite) {
        localStorage.setItem(type, JSON.stringify(favorites.concat(this.props.id)))
      } else {
        localStorage.setItem(type, JSON.stringify(favorites.filter(f => f !== this.props.id)))
      }
      this.setState({ isFavorite: !this.state.isFavorite })
    }

    render() {
      return <Box position="relative" >
        <WrapperComponent {...this.props} />
        <Pulse>
          <Box position="absolute" {...location} title={this.state.isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'} >
            <FavoriteButton isFavorite={this.state.isFavorite} onClick={this.toggleFavorite} />
          </Box>
        </Pulse>
      </Box>
    }
  }

  WithBtnFavorite.propTypes = {
    id: PropTypes.string.isRequired,
    favorites: PropTypes.array
  }

  return WithBtnFavorite
}

export default withBtnFavorite

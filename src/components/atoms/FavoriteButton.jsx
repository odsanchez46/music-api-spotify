import { Fab } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  btnFav: {
    backgroundColor: '#fff',
    border: '.1rem solid #EDEEF0'
  }
}))

const FavoriteButton = ({ onClick, isFavorite }) => {
  const classes = useStyles()

  return (
    <Fab className={classes.btnFav} size="small" onClick={onClick} aria-label="like">
      <FavoriteIcon color={isFavorite ? 'error' : 'disabled'} fontSize="small" />
    </Fab>
  )
}

FavoriteButton.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool
}

export default FavoriteButton

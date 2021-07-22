import PropTypes from 'prop-types'
import { Chip } from '@material-ui/core'

const Genres = ({ genres, ...attr }) => (
  <>
    {
      genres.map(genre => (
        <Chip key={genre} label={genre} {...attr} />
      ))
    }
  </>
)

Genres.propTypes = {
  genres: PropTypes.array
}

export default Genres

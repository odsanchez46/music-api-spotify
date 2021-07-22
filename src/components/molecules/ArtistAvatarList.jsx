import { makeStyles } from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import PropTypes from 'prop-types'
import ArtistAvatar from '../atoms/ArtistAvatar'

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: theme.palette.error.main,
    padding: '.2rem',
    marginRight: '.2rem'
  }
}))

const ArtistAvatarList = ({ max, artists }) => {
  const styles = useStyles()
  return (
    <AvatarGroup max={max}>
      {
        artists.map(artist => (
          <ArtistAvatar className={styles.small} key={artist.id} id={artist.id} name={artist.name} ></ArtistAvatar>
        ))
      }
    </AvatarGroup>
  )
}

ArtistAvatarList.propTypes = {
  max: PropTypes.number,
  artists: PropTypes.array
}

export default ArtistAvatarList

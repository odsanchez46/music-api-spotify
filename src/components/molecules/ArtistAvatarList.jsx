import AvatarGroup from '@material-ui/lab/AvatarGroup'
import { PropTypes } from 'prop-types'
import ArtistAvatar from '../atoms/ArtistAvatar'

const ArtistAvatarList = ({ max, artists }) => (
  <AvatarGroup max={max}>
    {
      artists.map(artist => (
        <ArtistAvatar key={artist.id} id={artist.id} name={artist.name} ></ArtistAvatar>
      ))
    }
  </AvatarGroup>
)

ArtistAvatarList.propTypes = {
  max: PropTypes.number,
  artists: PropTypes.array
}

export default ArtistAvatarList

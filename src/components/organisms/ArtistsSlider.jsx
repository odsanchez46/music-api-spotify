import { PropTypes } from 'prop-types'
import ArtistCard from '../molecules/ArtistCard'
import CustomSlider from '../molecules/CustomSlider'

const ArtistsSlider = ({ artists }) => (
  <>
    <h1>Artistas</h1>
    <CustomSlider>
      {
        artists.items.map(artist => (
          <div key={artist.id}>
            <ArtistCard {...artist} ></ArtistCard>
          </div>
        ))
      }
    </CustomSlider>
  </>
)

ArtistsSlider.propTypes = {
  artists: PropTypes.object
}

export default ArtistsSlider

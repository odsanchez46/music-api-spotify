import PropTypes from 'prop-types'
import ArtistCard from '../molecules/ArtistCard'
import CustomSlider from '../molecules/CustomSlider'

const ArtistsSlider = ({ artists }) => {
  const artistFavorites = JSON.parse(localStorage.getItem('artists'))
  return (
    <>
      <h1>Artistas</h1>
      <CustomSlider length={artists.length} >
        {
          artists.map(artist => (
            <div key={artist.id}>
              <ArtistCard {...artist} favorites={artistFavorites} ></ArtistCard>
            </div>
          ))
        }
      </CustomSlider>
    </>
  )
}

ArtistsSlider.propTypes = {
  artists: PropTypes.array
}

export default ArtistsSlider

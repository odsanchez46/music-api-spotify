import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import ArtistCard from '../molecules/ArtistCard'
import CustomSlider from '../molecules/CustomSlider'

const ArtistsSlider = ({ artists }) => {
  const artistFavorites = JSON.parse(localStorage.getItem('artists'))
  return (
    <>
      <Box paddingTop="1.5rem" paddingLeft=".3rem">
        <Typography variant="h4" component="h2">
          Artistas
        </Typography>
      </Box>
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

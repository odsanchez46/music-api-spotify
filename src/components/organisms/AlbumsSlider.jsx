import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import AlbumCard from '../molecules/AlbumCard'
import CustomSlider from '../molecules/CustomSlider'

const AlbumsSlider = ({ albums }) => {
  const albumsFavorites = JSON.parse(localStorage.getItem('albums'))
  return (
    <>
      <Box paddingTop="1.5rem" paddingLeft=".3rem">
        <Typography variant="h4" component="h2">
          Álbumes
        </Typography>
      </Box>
      <CustomSlider length={albums.length} >
        {
          albums.map(album => (
            <div key={album.id}>
              <AlbumCard {...album} favorites={albumsFavorites} ></AlbumCard>
            </div>
          ))
        }
      </CustomSlider>
    </>
  )
}

AlbumsSlider.propTypes = {
  albums: PropTypes.array
}

AlbumsSlider.defaultProps = {
  albums: {}
}

export default AlbumsSlider

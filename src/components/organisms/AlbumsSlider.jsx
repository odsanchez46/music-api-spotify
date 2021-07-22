import PropTypes from 'prop-types'
import AlbumCard from '../molecules/AlbumCard'
import CustomSlider from '../molecules/CustomSlider'

const AlbumsSlider = ({ albums }) => {
  const albumsFavorites = JSON.parse(localStorage.getItem('albums'))
  return (
    <>
      <h1>Álbumes</h1>
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

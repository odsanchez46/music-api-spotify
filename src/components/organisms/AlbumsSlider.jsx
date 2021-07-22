import { PropTypes } from 'prop-types'
import AlbumCard from '../molecules/AlbumCard'
import CustomSlider from '../molecules/CustomSlider'

const AlbumsSlider = ({ albums }) => {
  return (
    <>
      <h1>Albums</h1>
      <CustomSlider>
        {
          albums.items.map(album => (
            <div key={album.id}>
              <AlbumCard {...album} ></AlbumCard>
            </div>
          ))
        }
      </CustomSlider>
    </>
  )
}

AlbumsSlider.propTypes = {
  albums: PropTypes.object
}

AlbumsSlider.defaultProps = {
  albums: {}
}

export default AlbumsSlider

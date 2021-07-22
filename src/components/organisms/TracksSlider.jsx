import PropTypes from 'prop-types'
import CustomSlider from '../molecules/CustomSlider'
import TrackCard from '../molecules/TrackCard'

const sliderConfig = {
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const TracksSlider = ({ tracks }) => {
  const tracksFavorites = JSON.parse(localStorage.getItem('tracks'))

  return (
    <>
      <h1>Canciones</h1>
      <CustomSlider length={tracks.length} config={sliderConfig} >
        {
          tracks.map(track => (
            <div key={track.id}>
              <TrackCard {...track} favorites={tracksFavorites} ></TrackCard>
            </div>
          ))
        }
      </CustomSlider>
    </>
  )
}

TracksSlider.propTypes = {
  tracks: PropTypes.array
}

export default TracksSlider

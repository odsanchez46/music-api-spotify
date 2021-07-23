import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import CustomSlider from '../molecules/CustomSlider'
import TrackCard from '../molecules/TrackCard'

const getMin = (numUno, numDos) => {
  if (numUno < numDos) {
    return numUno
  }
  return numDos
}

const TracksSlider = ({ tracks }) => {
  const tracksFavorites = JSON.parse(localStorage.getItem('tracks'))

  const length = tracks.length

  const sliderConfig = {
    slidesToShow: getMin(3, length),
    slidesToScroll: getMin(3, length),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: getMin(2, length),
          slidesToScroll: getMin(2, length)
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

  return (
    <>
      <Box paddingTop="1.5rem" paddingLeft=".3rem">
        <Typography variant="h4" component="h2">
          Canciones
        </Typography>
        </Box>
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

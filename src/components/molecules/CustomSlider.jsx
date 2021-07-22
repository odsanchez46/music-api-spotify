import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import sliderSettings from '../../config/sliderSettings'
import { Button } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

const getMin = (numUno, numDos) => {
  if (numUno < numDos) {
    return numUno
  }
  return numDos
}

const CustomSlider = ({ children, config, length }) => {
  const responsive = {
    slidesToShow: getMin(5, length),
    slidesToScroll: getMin(5, length),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: getMin(3, length),
          slidesToScroll: getMin(3, length)
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: getMin(2, length),
          slidesToScroll: getMin(2, length)
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const sliderConfig = Object.assign({}, sliderSettings, responsive, config)
  const slider = useRef(null)

  const nextSlider = () => {
    slider.current.slickNext()
  }

  const prevSlider = () => {
    slider.current.slickPrev()
  }

  return (
    <>
      <Slider ref={slider} {...sliderConfig} >
        {
          children
        }
      </Slider>
      <Button size="small" onClick={prevSlider}>
        <KeyboardArrowLeft />
        Anterior
      </Button>
      <Button size="small" onClick={nextSlider}>
        Siguiente
        <KeyboardArrowRight />
      </Button>
    </>
  )
}

CustomSlider.propTypes = {
  children: PropTypes.node,
  config: PropTypes.object,
  length: PropTypes.number
}

export default CustomSlider

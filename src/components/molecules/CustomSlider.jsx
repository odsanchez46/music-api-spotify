import Slider from 'react-slick'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import sliderResponsive from '../../config/sliderResponsive'
import { Button } from '@material-ui/core'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

const CustomSlider = ({ children, config }) => {
  const sliderConfig = Object.assign({}, sliderResponsive, config)
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
  config: PropTypes.object
}

export default CustomSlider

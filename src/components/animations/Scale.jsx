import { useSpring, animated } from '@react-spring/web'
import PropTypes from 'prop-types'

const Scale = ({ children }) => {
  const { x } = useSpring({
    leave: { height: 0, opacity: 0 },
    from: { height: 0, opacity: 0 },
    config: { duration: 1000 }
  })

  return (
    <animated.div
      style={{
        scale: x
      }}>
      {children}
    </animated.div>
  )
}

Scale.propTypes = {
  children: PropTypes.node
}

export default Scale

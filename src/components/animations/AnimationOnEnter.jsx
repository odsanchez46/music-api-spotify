import { useTransition, animated } from '@react-spring/web'
import PropTypes from 'prop-types'

const AnimationOnEnter = ({ children }) => {
  const transitions = useTransition(children, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  })

  return transitions(
    (styles, item) => item && <animated.div style={styles}>
      {children}
    </animated.div>
  )
}

AnimationOnEnter.propTypes = {
  nodes: PropTypes.array
}

export default AnimationOnEnter

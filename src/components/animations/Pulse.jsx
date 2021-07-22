import { Box } from '@material-ui/core'
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Pluse = ({ children }) => {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  })

  return (
    <Box onClick={() => toggle(!state)}>
      <animated.div
        style={{
          scale: x.to({
            range: [0, 0.4, 0.5, 0.6, 1],
            output: [1, 0.8, 0.9, 0.8, 1]
          })
        }}>
        {children}
      </animated.div>
    </Box>
  )
}

Pluse.propTypes = {
  children: PropTypes.node
}

export default Pluse

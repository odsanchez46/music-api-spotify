import { Card, CardActionArea, CardMedia, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import notFound from '../../assets/not_found.jpg'
import withBtnFavorite from '../HOC/withBtnFavorite'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '.2rem'
  },
  card: {
    position: 'relative'
  },
  title: {
    fontSize: '.8rem',
    padding: '.5rem',
    borderRadius: '.5rem',
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content'
  },
  content: {
    top: 0,
    bottom: 0,
    margin: 'auto',
    position: 'absolute',
    padding: '0 .2rem',
    left: 0,
    right: 0,
    textAlign: 'center',
    backgroundColor: theme.palette.common.white
  }
})
)

const AlbumCard = ({ id, images, name, total_tracks: totalTracks, spotify, release_date: releaseDate }) => {
  const classes = useStyles()
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  let image = notFound

  if (images && images.length > 0) {
    image = images[0].url
  }

  return (
    <Card className={classes.root} onClick={() => set(state => !state)}>
      <CardActionArea className={classes.card}>
        <a.div
          style={{ opacity: opacity.to(o => 1 - o), transform }}
        >  <CardMedia
            component="img"
            alt={name}
            height="140"
            image={image}
            title={name}
          /> </a.div>
        <a.div
          className={classes.content}
          style={{
            opacity,
            transform,
            rotateX: '180deg'
          }}
        >
          <Typography className={classes.title} gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
        </a.div>

      </CardActionArea>
    </Card>
  )
}

AlbumCard.propTypes = {
  id: PropTypes.string,
  images: PropTypes.array,
  name: PropTypes.string,
  total_tracks: PropTypes.number,
  spotify: PropTypes.string,
  release_date: PropTypes.string
}

export default withBtnFavorite('albums', { zIndex: 1, right: '.4rem', top: '.3rem' })(AlbumCard)

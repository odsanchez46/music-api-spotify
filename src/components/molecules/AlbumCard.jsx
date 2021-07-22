import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import notFound from '../../assets/not_found.jpg'
import withBtnFavorite from '../HOC/withBtnFavorite'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '.2rem'
  },
  card: {
    position: 'relative',
    '&:not(:hover) .MuiCardContent-root': {
      display: 'none'
    }
  },
  title: {
    fontSize: '.8rem',
    backgroundColor: theme.palette.common.white,
    padding: '.3rem',
    borderRadius: '.5rem'
  },
  content: {
    bottom: 0,
    position: 'absolute',
    padding: '0 .2rem',
    left: 0,
    right: 0,
    textAlign: 'center'
  }
})
)

const AlbumCard = ({ id, images, name, total_tracks: totalTracks, spotify, release_date: releaseDate }) => {
  const classes = useStyles()

  let image = notFound

  if (images && images.length > 0) {
    image = images[0].url
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.card}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image}
          title={name}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
        </CardContent>
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

export default withBtnFavorite('albums', { right: '.4rem', top: '.3rem' })(AlbumCard)

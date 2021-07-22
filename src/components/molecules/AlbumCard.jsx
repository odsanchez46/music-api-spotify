import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { PropTypes } from 'prop-types'
// import FavoriteIcon from '@material-ui/icons/Favorite'

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

const AlbumCard = ({ images, name, total_tracks: totalTracks, spotify, release_date: releaseDate }) => {
  const classes = useStyles()
  // const addFavorite = () => {
  //   console.log('add favorite')
  // }
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.card}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={images[0].url}
          title={name}
        />
        <CardContent className={classes.content}>
          {/* <Fab size="small" color="secondary" action={addFavorite} aria-label="like">
            <FavoriteIcon />
          </Fab> */}
          <Typography className={classes.title} gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

AlbumCard.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
  total_tracks: PropTypes.number,
  spotify: PropTypes.string,
  release_date: PropTypes.string
}

export default AlbumCard

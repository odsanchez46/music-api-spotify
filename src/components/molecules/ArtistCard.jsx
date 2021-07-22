import { Box, Card, CardHeader, CardMedia, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import notFound from '../../assets/not_found.jpg'
import withBtnFavorite from '../HOC/withBtnFavorite'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '.2rem'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  header: {
    '& .MuiCardHeader-content': {
      maxWidth: '100%'
    }
  },
  headerTitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: '100%',
    fontSize: '1.1rem'
  }
}))

const ArtistCard = ({ images, name, popularity, followers, genres }) => {
  const classes = useStyles()
  let image = notFound

  if (images.length > 0) {
    image = images[0].url
  }

  return (
    <Card variant="outlined" square className={classes.root}>
      <CardHeader
        className={classes.header}
        title={
          <Box title={name} className={classes.headerTitle} >
            {name}
          </Box>
        }
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
    </Card>
  )
}

ArtistCard.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
  popularity: PropTypes.number,
  followers: PropTypes.object,
  genres: PropTypes.array
}

export default withBtnFavorite('artists', { right: '.4rem', bottom: '.3rem' })(ArtistCard)

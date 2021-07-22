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
// {
//   "external_urls": {
//       "spotify": "https://open.spotify.com/artist/6F3vLfyutkUhpM50G84eMt"
//   },
//   "followers": {
//       "href": null,
//       "total": 31393
//   },
//   "genres": [
//       "deep groove house",
//       "house",
//       "scottish rock"
//   ],
//   "href": "https://api.spotify.com/v1/artists/6F3vLfyutkUhpM50G84eMt",
//   "id": "6F3vLfyutkUhpM50G84eMt",
//   "images": [
//       {
//           "height": 640,
//           "url": "https://i.scdn.co/image/ab6761610000e5eb129c3490edac16cbc82b6342",
//           "width": 640
//       },
//       {
//           "height": 320,
//           "url": "https://i.scdn.co/image/ab67616100005174129c3490edac16cbc82b6342",
//           "width": 320
//       },
//       {
//           "height": 160,
//           "url": "https://i.scdn.co/image/ab6761610000f178129c3490edac16cbc82b6342",
//           "width": 160
//       }
//   ],
//   "name": "Endor",
//   "popularity": 65,
//   "type": "artist",
//   "uri": "spotify:artist:6F3vLfyutkUhpM50G84eMt"
// }

ArtistCard.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
  popularity: PropTypes.number,
  followers: PropTypes.object,
  genres: PropTypes.array
}

export default withBtnFavorite('artists', { right: '.4rem', bottom: '.3rem' })(ArtistCard)

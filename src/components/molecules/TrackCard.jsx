import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'

import PropTypes from 'prop-types'

import notFound from '../../assets/not_found.jpg'
import withBtnFavorite from '../HOC/withBtnFavorite'
import ArtistAvatarList from './ArtistAvatarList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '.2rem',
    backgroundColor: '#EDEEF0'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'calc(100% - 120px)'
  },
  content: {
    flex: '1 0 auto',
    maxWidth: '100%',

    '& *': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  cover: {
    width: 120
  },
  artist: {
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}))

const TrackCard = ({ album, artists, duration_ms: durationMs, explicit, name, popularity, track_number: trackNumber }) => {
  const classes = useStyles()

  let albumImage = notFound

  if (album.images.length > 0) {
    albumImage = album.images[0].url
  }

  return (
    <Card variant='outlined' className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={albumImage}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography title={name} component="h5" variant="subtitle1">
            {name}
          </Typography>
          <Typography title={album.name} variant="subtitle2" color="textSecondary">
            {album.name}
          </Typography>
        </CardContent>
        <div className={classes.artist}>
          <ArtistAvatarList max={4} artists={artists} ></ArtistAvatarList>
        </div>
      </div>
    </Card>
  )
}

TrackCard.propTypes = {
  album: PropTypes.object,
  artists: PropTypes.array,
  duration_ms: PropTypes.number,
  explicit: PropTypes.bool,
  name: PropTypes.string,
  popularity: PropTypes.number,
  track_number: PropTypes.number
}

TrackCard.defaultProps = {
  album: {},
  artists: [],
  duration_ms: 0,
  explicit: false,
  name: 'Sin nombre',
  popularity: 0,
  track_number: 1
}

export default withBtnFavorite('tracks', { right: '.6rem', bottom: '.6rem' })(TrackCard)

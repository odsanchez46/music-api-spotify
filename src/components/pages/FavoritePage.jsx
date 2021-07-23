import { Box } from '@material-ui/core'
import { useState, useEffect } from 'react'
import useApi from '../custom-hooks/useApi'
import AlbumsSlider from '../organisms/AlbumsSlider'
import ArtistsSlider from '../organisms/ArtistsSlider'
import TracksSlider from '../organisms/TracksSlider'

const FavoritePage = () => {
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const idArtists = JSON.parse(localStorage.getItem('artists')) || []
    const idAlbums = JSON.parse(localStorage.getItem('albums')) || []
    const idTracks = JSON.parse(localStorage.getItem('tracks')) || []

    setAlbums([])
    setArtists([])
    setTracks([])

    useApi('/v1/artists', {
      ids: idArtists
    }).then(response => {
      setArtists(response.data.artists)
    })

    useApi('/v1/albums', {
      ids: idAlbums
    }).then(response => {
      setAlbums(response.data.albums)
    })

    useApi('/v1/tracks', {
      ids: idTracks
    }).then(response => {
      setTracks(response.data.tracks)
    })
  }, [])

  return (
    <>
      {
        tracks.length > 0 && <Box>
          <TracksSlider tracks={tracks}></TracksSlider>
        </Box>
      }
      {artists.length > 0 && <Box>
        <ArtistsSlider artists={artists}></ArtistsSlider>
      </Box>}
      {albums.length > 0 && <Box>
        <AlbumsSlider albums={albums}></AlbumsSlider>
      </Box>}
    </>
  )
}

export default FavoritePage

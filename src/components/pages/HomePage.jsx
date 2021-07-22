import { useEffect, useState, lazy } from 'react'
import { Box } from '@material-ui/core'
import Search from '../atoms/Search'
import useApi from '../custom-hooks/useApi'

const AlbumsSlider = lazy(() => import('../organisms/AlbumsSlider'))
const TracksSlider = lazy(() => import('../organisms/TracksSlider'))
const ArtistsSlider = lazy(() => import('../organisms/ArtistsSlider'))

const HomePage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const query = JSON.parse(window.localStorage.getItem('query'))
    if (query) {
      setData(query)
    } else {
      newSearch({
        q: 'end',
        type: [
          'artist',
          'album',
          'track'
        ]
      })
    }
  }, [])

  const newSearch = data => {
    const promise = useApi('/v1/search', data)
    promise.then(response => {
      setData(response.data)
      window.localStorage.setItem('query', JSON.stringify(response.data))
    })
  }

  return (
    <>
      <Search onChange={newSearch} ></Search>
      {
        data !== null
          ? <>
            {data.albums && <Box>
              <AlbumsSlider albums={data.albums.items}></AlbumsSlider>
            </Box>}
            {data.artists && <Box>
              <ArtistsSlider artists={data.artists.items}></ArtistsSlider>
            </Box>}
            {
              data.tracks && <Box>
                <TracksSlider tracks={data.tracks.items}></TracksSlider>
              </Box>
            }
          </>
          : <h1>Error al conectarse a la api</h1>
      }

    </>
  )
}

export default HomePage

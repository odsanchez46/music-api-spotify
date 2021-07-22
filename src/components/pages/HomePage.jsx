import { Box } from '@material-ui/core'
import { useState, lazy } from 'react'
import Search from '../atoms/Search'
import useApi from '../custom-hooks/useApi'

const AlbumsSlider = lazy(() => import('../organisms/AlbumsSlider'))
const TracksSlider = lazy(() => import('../organisms/TracksSlider'))
const ArtistsSlider = lazy(() => import('../organisms/ArtistsSlider'))

const HomePage = () => {
  const [data, setData] = useState(JSON.parse(window.localStorage.getItem('query')))
  const newSearch = data => {
    const promise = useApi('/v1/search', data)
    promise.then(response => {
      console.log(response.data)
      setData(response.data)
    })
  }

  return (
    <>
      <Search onChange={newSearch} ></Search>
      {
        data !== null
          ? <>
              <Box>
                <AlbumsSlider albums={data.albums}></AlbumsSlider>
              </Box>
              <Box>
                <ArtistsSlider artists={data.artists}></ArtistsSlider>
              </Box>
              <Box>
                <TracksSlider tracks={data.tracks}></TracksSlider>
              </Box>
            </>
          : <h1>Error al conectarse a la api</h1>
      }

    </>
  )
}

export default HomePage

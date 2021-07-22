import { useEffect, useState, lazy } from 'react'
import Search from '../atoms/Search'
import useApi from '../custom-hooks/useApi'
import AnimationOnEnter from '../animations/AnimationOnEnter'

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
            {
              data.tracks && <AnimationOnEnter>
                <TracksSlider tracks={data.tracks.items}></TracksSlider>
              </AnimationOnEnter>
            }
            {data.artists && <AnimationOnEnter>
              <ArtistsSlider artists={data.artists.items}></ArtistsSlider>
            </AnimationOnEnter>}
            {data.albums && <AnimationOnEnter>
              <AlbumsSlider albums={data.albums.items}></AlbumsSlider>
            </AnimationOnEnter>}
          </>
          : <h1>Error al conectarse a la api</h1>
      }
    </>
  )
}

export default HomePage

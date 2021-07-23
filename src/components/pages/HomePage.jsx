import { useEffect, useState, lazy } from 'react'
import Search from '../atoms/Search'
import useApi from '../custom-hooks/useApi'
import AnimationOnEnter from '../animations/AnimationOnEnter'
import TokenSpotify from '../organisms/TokenSpotify'

const AlbumsSlider = lazy(() => import('../organisms/AlbumsSlider'))
const TracksSlider = lazy(() => import('../organisms/TracksSlider'))
const ArtistsSlider = lazy(() => import('../organisms/ArtistsSlider'))

const HomePage = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    newSearch({
      q: 'end',
      type: [
        'artist',
        'album',
        'track'
      ]
    })
  }, [])

  const newSearch = (data, apiKey = null) => {
    const promise = useApi('/v1/search', data, apiKey)
    promise.then(response => {
      setData(response.data)
      window.localStorage.setItem('query', JSON.stringify(response.data))
    }).catch(err => {
      console.log(err)
      setData(null)
    })
  }

  const updateKey = (updateKey) => {
    newSearch({
      q: 'end',
      type: [
        'artist',
        'album',
        'track'
      ]
    }, updateKey)
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
          : <TokenSpotify onChange={updateKey} />
      }
    </>
  )
}

export default HomePage

import axios from 'axios'

const API_KEY_SPOTIFY = 'API_KEY_SPOTIFY'

const getParams = data => {
  let paramsURl = '?'
  Object.keys(data).forEach(key => {
    paramsURl += `${key}=${encodeURIComponent(data[key])}&`
  })

  return paramsURl
}

function useApi(url, data = null, newApiKey = null) {
  if (url.indexOf('http') !== 0 && data) {
    url = url + getParams(data)
  }
  if (newApiKey) {
    window.localStorage.setItem(API_KEY_SPOTIFY, newApiKey)
  }
  const apiKey = newApiKey || window.localStorage.getItem(API_KEY_SPOTIFY)
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey || process.env.REACT_APP_API_KEY_SPOTIFY}`
    }
  }

  return axios.get(`${process.env.REACT_APP_API_URL}${url}`, config)
}

export default useApi

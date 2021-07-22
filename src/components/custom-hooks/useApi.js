import axios from 'axios'

const getKey = (text) => {
  return window.btoa(text)
}

const getParams = data => {
  let paramsURl = '?'
  Object.keys(data).forEach(key => {
    paramsURl += `${key}=${encodeURIComponent(data[key])}&`
  })

  return paramsURl
}

function useApi(url, data = null) {
  if (url.indexOf('http') !== 0 && data) {
    url = url + getParams(data)
  }
  const key = getKey(url)

  const apiKey = window.localStorage.getItem(key)
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey || process.env.REACT_APP_API_KEY_SPOTIFY}`
    }
  }

  return axios.get(`${process.env.REACT_APP_API_URL}${url}`, config)
}

export default useApi

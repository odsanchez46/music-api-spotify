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

async function useApi(url, data = null, getLocal = false) {
  if (url.indexOf('http') !== 0 && data) {
    url = url + getParams(data)
  }
  const key = getKey(url)

  if (getLocal) {
    const dataStorage = window.localStorage.getItem(key)

    if (dataStorage) {
      return JSON.parse(dataStorage)
    }
  }

  const apiKey = window.localStorage.getItem(key)
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey || process.env.REACT_APP_API_KEY_SPOTIFY}`
    }
  }

  const response = await axios.get(`${process.env.REACT_APP_API_URL}${url}`, config)
  return response
}

export default useApi

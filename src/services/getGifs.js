import { API_KEY, API_URL } from "./settings"

const fromAppResponse = apiResponse => {
  const { data = [] } = apiResponse
  if(Array.isArray(data)) {
    const gifs = data.map(image => {
      const { title, id } = image
      const url  = image.images.downsized_medium.url
      return { title, id, url }
    })
    return gifs
  }
  return []
  
}

export default function getGifs({limit = 15, keyword, page = 0} = {}){
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

    return fetch(apiURL)
          .then(res => res.json())
          .then(fromAppResponse)
}
const url = `https://api.nasa.gov/planetary`
const params = `?api_key=${process.env.REACT_APP_NASA_API_KEY}`
// const url = `?api_key${process.env.REACT_APP_NASA_API_KEY}`

export interface NasaResponse {
  copyright: string
  date: Date
  explanation: string;
  hdurl: string
  media_type: string
  title: string
  url: string
}

class NasaApiService {
  async getPictureOfTheDay (): Promise<NasaResponse> {
    const data = await fetch(`${url}/apod${params}`)
    return data.json()
  }
}

export default new NasaApiService()
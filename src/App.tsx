import React, { useEffect } from 'react';
import nasaApiService from './utils/api/nasa-api.service';
import { setWallpaperByUrl } from './utils/helpers/file'

function App() {
  useEffect(() => {
    const fetchImage = async () => {
      const res = await nasaApiService.getPictureOfTheDay();
      // setWallpaper()
      setWallpaperByUrl(res.hdurl)
      console.log(res)
    }
    fetchImage()
  }, [])

  return (
    <main>
      <div className='text-center'>
        Nasa wallpaper
      </div>
    </main>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { BsFillSunFill } from 'react-icons/bs'


const api = {
  key: '2639407e6d56db995f2f25b01749e9e2',
  baseUrl: 'https://api.openweathermap.org/data/2.5/'
}







function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setQuery('')
          console.log(result);
        })
    }
  }
  const dateBuilder = (s) => {
    let months = [
      'Yanvar',
      'Fevral',
      'Mart',
      'Aprel',
      'May',
      'Iyun',
      'Iyul',
      'Yanvar',
      'Avgust',
      'Sentabr',
      'Oktyabr',
      'Noyabr',
      'Dekabr',
    ]

    let days = [
      'Dushanba',
      'Seshanba',
      'Chorshanba',
      'Payshanba',
      'Juma',
      'Shanba',
      'Yakshanba',
    ]

    let day = days[s.getDay()]
    let getdate = s.getDate()
    let month = months[s.getMonth()]
    let year = s.getFullYear()

    return `${day} ${getdate} ${month} ${year}`
  }

  return (
    <>
      <div className={
        (typeof weather.main != 'undefined') ? ((weather.main.temp > '16') ? 'App' : 'App cloud')
          : 'App'
      }>



        <main className={
          (typeof weather.main != 'undefined') ? ((weather.main.temp > '16') ? 'main' : 'main main_blue')
          : 'main'
        }>

          <div className="search_box">
            <input
              className="search_bar"
              placeholder='Qidirish...'
              type='search'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>

          {typeof weather.main != 'undefined'
            ? (
              <div className="location_box">
                <div className="date">{dateBuilder(new Date())}</div>
                <div className="location">{weather.name}, {weather.sys.country}</div>

                <div className="weather_box">
                  <div className="temp">{Math.round(weather.main.temp)}*c</div>
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
              </div>
            )
            : (

              <h1 className='location_box'>Siz manzil qo'shishingiz kerak</h1>

            )
          }









          {/* <AiFillCloud />
      <BsFillCloudRainFill />
      <BsFillCloudRainHeavyFill/>
      <BsFillCloudSnowFill />
      <BsFillCloudSunFill />
      <BsFillSunFill/> */}
        </main>
      </div>

    </>
  );
}

export default App;

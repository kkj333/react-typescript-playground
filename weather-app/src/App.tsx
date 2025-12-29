import { useState } from 'react'
import './App.css'
import { searchWeather } from './mockData'
import type { Weather } from './types'

function App() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSearch = () => {
    if (input.trim() === '') {
      setError('都市名を入力してください')
      setWeather(null)
      return
    }

    const result = searchWeather(input)
    if (result) {
      setWeather(result)
      setError('')
    } else {
      setWeather(null)
      setError(`「${input}」は見つかりませんでした`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const suggestedCities = ['Tokyo', 'London', 'New York', 'Paris', 'Sydney']

  return (
    <div className="app">
      <h1>🌤️ 天気アプリ</h1>

      <div className="search-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="都市名を入力..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          検索
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {weather ? (
        <div className="weather-card">
          <div className="weather-icon">{weather.icon}</div>
          <h2 className="city-name">{weather.city}</h2>
          <div className="temperature">{weather.temperature}°C</div>
          <p className="condition">{weather.condition}</p>

          <div className="weather-details">
            <div className="detail-item">
              <span className="label">湿度</span>
              <span className="value">{weather.humidity}%</span>
            </div>
            <div className="detail-item">
              <span className="label">風速</span>
              <span className="value">{weather.windSpeed} m/s</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="suggestions">
          <p className="suggestion-title">以下の都市から検索できます</p>
          <div className="city-buttons">
            {suggestedCities.map(city => (
              <button
                key={city}
                className="city-button"
                onClick={() => {
                  const result = searchWeather(city)
                  if (result) {
                    setWeather(result)
                    setError('')
                  } else {
                    setWeather(null)
                    setError(`「${city}」は見つかりませんでした`)
                  }
                }}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App

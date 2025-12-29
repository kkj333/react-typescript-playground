interface Weather {
  city: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  icon: string
}

export const mockWeatherData: Record<string, Weather> = {
  tokyo: {
    city: 'Tokyo',
    temperature: 15,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 3.5,
    icon: '🌤️',
  },
  london: {
    city: 'London',
    temperature: 8,
    condition: 'Rainy',
    humidity: 82,
    windSpeed: 5.2,
    icon: '🌧️',
  },
  newyork: {
    city: 'New York',
    temperature: 12,
    condition: 'Cloudy',
    humidity: 70,
    windSpeed: 4.1,
    icon: '☁️',
  },
  paris: {
    city: 'Paris',
    temperature: 10,
    condition: 'Sunny',
    humidity: 55,
    windSpeed: 2.8,
    icon: '☀️',
  },
  sydney: {
    city: 'Sydney',
    temperature: 28,
    condition: 'Clear',
    humidity: 45,
    windSpeed: 2.3,
    icon: '☀️',
  },
}

export const searchWeather = (cityName: string): Weather | null => {
  const key = cityName.toLowerCase().replace(/\s+/g, '')
  return mockWeatherData[key] || null
}

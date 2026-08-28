# Weather API (React + Redux Toolkit)

A weather application that lets users search and view the current weather for any city, built with React and Redux Toolkit for state management.

## 🛠️ Tech Stack
- React
- Redux Toolkit (`createSlice`, `createAsyncThunk`)
- [WeatherAPI.com](https://www.weatherapi.com/) for live weather data

## 📦 Setup Instructions

1. Get a free API key from [WeatherAPI.com](https://www.weatherapi.com/signup.aspx)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and add your key:
   ```
   VITE_WEATHER_API_KEY=your_weatherapi_com_key_here
   ```
4. Run the app:
   ```bash
   npm run dev
   ```

## 🌟 Features
- Search current weather by city name
- Displays temperature, condition, humidity, and wind speed
- Global state managed with Redux Toolkit's async thunks

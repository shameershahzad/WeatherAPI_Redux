import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { fetchData } from "./ApiSlice/weather_Slice";

function App() {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherApi.data);

  const getData = () => {
    dispatch(fetchData(data));
  };

  return (
    <>
      <h1 style={{
        color: "white",
        fontSize: "50px",
        textAlign: "center",
        marginTop: "20px"
      }}>
        Weather
      </h1>

      <div style={{
        height: "450px",
        width: "450px",
        backgroundColor: "rgba(85, 148, 231, 0.932)",
        borderRadius: "20px",
        margin: "40px auto",
        padding: "20px",
        boxSizing: "border-box"
      }}>
        {/* Input and Search */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <input
            value={data}
            type="text"
            onChange={(e) => setData(e.target.value)}
            placeholder="Enter city name"
            style={{
              height: "35px",
              padding: "5px 10px",
              border: "2px solid white",
              outline: "none",
              borderRadius: "10px",
              fontSize: "16px"
            }}
          />
          <button
            onClick={getData}
            
          >
            Search
          </button>
        </div>

        {/* Weather Card */}
        {weatherData?.current && (
          <div style={{ marginTop: "30px", textAlign: "center", color: "white" }}>
            <img
              src={`https:${weatherData.current.condition.icon}`}
              alt={weatherData.current.condition.text}
              style={{ width: "100px", height: "100px" }}
            />
            <div style={{ fontSize: "28px", marginTop: "10px" }}>
              {weatherData.current.condition.text}
            </div>
            <div style={{ fontSize: "40px", marginTop: "10px" }}>
              {weatherData.current.temp_c}°C
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
              fontSize: "20px"
            }}>
              <div>Humidity: {weatherData.current.humidity}%</div>
              <div>Wind: {weatherData.current.wind_mph} mph</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

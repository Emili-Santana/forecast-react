import './App.css';
import 'bootstrap/dist/css/bootstrap.css';//installed bootstrap
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Porto"/>


    </div>
    <footer>
<p>This project was coded by  <a href="https://github.com/Emili-Santana/react-weather-app-main" target="_blank" rel="noreferrer">Emili Santana</a> and is open-sourced on <a href="https://github.com/Emili-Santana/Weather-Forecast-App" target="_blank" rel="noreferrer">Github</a> and hosted on <a href="https://new-weather-forecast-react.netlify.app/" target="_blank" rel="noreferrer"> Netlify </a>
</p>
</footer>
    </div>
    
  );
}

export default App;
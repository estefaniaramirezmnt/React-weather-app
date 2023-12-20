import "bootstrap/dist/css/bootstrap.css";
import "./style/App.css";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Weather />
        <Forecast />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;

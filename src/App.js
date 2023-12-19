import "bootstrap/dist/css/bootstrap.css";
import "./style/style.css";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather />
        <Footer />
        <button className="btn btn-primary">Primary</button>
      </div>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.css";
import "./style/App.css";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Weather defaultCity="Madrid"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;

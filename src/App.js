import "bootstrap/dist/css/bootstrap.css";
import "./style/App.css";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Footer />
        <button className="btn btn-primary">Primary</button>
      </div>
    </div>
  );
}

export default App;

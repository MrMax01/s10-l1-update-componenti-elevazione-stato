import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderSection />
      <MainSection books={fantasy} />
    </div>
  );
}

export default App;

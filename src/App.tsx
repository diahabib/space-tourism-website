import "./App.css";
import Home from "./pages/Home/Home";
import pagesData from "./data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Technology from "./pages/Technology/Technology";
import Destination from "./pages/Destination/Destination";
import Header from "./components/Header/Header";
import { RouteProvider } from "./context/RouteContext";
import { useBackground } from "./hooks/useBackground";
import Crew from "./pages/Crew/Crew";

const MainComponent = () => {
  const backgroundClass = useBackground();

  return (
    <main className={backgroundClass}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="technology"
          element={<Technology technologyData={pagesData.technology} />}
        />
        <Route
          path="/destination"
          element={<Destination destinationData={pagesData.destinations} />}
        />
        <Route path="/crew" element={<Crew crewData={pagesData.crew} />} />
      </Routes>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <RouteProvider>
        <MainComponent />
      </RouteProvider>
    </Router>
  );
};

export default App;

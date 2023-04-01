import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import TvShow from "./Component/tvshow";
import Latest from "./Component/latest";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/tvshows" element={<TvShow />} />
        <Route path="/recent" element={<Latest />} />
      </Routes>
    </Router>
  );
}

export default App;

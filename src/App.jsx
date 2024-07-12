import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourstory from "./pages/ourstory.jsx";
import Menu from "./pages/menu.jsx";
import Header from "./Components/Header.jsx";
import PlayPage from "./pages/play.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/about" element={<Ourstory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/experience" element={<Ourstory />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
